<template>
<div>
    <li>{{ song.songTitle }}, {{ song.artistName }}, {{ song.videoId }}</li>
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