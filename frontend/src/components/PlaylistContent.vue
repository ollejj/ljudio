<template>
    <div>
        <SongItem
            v-for="index in 100"
            :key="index"
            songName="asdfasdfasdf"
            songArtist="asdfson"
            songDuration="1.45"
            id="dQw4w9WgXcQ"
        />
    </div>
</template>

<script>
import SongItem from "./SongItem.vue";

export default {
    name: "PlaylistContent",
    components: {
        SongItem,
    },
};
</script>

<style scoped>
div {
}
</style>
