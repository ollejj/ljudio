import axios from "axios";

const state = {
  user: null,
  password: null,
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
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.loggedIn == true) {
          commit("setUser", user.email);
          console.log(state.user);
        } else {
          console.log("wrong email or password");
          return;
        }
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  },

  async LogOut({ commit }) {
    await fetch("/api/login", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.loggedIn == true) {
          fetch("/api/login", {
            method: "DELETE",
          })
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
            })
            .catch((error) => {
              console.error("Error:", error);
            });
        }
      })
      .catch((error) => {
        console.error("Error", error);
      });
    localStorage.removeItem("user");
    let user = null;
    commit("logOut", user);
  },
};
const mutations = {
  setUser(state, email) {
    state.user = email;
  },

  setPassword(state, password) {
    state.password = password;
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
