<template>
    <div>
        <h1>Search Field</h1>
        <form @submit.prevent="searchSong">
            <input
                v-model="inputText"
                type="text"
                placeholder="Search string for song/artist"
            />
            <button>Search</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "SearchField",
    data() {
        return {
            inputText: "",
            songList: [],
        };
    },
    async created() {
        /*let searchString = 'music'
        let res = await fetch('/api/yt/songs/' + searchString)
        let songs = await res.json()
        
        console.log(songs)*/
    },
    methods: {
        async searchSong() {
            fetch(
                '/api/yt/songs/' + this.inputText
            )
                .then((res) => {
                    let response = res.json();
                    console.log(response);
                })
                .catch((err) => console.log(err));
        },
    },
};
</script>

<style scoped></style>
