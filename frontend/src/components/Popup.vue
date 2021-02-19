<template>
    <div class="overlay">
        <div class="content">
            <PlaylistItem
                v-for="index in getData"
                :key="index"
                v-on:click="
                    addItemToPlaylist(index.playlistid, index.playlistname)
                "
                :listName="index['playlistname']"
                :listID="index['playlistid']"
            />
        </div>
    </div>
</template>

<script>
import PlaylistItem from "./PlaylistItem.vue";

export default {
    name: "Popup",
    components: {
        PlaylistItem,
    },
    methods: {
        async addItemToPlaylist(id, name) {
            let data = {
                ...this.$store.state.playlists.pendingSongToAdd,
                playlistname: name,
            };

            await fetch("/api/playlist/" + id, {
                method: "POST",
                body: JSON.stringify(data),
                cache: "no-cache",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            this.$store.state.playlists.showPlaylistPopup = false;
        },
    },
    computed: {
        getData() {
            let data = [];

            for (
                let i = 0;
                i < this.$store.state.playlists.userPlaylistsIDs.length / 2;
                i++
            ) {
                data.push(this.$store.state.playlists.userPlaylistsIDs[i]);
            }

            return data;
        },
    },
};
</script>

<style scoped>
.overlay {
    background-color: #64646422;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
}

.content {
    width: 30vw;
    height: 30vh;
    background-color: #ffffff;
    margin: auto;
    overflow: auto;
}
</style>
