<template>
  <div>
    <h1>Playlists</h1>
    <PlaylistItem
      v-for="index in arrPlaylist.length"
      :key="index"
      :listName="arrPlaylist[index-1]['playlistname']"
    />
  </div>
</template>

<script>
import PlaylistItem from "./PlaylistItem.vue";

export default {
  name: "Playlists",
  components: {
    PlaylistItem,
  },
  data() {
    return {
      playlist: String,
      arrPlaylist: [],
      playlistIDs: []
    };
  },

  async created() {

    let playlists = await fetch("/api/userplaylist/2");
    playlists.json().then((data) => {
      data.forEach((playlist) => {
        this.playlistIDs.push(playlist.playlistid);
      });
    })
    .then(() => {
      this.playlistIDs.forEach(async (id) => {
        let playlistDetails = await fetch("/api/playlistsongs/" + id);
        playlistDetails.json()
        .then((data) => {
          data.forEach((list) => {
            this.arrPlaylist.push(list);
          });
        });
      });
    });

  },
};
</script>

<style scoped></style>
