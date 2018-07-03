<template lang="pug">
#app
  span.header 豆瓣电影
  el-row.nav( type="flex" justify="space-around")
    el-col.navinfo(:span="8" v-for=" info,index in items" :key="index" :class="{select:info.link==activeName}")
      router-link( :to="info.link" @click.native="cgclass(info.link)") {{info.info}}
        
  <router-view/>

</template>

  


<script>
export default {
  name: 'App',
  data(){
    return {
      activeName:"hot",
      items:[{
        link:"hot",
        info:"热映"
      },{
        link:"willshow",
        info:"即将上映"
      },{
        link:"top",
        info:"TOP250"
      }]
    }
  },
  methods:{
    cgclass(el){
      console.log(el)
      this.activeName = el
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: .2rem;
  word-break: keep-all;
  font-size: 0;
  overflow: hidden;
  .header{
    width: 50%;
    
    display: inline-block;
    position: relative;
    font-size: .2rem;
    padding: .05rem 0 .05rem;
    margin: 0;
    margin-bottom: .1rem;
    background: #32f352;
    border-radius: .1rem;
  }
  a{
    text-decoration: none;
    vertical-align:baseline;
    display: inline-block;
    text-align: center;
    width:50%;
    height: 100%;
    font-size: .18rem;
    line-height: .5rem;
    letter-spacing: .01rem;
    color: rgb(22, 19, 19);
    a:active,a:visited{
      color: rgb(22, 19, 19);
    }
  }
  .navinfo{
    height: .5rem;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #d6e6f7;
  }
  .select{
    border-bottom: 0.01rem solid #2c3e50;
  }
}
</style>

