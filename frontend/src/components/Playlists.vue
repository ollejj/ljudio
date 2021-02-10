<template>
  <div>
    <h1>Playlists</h1>
    {{ playlist }}
  </div>
</template>

<script>
export default {
  name: "Playlists",

  data() {
    return {
      playlist: String,
      arrPlaylist: [],
    };
  },

  async created() {
    const res = await fetch("/api/playlist");
    const data = await res.json();
    this.playlist = data;
    arrPlaylist.push(data);
  },
};
</script>

<style scoped>
</style>
