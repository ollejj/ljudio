<template>
    <div v-on:dblclick="playSong(id)">
        <span>{{ songName }}</span>
        <span>{{ songArtist }}</span>
        <span>{{ millisToMinutesAndSeconds(songDuration) }}</span>
        <span v-if:="playlistid == -1">
            <input type="button" value="+" v-on:click="addSongToPlaylist" />
        </span>
        <span v-else:="playlistid != -1">
            <input type="button" value="-" v-on:click="removeSongFromPlaylist" />
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
        songDuration: Number,
        id: String,
        playlistid: Number,
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
            this.$store.state.playlists.currentSong = id;
        },
        addSongToPlaylist() {
            let songObject = {
                songid: this.id,
                artist: this.songArtist,
                title: this.songName,
                album: this.songAlbum,
                length: this.songDuration,
            };

            this.$store.state.playlists.pendingSongToAdd = songObject;
            this.$store.state.playlists.showPlaylistPopup = true;
        },
        async removeSongFromPlaylist() {
            let response = await fetch("/api/playlist/" + this.playlistid + "/" + this.id, {
            method: "DELETE",
            });
            await response
                .json()
                .then((data) => {
                    console.log("Response from removeSongFromPlaylist()" + data);
                })
                .catch((err) => console.log(err));
        },

        millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        }
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
