import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "./store";
import "./registerServiceWorker";
// import AntVue from "ant-design-vue";
// import "ant-design-vue/dist/antd.css";
import "./plugins/ant-design-vue.js";

// Vue.use(AntVue);

if (process.env.NODE_ENV === "development") {
  require("../mock");
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
