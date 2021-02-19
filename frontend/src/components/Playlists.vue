<template>
    <div>
        <span>
            <h2>Playlists</h2>
            <input type="button" value="+" v-on:click="addPlaylist" />
        </span>
        <PlaylistItem
            v-for="index in arrPlaylist"
            :key="index"
            v-on:click="sendSongsToStore(index)"
            :listName="index['playlistname']"
            :listID="index['playlistid']"
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
            userid: -1,
        };
    },
    methods: {
        async sendSongsToStore(index) {
            let response = await fetch("/api/playlist/" + index.playlistid);
            await response.json().then((res) => {
                const data =
                    res.length > 0
                        ? res
                        : [
                              {
                                  playlistid: index.playlistid,
                                  playlistname: index.playlistname,
                              },
                          ];

                this.$store.commit("setSelectedPlaylist", data);
            });
        },
        async addPlaylist() {
            let response = await fetch("/api/addplaylist/" + this.userid, {
                method: "POST",
            });
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

        let playlists = await fetch("/api/userplaylist/" + this.userid);
        playlists
            .json()
            .then((data) => {
                data.forEach((playlist) => {
                    this.$store.state.playlists.userPlaylistsIDs.push( playlist );
                    this.arrPlaylist.push(playlist);
                });
            })
            /*.then(() => {
                this.playlistIDs.forEach(async (id) => {
                    let playlistDetails = await fetch(
                        "/api/playlistsongs/" + id
                    );
                    playlistDetails.json().then((data) => {
                        if (data.length == 0) {
                            this.arrPlaylist.push({
                                playlistname: "new playlist",
                                playlistid: id,
                            });
                        } else {
                            data.forEach((list) => {
                                this.arrPlaylist.push(list);
                            });
                        }
                    });
                });
            });*/
    },
};
</script>

<style scoped>
h2 {
    font-size: 2rem;
    margin: 1vw;
}

input {
    margin-right: 1vw;
}

span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

@media screen and (max-width: 1107px) {
    span {
    flex-direction: column;
}
}

@media screen and (max-width: 600px) {
    h1 {
        font-size: small;
        margin: 1vw;
    }

    span {
        display: flex;
        font-size: x-small;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;
    }
}

</style>
