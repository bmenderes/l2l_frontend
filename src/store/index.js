import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    logedInUser: null,
    userToken: null,
  },
  mutations: {
    setUserLogedIn(state, payload) {
      state.logedInUser = payload;
    },
    setUserToken(state, payload) {
      state.userToken = payload;
    }

  },
  actions: {
  },
  modules: {
  }
})
