<template lang="pug">
div.contain
    h2.load(v-if="items.length<=0") 正在加载...
    el-row
        el-col.box(v-for="item,index in items" :key="index" )
            .ncontain
                .leftcontain
                    img( :src= "imgurl(item.images.large)" v-if="item.images.large!='undefined'")
                .rightcontain 
                    div.mvinfo
                        span.mvtitle(:title="item.title") {{item.title}}
                        span.direc( v-if="item.directors.length==0") 暂无信息
                        span.direc( v-else ) 导:
                            span(v-for="direc,index in item.directors" :key="index" ) {{direc.name}}  
                    div.casts
                        span(v-for="cast,index in item.casts" :key="index") {{cast.name}}
                    div.allinfo {{showsummary(item.id)}}
</template>




<script>
import imgurl from "../units/urlload.js"
export default {
    data(){
        return {
            items:"",
            
        }
    },
    created(){
        this.$http.get("/api/coming_soon")
        .then(res=>{
            //console.log(res)
            this.$http.get(`/api/coming_soon?count=${res.data.total}`)
            .then(res=>{
                
                console.log(res.data)
                this.items = res.data.subjects
            })
        })
    },
    computed:{
        
    },
    methods:{
        imgurl,
        showsummary(el){
            // this.$http.get(`/api/subject/${el}`)
            // .then(res=>{return res.data.summary})
            
        }
    }
}
</script>


<style lang="scss" scoped>
.contain{
    font-size:.2rem;
}
.box{
    display: inline-flex;
    justify-content: center;
}
.ncontain{
    width:80%;
    display:inherit;
}
.leftcontain{
    width: 25%;
    height: 0;
    padding:.1rem .1rem 38% .1rem;
    overflow: hidden;
    img{
        width: 100%;
        border-radius: .1rem;
    }
}
.rightcontain{
    margin-top:.1rem;
    margin-left: .1rem;
    width: 70%;
}
.casts{
    width: 100%;
    justify-content: space-evenly;
    display: inline-flex;
    margin-top:.1rem;
}
.mvinfo>span{
    display: inline-block;
    width: 50%;
    overflow: hidden;
    text-overflow:ellipsis;
    white-space: nowrap;
    
}
.mvtitle{
    text-align : left;
    font-size: .3rem;
}
</style>

