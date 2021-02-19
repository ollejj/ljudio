<template>
    <div>
        <SongItem
            v-for="(song, i) in getPlaylist.songs"
            :key="i"
            :songName="song.title"
            :songArtist="song.artist"
            :songDuration="song.duration"
            :id="song.id"
            :playlistid="getPlaylist.id"
            :songAlbum="song.album"
        />
    </div>
</template>

<script>
import SongItem from "./SongItem.vue";

export default {
    name: "PlaylistContent",
    components: {
        SongItem,
    },
    methods: {
        
    },
    computed: {
        getPlaylist() {
            let idCheck = this.$store.state.playlists.selectedPlaylist.songs[0].id;
            return (idCheck != undefined) ? this.$store.state.playlists.selectedPlaylist : {};
        },
    },
};
</script>

<style scoped></style>
