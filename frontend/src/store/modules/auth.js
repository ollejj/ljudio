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
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(user),
    })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    //await commit("setUser", user.get("email")).catch(error => {console.log(error)});
  },

  async logOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

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
