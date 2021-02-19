<template>
    <div>
        <h1>{{ getPlaylistDetails.name || "Napster2" }}</h1>
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
        },
    },
};
</script>

<style scoped>
div {
    padding: 1vw;
}

h1 {
    font-size: 3rem;
    overflow: hidden;
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 850px) {
}
</style>
