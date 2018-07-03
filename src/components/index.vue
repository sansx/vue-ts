<template lang="pug">
div.contain
    h2(v-if="items.length>0") {{title}}一共{{num}}部
    h2(v-else) 加载中....
    el-row.box
        el-col(v-for="item,index in items" class="info" :key="index" @mouseover.native="tohide(item)" @mouseout.native="toshow(item)" :span=6 @click="jumpto(item.alt)") 
            img( :src= "imgurl(item.images.large)" v-if="item.images.large!='undefined'")
            template(v-if="!item.showdetal")
                span.title {{item.title}}
            div.detalbox(v-show="item.showdetal")
                span.detaltitle( @click="jumpto(item.alt)") {{item.title}}
                
                div(v-if="item.rating.average==0" style="font-size:.2rem; color:#eee;")
                    span 暂无评分
                
                el-rate.rate(
                v-else
                :value="item.rating.average/2"
                disabled
                show-score
                text-color="#ff9900"
                score-template="{value}")
                .tags
                    span(v-for="tags in item.genres" :key="tags") {{tags}}
                
</template>

<script>
import { mapState,mapMutations} from "vuex"
import imgurl from "../units/urlload.js"
export default {
    data(){
        return {
            //(v-show="item.showdetal")
            items:[],
            title:"",
            num:"",
            
        }
    },
    created(){
        this.$http.get(`/api/in_theaters?city=温州`)
        .then(res=>{
            this.$http.get(`/api/in_theaters?city=温州&count=${res.data.total}`)
            .then(res=>{
                this.title = res.data.title;
                [...res.data.subjects].forEach(el=>{
                    
                    el.showdetal = false
                    this.items.push(el)
                })
                this.num = res.data.count
                console.log(res.data)
            })
        })
    },
    methods:{
        imgurl,
        tohide(el){
            el.showdetal = true
        },
        toshow(el){
            el.showdetal = false
        },
        jumpto(el){
            console.log(el);
            window.open(el,"_blank")
        }
        
    }
}
</script>

<style>
    h2{
        font-size: .3rem;
        margin: 0.1rem 0 .1rem 0;
    }

</style>

<style lang="scss" scoped>
    
    .contain{
        width: 100%;
    }
    img{
        width: 100%;
    }
    .box{
        width: 100%;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: center;
    }
    .el-col-6{
        width: auto;
    }
    .info{
        display: inline-flex;
        position: relative;
        .title{
            position: absolute;
            bottom: 40%;
            left: 50%;
            width: 100%;
            min-height: .5rem;
            line-height: .5rem;
            color: aliceblue;
            font-size: .25rem;
            transform: translateX(-50%);
            background: rgba(0, 0, 0,.5);
        }
        
    }
    .show{
        color: black;
    }
    .detalbox{
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgba(0, 0, 0,.7);
        justify-content: space-evenly;
        display: inherit;
        flex-direction: column;
        .detaltitle{
            font-size: .18rem;
            color: palegoldenrod;
            cursor: pointer;
        }
        .tags{
            width: 100%;
            display: inherit;
            font-size: .16rem;
            color: whitesmoke;
            justify-content: space-evenly;

        }
    }
    .rate{
        
        transform: scale(1.4);
    }
    
</style>

