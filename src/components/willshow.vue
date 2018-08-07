<template lang="pug">
div.contain
    h2.load(v-if="items.length<=0") {{loadinfo}}
    el-row
        el-col.box(v-for="item,index in items" :key="index" )
            .ncontain
                .leftcontain
                    img( :src= "imgurl(item.images.large)" v-if="item.images.large!='undefined'")
                .rightcontain 
                    div.mvinfo
                        span.mvtitle(:title="item.title" @click="jumpto(item.alt)") {{item.title}}
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
            loading:false,
            loadinfo:"加载中"
        }
    },
    created(){
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
        if (this.$store.state.wshowlist.total) {
            let list = this.$store.state.wshowlist
            this.items = list.subjects
        }else{
            // this.$http.get("/api/coming_soon")
            // .then(res=>{
            //     //console.log(res)
            //     this.$http.get(`/api/coming_soon?count=${res.data.total}`)
            //     .then(res=>{
                    
            //         console.log(res.data)
            //         this.items = res.data.subjects
            //         this.$store.commit('wlistadd',res.data)
            //     })
            // })
            this.$http.get(`/api/coming_soon?count=${20}`)
            .then(res=>{
                
                console.log(res.data)
                this.items = res.data.subjects
                this.$store.commit('wlistadd',res.data)
            })
        }
        
    },
    computed:{
        
    },
    methods:{
        imgurl,
        showsummary(el){
            // this.$http.get(`/api/subject/${el}`)
            // .then(res=>{return res.data.summary})
            
        },
        jumpto(el){
            console.log(el);
            window.open(el,"_blank")
        },
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

