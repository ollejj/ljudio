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
    }
};

export default {
    state,
    getters,
    actions,
    mutations,
};
