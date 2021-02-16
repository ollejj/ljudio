<template>
    <div>
        <SearchItem
            v-for="(song, i) in songsFromSearch"
            :key="i"
            :song="song"
        />
        <SongItem
            v-for="index in 5"
            :key="index"
            songName="asdfasdfasdf"
            songArtist="asdfson"
            songDuration="1.45"
            id="dQw4w9WgXcQ"
        />
    </div>
</template>

<script>
import SearchItem from "./SearchItem.vue";
import SongItem from "./SongItem.vue";

export default {
    name: "PlaylistContent",
    components: {
        SearchItem,
        SongItem
    },
    computed: {
        songsFromSearch() {
            console.log("Inside PlaylistContent computed songsFromSearch method")
            return this.$store.state.playlists.searchResultList
        }
    }
};
</script>

<style scoped>

</style>
