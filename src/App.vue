<template>
  <div class="main-grid">
    <Playlists class="playlists" user="User"/>
    <PlaylistHeader class="playlist-header" playlistName="My Playlist"/>
    <PlaylistContent class="playlist-content"/>
    <Timeline class="timeline"/>
  </div>
</template>

<script>
import Playlists from './components/Playlists.vue'
import PlaylistHeader from './components/PlaylistHeader.vue'
import PlaylistContent from './components/PlaylistContent.vue'
import Timeline from './components/Timeline.vue'

export default {
  name: 'App',
  components: {
    Playlists,
    PlaylistHeader,
    PlaylistContent,
    Timeline
  }
}
</script>

<style scoped>

.main-grid {
  display: grid;
  grid-template-areas:
    "playlists  playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header"
    "playlists  playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header"
    "playlists  playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header playlist-header"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content playlist-content"
    "playlists  timeline timeline timeline timeline timeline timeline timeline timeline"
    ;
}

.playlists {
  grid-area: playlists;
  border: 1px solid black;
}

.playlist-header {
  grid-area: playlist-header;
  border: 1px solid black;
}

.playlist-content {
  grid-area: playlist-content;
  border: 1px solid black;
}

.timeline {
  grid-area: timeline;
  border: 1px solid black;
}
</style>