export default {
  state: {
      errors: null
  },
  mutations: {
      clearErrors(state) {
          state.errors = null
      }
  },
  actions: {},
  getters: {
      get_errors(state) {
          return state.errors
      }
  }
};
