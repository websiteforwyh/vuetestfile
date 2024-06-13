import { createStore } from 'vuex'

export default createStore({
  state: {
    isAtTop: false
  },
  getters: {
  },
  mutations: {
    isAtTop(state, payload) {
      state.isAtTop = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
