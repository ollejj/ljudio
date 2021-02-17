<template>
    <div>
        <span>
            <h1>Playlists</h1>
            <input type="button" value="+" v-on:click="addPlaylist" />
        </span>
        <PlaylistItem
            v-for="index in arrPlaylist"
            :key="index"
            v-on:click="sendSongsToStore(index)"
            :listName="index['playlistname']"
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
            playlistIDs: [],
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
            console.log(response);
        },
    },
    async created() {
        let userid = await fetch("/api/login", {
            method: "GET",
        });
        await userid.json().then((data) => {
            this.userid = data.id;
        });

        let playlists = await fetch("/api/userplaylist/" + this.userid);
        console.log(playlists);
        playlists
            .json()
            .then((data) => {
                data.forEach((playlist) => {
                    this.playlistIDs.push(playlist.playlistid);
                });
            })
            .then(() => {
                this.playlistIDs.forEach(async (id) => {
                    let playlistDetails = await fetch(
                        "/api/playlistsongs/" + id
                    );
                    playlistDetails.json().then((data) => {
                        if (data.length == 0) {
                            console.log("if");
                            this.arrPlaylist.push({
                                playlistname: "new playlist",
                                playlistid: id,
                            });
                        } else {
                            console.log("el");
                            data.forEach((list) => {
                                this.arrPlaylist.push(list);
                            });
                        }
                    });
                });
            });
    },
};
</script>

<style scoped>
h1 {
    margin: 1vw;
}

span {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}
</style>
