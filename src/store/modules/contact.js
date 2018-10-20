/* eslint-disable no-param-reassign */
export default {
  state: {
    name: '',
    email: '',
    message: '',
  },
  mutations: {
    SET_NAME(state, name) {
      state.name = name;
    },
    SET_EMAIL(state, email) {
      state.email = email;
    },
    SET_MESSAGE(state, message) {
      state.message = message;
    },
  },
  getters: {
    name: state => state.name,
    email: state => state.email,
    message: state => state.message,
  },
  actions: {

  },
  namespaced: true,
};
