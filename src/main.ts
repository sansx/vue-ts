// <reference path="./api/index.d.ts" />
import Vue from "vue";
import './plugins/axios'
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import 'vuetify/src/stylus/main.styl';
import { default as test } from "./api/index"

let api:any = require("./api/index.js")
Vue.config.productionTip = false;
<Object>Vue.prototype.$apis
Vue.prototype.$apis = test
// Object.defineProperties(Vue.prototype, {
//     $apis: {
//       get() {
//         return test;
//       }
//     },
//   });
 
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
