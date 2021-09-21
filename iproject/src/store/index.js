import Vue from 'vue'
import Vuex from 'vuex'
import server from '../apis/axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoggedIn: false
  },
  mutations: {
    SET_IS_LOGGED_IN (state, payload) {
      this.isLoggedIn = payload
    }
  },
  actions: {
    submitLogin (context, payload) {
      return server({
        method: 'post',
        url: '/login',
        data: payload
      })
    },
    submitRegister (context, payload) {
      return server({
        method: 'post',
        url: '/register',
        data: payload
      })
    }
  },
  modules: {
  }
})
