import Vue from 'vue'
import Vuex from 'vuex'

// import module
import github from './modules/github'

// use plugin
Vue.use(Vuex)

// spread store
export default new Vuex.Store({
  modules: {
    github
  }
})