<template>
  <div>
    <h1>Playlists</h1>
    {{ playlistid }}
  </div>
</template>

<script>
export default {
  name: "Playlists",
  data() {
    return {
      playlistid: "",
    };
  },
  async created() {
    const res = await fetch("/api/playlist");
    const data = await res.json();
    this.playlistid = data;
    
    
    const arrPlaylist = [];
    for (let key in data.res) {
      arrPlaylist.push(data.res[key]);
    }
    console.log(data);
    console.log(arrPlaylist);
  },
};
</script>

<style scoped>
</style>
