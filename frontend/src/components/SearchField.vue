<template>
    <div>
        <h1>Search Field</h1>
        <input
            v-model="inputText"
            type="text"
            placeholder="Search string for song"
        />
        <button v-on:click="searchSong">Search</button>
    </div>
</template>

<script>
export default {
    name: "SearchField",
    data() {
        return {
            inputText: "",
            results: [],
        };
    },
    methods: {
        async searchSong() {
            let promise = await fetch("/api/yt/songs/" + this.inputText);
            await promise
                .json()
                .then((data) => {
                    console.log(data);

                    data.content.forEach((song) => {
                        this.results.push({
                            title: song.name,
                            album: song.album,
                            artist: song.artist.name,
                            songid: song.videoId,
                            length: song.duration,
                            playlistname: `Search results for '${this.inputText}'`,
                        });
                    });

                    console.log(this.inputText);
                })
                .catch((err) => console.log(err));
            this.$store.commit("setSelectedPlaylist", this.results);
            this.inputText = "";
            this.results = [];
        },
    },
};
</script>

<style scoped>
h1, form, button {
    margin: 5px;
}

input, button {
    border-radius: 10px;
}

button:hover {
    background-color:greenyellow;
}
</style>
