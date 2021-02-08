<template>
    <div>
        <h1>{{ playlistName }}</h1>
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
};
</script>

<style scoped>
div {
    height: 100%;
}
</style>
