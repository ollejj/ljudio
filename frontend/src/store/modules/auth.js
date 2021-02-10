const state = {
  user: null,
};

const getters = {};

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

  async LogIn({ commit }, user) {
    await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(user),
    }),
      await commit("setUser", User.get("email"));
  },

  async LogOut({ commit }) {
    let user = null;
    commit("logout", user);
  },
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
