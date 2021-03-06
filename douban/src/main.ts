// <reference path="./api/index.d.ts" />
// import Vue from "vue";
import { Component, Prop, Vue } from "vue-property-decorator";
import './plugins/axios'
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import 'vuetify/src/stylus/main.styl';
// import { default as test } from "./api/index"
import "./reset.css"

// let api:any = require("./api/index.js")
Vue.config.productionTip = false;
// Vue.prototype.$apis = test
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
