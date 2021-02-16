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
    },
    searchResultList: []
};

const getters = {
    
};

const actions = {

}

const mutations = {
    addSearchResults(state, list) { 
        state.searchResultList.push(list)
        console.log(list)
    },
    removeSearchResults(state) {
        state.searchResultList.splice(0, state.searchResultList.length)
        console.log("Successfully emptied " + state.searchResultList);   
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
