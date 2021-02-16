<template>
<div>
    <li>{{ song.songName }}, {{ song.songArtist }}, {{ song.id }}, {{ song.songDuration }}</li>
</div>
  
</template>

<script>

export default {
    name: 'SearchItem',
    props: ['song']
}

</script>

<style scoped>

</style>