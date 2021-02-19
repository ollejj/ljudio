<template>
    <div>
        <p>{{ listName }}</p>
        <input v-if="!getPopupState" type="button" value="edit" v-on:click="editPlaylistName">
    </div>
</template>

<script>
export default {
    name: "PlaylistItem",
    props: {
        listName: String,
        id: String,
        listID: Number
    },
    methods: {
        editPlaylistName() {
            let newName = prompt(`What do you want to change '${this.listName}' to?`);
        },
        getPopupState() {
            return this.$store.state.playlists.showPlaylistPopup;
        }
    },
    created() {

    }
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 5vh;
    border-bottom: 1px solid #00000022;
    padding-left: .5vw;
    padding-right: .5vw;

    /*Disable the user to select text on the Playlist Items*/
    user-select: none; /*Currently supported by Chrome, Edge, Opera and Firefox*/
}

div:hover {
    background-color: #ececec;
    cursor: pointer;
}

p {
    font-size: 1.3rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 100%;
    height: 100%;
    padding: .5vw;
}
</style>
