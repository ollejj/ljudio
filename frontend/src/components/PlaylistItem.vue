<template>
    <div v-on:click="openList(id)">
        <p>{{ listName }}</p>
    </div>
</template>

<script>
export default {
    name: "PlaylistItem",
    props: {
        listName: String,
        id: String,
    },
    methods: {
        openList(id) {
            //do stuff
        },
    },
};
</script>

<style scoped>
div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 5vh;
    border-bottom: 1px solid #00000022;

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
