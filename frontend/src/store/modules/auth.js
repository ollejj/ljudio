import axios from "axios";

const state = {
  user: null,
  password: null,
};

const getters = {
  isAuthenticated: (state) => !!state.user || localStorage["user"],
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
    fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(user),
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        localStorage.setItem("user", user.email);
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
    await commit("setUser", user.email);
    await commit("setPassword", user.password);
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
    state.password = null;
  },
};

export default {
  state,
  getters,
  actions,
  mutations,
};
