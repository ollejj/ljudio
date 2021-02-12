import { createStore } from "vuex";
import auth from "./modules/auth";
import playlists from "./modules/playlist";

export default createStore({
  modules: {
    auth,
    playlists
  },
});
