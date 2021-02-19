<template>
  <div>
    <p>{{ listName }}</p>

    <input type="button" value="edit" v-on:click="editPlaylistName" />
  </div>
</template>
<script>
export default {
  name: "PlaylistItem",
  props: {
    changeName: null,
    listName: String,
    useridid: String,
    listID: Number,
  },
  methods: {
    async editPlaylistName() {
      let newName = prompt(`What do you want to change '${this.listName}' to?`);
      //let changeName = "";
      await fetch(
        "/api/changeplaylistname/" +
          this.userid +
          "/" +
          this.listName +
          "/" +
          this.changeName,
        {
          method: "POST",
        }
      );
    },
    getPopupState() {
      return this.$store.state.playlists.showPlaylistPopup;
    },
  },
  async created() {
    this.$store.state.playlists.userPlaylistsIDs = [];

    let userid = await fetch("/api/login", {
      method: "GET",
    });
    await userid.json().then((data) => {
      this.userid = data.id;
      this.$store.state.playlists.userid = data.id;
    });
  },
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
  padding-left: 0.5vw;
  padding-right: 0.5vw;

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
  padding: 0.5vw;
}
</style>
