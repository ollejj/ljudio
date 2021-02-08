<template>
    <div class="main">
        <div class="left">
            <Playlists class="playlists" user="User" />
        </div>
        <div class="right">
            <PlaylistHeader
                class="playlist-header"
                playlistName="My Playlist"
            />
            <PlaylistContent class="playlist-content" />
            <Timeline class="timeline" />
        </div>
    </div>
</template>

<script>
import Playlists from "./components/Playlists.vue";
import PlaylistHeader from "./components/PlaylistHeader.vue";
import PlaylistContent from "./components/PlaylistContent.vue";
import Timeline from "./components/Timeline.vue";

export default {
    name: "App",
    components: {
        Playlists,
        PlaylistHeader,
        PlaylistContent,
        Timeline,
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
    border: 1px solid black;
    height: 100vh;
}

.playlist-header {
    border: 1px solid black;
    height: 15vh;
}

.playlist-content {
    border: 1px solid black;
    height: 70vh;
}

.timeline {
    border: 1px solid black;
    height: 15vh;
}
</style>