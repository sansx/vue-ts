<template lang="pug">
div.contain
    h2(v-if="items.length>0") {{title}}一共{{num}}部
    h2(v-else) {{loadinfo}}
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
import { setTimeout, clearInterval } from 'timers';
export default {
    data(){
        return {
            //(v-show="item.showdetal")
            items:[],
            title:"",
            num:"",
            loading:false,
            loadinfo:"加载中"
            
        }
    },
    created(){
        if (this.$store.state.hotlist.total) {
            let res = this.$store.state.hotlist
            this.items = res.subjects
            this.title = res.title
            this.num  = res.total
        }else{
            let that = this 
            function loadanime(time){
            
                let baseinfo = that.loadinfo
                
                
                let timer = setInterval(()=>{
                    if (!that.loading) {
                        window.clearInterval(timer)
                        that.loadinfo = baseinfo
                    }
                    that.loadinfo.length-baseinfo.length<3?that.loadinfo = that.loadinfo+".":that.loadinfo = baseinfo
                },time)
                
                
            }
            this.loading = true
            loadanime(500)
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
                    // console.log(this.$store.state.hotlist.total);
                    
                    //this.$store.state.wshowlist = 
                    this.$store.commit('hlistadd',res.data)
                    // console.log(res.data)
                    this.loading = false
                })
            })
            
        }
        
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
        },
        
        
    },
    
}
</script>

<style>
    h2{
        font-size: .3rem;
        margin: 0.4rem 0;
        font-weight: bold;
        color: #909090;
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

