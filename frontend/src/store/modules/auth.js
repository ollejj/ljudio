import axios from "axios";

const state = {
  user: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user,
  StateUser: (state) => !!state.User,
};

const actions = {
  async Register({ dispatch }, form) {
    await axios
      .post("http://localhost:3000/api/users", form)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },

  async LogIn({ commit }, user) {
    await axios
      .post("http://localhost:3000/api/login", user)
      .then((response) => {
        console.log(response);
        state.user = user;
        localStorage.setItem("user", user.email);
      });
  },

  // needs to be worked on
  async logOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};
// needs work
const mutations = {
  setUser(state, email) {
    state.user = email;
  },

  logOut(state) {
    state.user = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
