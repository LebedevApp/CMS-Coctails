import Vue from 'vue'
import Vuex from 'vuex'

import Errors from './errors'
import Navigation from './navigation'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Errors,
    Navigation
  }
})
