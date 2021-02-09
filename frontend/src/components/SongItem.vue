<template>
    <div v-on:click="playSong(id)">
        <p>{{ songName }}</p>
        <p>{{ songArtist }}</p>
        <p>{{ songDuration }}</p>
    </div>
</template>

<script>
export default {
    name: "SongItem",
    props: {
        songName: String,
        songArtist: String,
        songDuration: String,
        id: String,
    },
    methods: {
        playSong(id) {
            //Use Youtube API to play song
            //The prop 'id' will serve as a pointer to the video/song id on youtube
            //example:
            console.log(id);
            window.location.href = `https://www.youtube.com/watch?v=${id}`;
        },
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
    padding-left: 2vw;
    padding-right: 2vw;

    /*Disable the user to select text on the Song Items*/
    user-select: none; /*Currently supported by Chrome, Edge, Opera and Firefox*/
}

div:hover {
    background-color: #ececec;
    cursor: pointer;
}

p {
    font-size: 1.3rem;
    text-align: center;
}
</style>
