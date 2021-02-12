import { createStore } from "vuex";
import auth from "./modules/auth";
import auth from "./modules/playlist";

export default createStore({
  modules: {
    auth,
    playlists
  },
});
