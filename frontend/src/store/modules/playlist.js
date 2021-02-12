import axios from "axios";

const state = {
    /*
     * Each element of [playlists] will be an object similar to [selectedPlaylist] 
     */
    playlists: [[]],
    selectedPlaylist: {
        songs: [],
        name: "",
        id: ""
    }
};

const getters = {
    
};

const actions = {

}

const mutations = {

};

export default {
    state,
    getters,
    actions,
    mutations,
};
