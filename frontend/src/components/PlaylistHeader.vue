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
            return this.$store.state.playlists.selectedPlaylist;
        }
    }
};
</script>

<style scoped>
</style>
