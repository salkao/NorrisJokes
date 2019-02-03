import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import App from './App.vue';
import store from './store/index';
import '../node_modules/materialize-css/dist/js/materialize';
import '../node_modules/materialize-css/dist/css/materialize.css';
//import 'materialize-css/dist/js/materialize.min';

Vue.config.productionTip = false;
Vue.use(Vuex);
Vue.use(axios);
const vuexStore = new Vuex.Store(store);

new Vue({
  store: vuexStore,
  render: h => h(App),
}).$mount('#app');
