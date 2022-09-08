import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    media: []
  },
  getters: {
  },
  mutations: {
    setMedia(state, payload) {
      state.media = payload.media
    }
  },
  actions: {
    getAllImages() {
      return "x"
    }
  },
  modules: {
  }
})
