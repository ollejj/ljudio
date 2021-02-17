<template>
    <div>
        <SongItem
            v-for="(song, i) in getPlaylist.songs"
            :key="i"
            :songName="song.title"
            :songArtist="song.artist"
            :songDuration="millisToMinutesAndSeconds(song.duration)"
            :id="song.id"
            :playlistid="getPlaylist.id"
        />
    </div>
</template>

<script>
import SongItem from "./SongItem.vue";

export default {
    name: "PlaylistContent",
    components: {
        SongItem,
    },
    methods: {
        millisToMinutesAndSeconds(millis) {
            var minutes = Math.floor(millis / 60000);
            var seconds = ((millis % 60000) / 1000).toFixed(0);
            return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
        },
    },
    computed: {
        getPlaylist() {
            console.log(this.$store.state.playlists.selectedPlaylist);
            return this.$store.state.playlists.selectedPlaylist;
        },
    },
};
</script>

<style scoped></style>
