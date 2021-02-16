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
    setSelectedPlaylist: (state, data) => {
        state.selectedPlaylist = {
            songs: [],
            name: "",
            id: ""
        };

        data.forEach((song) => {
            state.selectedPlaylist.name = song.playlistname;
            state.selectedPlaylist.id = song.playlistid;
            state.selectedPlaylist.songs.push({
                id: song.songid,
                album: song.album,
                title: song.title,
                duration: song.length,
                artist: song.artist
            })
        });
        

        console.log(state.selectedPlaylist);
    },
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
