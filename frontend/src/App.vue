<template>
    <div class="main">
        <NavBar />
        <div class="left">
            <Playlists class="playlists" user="User" />
        </div>
        <div class="right">
            <PlaylistHeader
                class="playlist-header"
                playlistName="My Playlist"
            />
            <PlaylistContent class="playlist-content" />
            <SongItem class="songitem" />
            <Timeline class="timeline" />
        </div>
    </div>
</template>

<script>
import Playlists from "./components/Playlists.vue";
import PlaylistHeader from "./components/PlaylistHeader.vue";
import PlaylistContent from "./components/PlaylistContent.vue";
import Timeline from "./components/Timeline.vue";
import SongItem from "./components/SongItem.vue";
import NavBar from "./components/NavBar.vue";

export default {
    name: "App",
    components: {
        NavBar,
        Playlists,
        PlaylistHeader,
        PlaylistContent,
        Timeline,
        SongItem,
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
    overflow: auto;
}

.timeline {
    border: 1px solid black;
    height: 15vh;
}
.songitem {
    border: 1px solid black;
    height: 55vh;
}
</style>
