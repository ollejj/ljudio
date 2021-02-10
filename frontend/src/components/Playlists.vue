<template>
    <div>
        <h1>Playlists</h1>
        <PlaylistItem v-for="index in arrPlaylist.length" :key="index" :listName="arrPlaylist[index-1]['playlistid']" />
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
        };
    },

    async created() {
        /*const res = await fetch("/api/playlists/1");
    const data = await res.json();
    this.playlist = data;
    arrPlaylist.push(data);*/

        let promise = await fetch("/api/playlists/1");
        promise.json().then((data) => {
            data.forEach((playlist) => {
                this.arrPlaylist.push(playlist);
            });
        });
    },
};
</script>

<style scoped></style>
