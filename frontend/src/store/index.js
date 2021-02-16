import { createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";
import auth from "./modules/auth";
import playlists from "./modules/playlist";

export default createStore({
  modules: {
    auth,
    playlists,
  },
  plugins: [createPersistedState()],
});
