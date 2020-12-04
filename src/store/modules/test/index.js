export default {
  namespaced: true,
  state: {
    work: "Didn't Work !"
  },
  getters: {},
  mutations: {
    handleCheck: (state, found) => {
      state.work = found
    }
  },
  actions: {
    check: ({ commit }, found) => {
      commit('handleCheck', found)
    }
  }
}
