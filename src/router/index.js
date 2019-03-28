import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import willshow from "@/components/willshow"
Vue.use(Router)

export default new Router({
  routes: [
    
        {
          path:"/willshow",
          component:willshow
        },
        {
          path:"/hot",
          component: index,
        },
        
      
  ]
})
