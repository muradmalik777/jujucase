import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import "./mixins/Global";

Vue.config.productionTip = false

var vueInstance = new Vue({
  el: "#app",
  template: "<App/>",
  router,
  render: h => h(App)
});

export default vueInstance;
