<template>
  <div>
    <h1>Playlists</h1>
    <PlaylistItem
      v-for="index in arrPlaylist"
      :key="index.playlistid"
      v-on:click="sendSongsToStore(index.playlistid)"
      :listName="index['playlistname']"
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
  methods: {
    async sendSongsToStore(index) {
      let response = await fetch('/api/playlist/' + index);
      await response.json().then((res) => {
        this.$store.commit('setSelectedPlaylist', res)
      })
    },
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
