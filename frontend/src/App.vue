<template>
    <div class="main">
        <router-view />
    </div>
</template>

<script>
import Playlists from "./components/Playlists.vue";
import PlaylistHeader from "./components/PlaylistHeader.vue";
import PlaylistContent from "./components/PlaylistContent.vue";
import Timeline from "./components/Timeline.vue";
import SearchField from "./components/SearchField.vue";

export default {
    name: "App",
    components: {
        Playlists,
        PlaylistHeader,
        PlaylistContent,
        Timeline,
        SearchField,
    },
};
</script>

<style scoped>

.main {
    display: flex;
    flex-direction: row;
}

.left {
    display: flex;
    flex-direction: column;
    width: 15vw;
}

.right {
    display: flex;
    flex-direction: column;
    width: 85vw;
}

.playlists {
    height: 100vh;
}

.playlist-header {
    height: 15vh;
}

.playlist-content {
    height: 70vh;
    overflow: auto;
}

.timeline {
    height: 15vh;
}
.songitem {
    height: 55vh;
}
</style>
