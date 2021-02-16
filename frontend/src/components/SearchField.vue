<template>
    <div>
        <h1>Search Field</h1>
        <form @submit.prevent="searchSong">
            <input
                v-model="inputText"
                type="text"
                placeholder="Search string for song"
            />
            <button>Search</button>
        </form>
    </div>
</template>

<script>

export default {
    name: 'SearchField',
    components: {
        //SearchList
    },
    data () {
        return {
            inputText: "",
            songList: [],
        };
    },
    computed: {
        songsFromSearch() {
            return this.$store.state.searchResultList
        }
    },
    methods: {
        async searchSong() {
            let promise = await fetch(
                '/api/yt/songs/' + this.inputText
            )
            promise.json().then((data) => {
                let i;
                for (i = 0; i < data.content.length; i++) {
                    this.songList.push({
                        songName: data.content[i].name, 
                        songArtist: data.content[i].artist.name,
                        id: data.content[i].videoId,
                        songDuration:data.content[i].duration})
                }
            })
            .catch((err) => console.log(err));
            this.$store.commit('addSearchResults', this.songList)
            this.inputText = ''
        },
    }

}
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
