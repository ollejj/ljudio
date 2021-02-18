<template>
    <div>
        <h1>{{ getPlaylistDetails.name || 'Napster2'}}</h1>
    </div>
</template>

<script>
export default {
    name: "PlaylistHeader",
    props: {
        playlistName: String,
    },
    data() {
        return {};
    },
    computed: {
        getPlaylistDetails() {
            console.log(this.$store.state.playlists.selectedPlaylist);
            return this.$store.state.playlists.selectedPlaylist;
        }
    }
};
</script>

<style scoped>
div {
    padding: 1vw;
}

h1 {
    font-size:xx-large;
}
</style>
