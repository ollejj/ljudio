<template>
<div>
<h6>Result list:</h6>
    <ul>
        <SearchItem 
            v-for="(song, i) of songList" 
            :key="i" 
            :song="song" 
        />
    </ul>
</div> 
  
</template>

<script>
import SearchItem from "./SearchItem.vue"

export default {
    name: 'SearchList',
    props: ['songList'],
    components: {
        SearchItem
    }
}
</script>

<style scoped>

</style>