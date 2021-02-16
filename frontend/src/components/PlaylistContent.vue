<template>
    <div>
        <SongItem
            v-for="(song, i) in getSongs"
            :key="i"
            songName="asdfasdfasdf"
            songArtist="asdfson"
            songDuration="1.45"
            id="dQw4w9WgXcQ"
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
    computed: {
        getSongs() {
            return this.$store.state.playlists.selectedPlaylist.songs;
        }
    },
};
</script>

<style scoped>
div {
}
</style>
