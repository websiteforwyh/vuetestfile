import { createStore } from 'vuex'

export default createStore({
  state: {
    containerScrolled: false,
  },
  getters: {
  },
  mutations: {
    setContainerScrolled(state, payload) {
      state.containerScrolled = payload;
    }
  },
  actions: {
  },
  modules: {
  }
})
