<template>
    <div class="root">
        <div>
            <vue-slider ref="slider" tooltip="none" v-model="value" width="90%" />
        </div>
        <div>
            <input type="button" value="<<" id="back" />
            <input type="button" value="||" id="startstop" />
            <input type="button" value=">>" id="next" />
        </div>
    </div>
</template>

<script>
import VueSlider from "vue-slider-component";
import "vue-slider-component/theme/material.css";

export default {
    components: {
        VueSlider,
    },
    data() {
        return {
            value: 0
        };
    },
};
</script>

<style scoped>
.root {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.root > div {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 50%;
    width: 100%;
}

input {
    width: 3vw;
    height: 3vh;
}
</style>
