/// <reference path="./api/api.d.ts" />
import Vue from "vue";
import './plugins/axios'
import './plugins/vuetify'
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import 'vuetify/src/stylus/main.styl';


let api:any = require("./api/index.js")
Vue.config.productionTip = false;
Object.defineProperties(Vue.prototype, {
    $apis: {
      get() {
        return api;
      }
    },
  });

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
