import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home.vue'

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    { // main page
      path: '/home/:user?/:repository?',
      name: 'Home',
      component: Home
    },
    // otherwise go to here
    { path: '*', redirect: '/home' },
  ]
})
