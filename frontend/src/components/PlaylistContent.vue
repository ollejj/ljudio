<template>
    <div>
        <ul>
        <SearchItem
            v-for="(song, i) in songsFromSearch"
            :key="i"
            :song="song"
        />
        </ul>
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
import SongItem from "./SongItem.vue";
import SearchItem from "./SearchItem.vue"

export default {
    name: "PlaylistContent",
    components: {
        SearchItem,
        SongItem

    },
    computed: {
        songsFromSearch() {
            console.log("Nu har vi kommit så här långt.")
            return this.$store.state.searchResultList
        }
    }
};
</script>

<style scoped>

</style>
