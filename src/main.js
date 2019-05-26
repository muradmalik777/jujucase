import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from "./router";
import "./mixins/Global";
import Vuetify from 'vuetify'
import "./assets/scss/theme.scss"
import store from './store'
import Toasted from 'vue-toasted';

Vue.use(require('vue-moment'));
Vue.use(Toasted);
Vue.use(Vuetify);

Vue.config.productionTip = false

var vueInstance = new Vue({
  el: "#app",
  template: "<App/>",
  router,
  store,
  render: h => h(App)
});

export default vueInstance;
