<template>
    <div>
        <h1>{{ user }}'s Playlists</h1>
    </div>
</template>

<script>
export default {
    name: "Playlist",
    props: {
        user: String,
    },
    data() {
        return {};
    },
};
</script>

<style scoped>
</style>
