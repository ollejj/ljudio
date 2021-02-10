const state = {
  user: null,
};

const getters = {
    isAuthenticated: state => !!state.user,
    StateUser: state => !!state.User
};

const actions = {
  async Register({ dispatch }, form) {
    await fetch("api/users", {
      method: "POST",
      body: JSON.stringify(form),
    });
    /*    let userForm = formData()
        userForm.append(email, form.email)
        userForm.append(password, form.password)
        await dispatch() */
  },

  async logIn({ commit }, user) {
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(user),
    }),
      await commit("setUser", User.get("email"));
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
