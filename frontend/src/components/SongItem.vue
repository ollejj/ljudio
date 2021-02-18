<template>
    <div v-on:dblclick="playSong(id)">
        <span>{{ songName }}</span>
        <span>{{ songArtist }}</span>
        <span>{{ songDuration }}</span>
        <span v-if:="playlistid == -1">
            <input type="button" value="+" v-on:click="dropDownPlaylists" />
        </span>
        <span v-else:="playlistid != -1">
            <input type="button" value="-" v-on:click="removeSongToPlaylist" />
        </span>
    </div>
</template>

<script>

export default {
    name: "SongItem",
    components: {
    },
    props: {
        songName: String,
        songArtist: String,
        songDuration: String,
        id: String,
        playlistid: String,
        songAlbum: String,
    },
    data() {
        return {
        };
    },
    computed: {
    },
    methods: {
        playSong(id) {
            //Use Youtube API to play song
            //The prop 'id' will serve as a pointer to the video/song id on youtube
            //example:
            console.log(id);
            window.location.href = `https://www.youtube.com/watch?v=${id}`;
        },
        addSongToPlaylist(id) {
            let songObject = {
                songid: this.id,
                artist: this.songArtist,
                title: this.songName,
                album: this.songAlbum,
                length: this.songDuration,
            };
        },
        removeSongToPlaylist() {},
    },
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    height: 5vh;
    padding-left: 2vw;
    padding-right: 2vw;
    border-bottom: 1px solid #00000022;

    /*Disable the user to select text on the Song Items*/
    user-select: none; /*Currently supported by Chrome, Edge, Opera and Firefox*/
}

div:hover {
    background-color: #ececec;
    cursor: pointer;
}

span {
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 100%;
    padding: 0.5vw;
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 375px) {
    span {
        display: flex;
        font-size: 0.8rem;
    }
}
</style>
