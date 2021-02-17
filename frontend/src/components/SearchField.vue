<template>
    <div>
        <input v-on:keyup.enter="searchSong"
            v-model="inputText"
            type="text"
            placeholder="Search..."
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
            if (!this.inputText) return;

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
            this.results = [];
        },
    },
};
</script>

<style scoped>

div {
    padding: 1vw;
    box-sizing: border-box;
}

h1, form, button {
    margin: 5px;
}

input {
    width: 80%;
    height: 30%;
}

button {
    width: 20%;
    margin: 0;
    height: 30%;
}

@media screen and (max-width: 1024px) {
}

@media screen and (max-width: 375px) {

    input, button {
        height: 50%;
    }

    button {
        font-size: 1rem;
    }
}
</style>
