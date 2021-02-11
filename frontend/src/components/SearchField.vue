<template>
    <div>
        <h1>Search Field</h1>
        <form @submit.prevent="searchSong">
            <input v-model="inputText" type="text" placeholder="Search string for song/artist" />
            <button>Search</button>
        </form>
        <SearchList v-bind:songList="songList"/>
    </div>
</template>

<script>
import SearchList from "./SearchList.vue"

export default {
    name: 'SearchField',
    components: {
        SearchList
    },
    data () {
        return {
            inputText: '',
            songList: []
        }
    },
    /*async created() {
        /*let searchString = 'music'
        let res = await fetch('/api/yt/songs/' + searchString)
        let songs = await res.json()
        
        console.log(songs)
    },*/
    methods: {
        async searchSong() {
            let promise = await fetch(
                '/api/yt/songs/' + this.inputText
            )
            promise.json().then((data) => {
                var i;
                for (i = 0; i < data.content.length; i++) {
                    this.songList.push({songTitle: data.content[i].name, 
                                        artistName: data.content[i].artist.name,
                                        videoId: data.content[i].videoId,
                                        songLength:data.content[i].duration})
                }
            })
            .catch((err) => console.log(err));
            console.log(this.songList)
        }
    }

}
</script>

<style scoped>

</style>