import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import BootstrapVue from 'bootstrap-vue';

const BASE_URL = 'https://api.github.com/'

axios.defaults.baseURL = BASE_URL

Vue.use(BootstrapVue)

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
