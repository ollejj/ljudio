<template>
    <div>
        <ul id="slide-out" class="sidenav">
            <li><div class="user-view"></div></li>
            <!--<li><a href="#!"><i class="material-icons">cloud</i>Search field</a></li>-->
            <li class="main">
                <div class="waves-effect">
                    <Playlists class="playlists" user="User" />
                </div>
            </li>
            <li>
                <div class="waves-effect"><NavBar class="navbar" /></div>
            </li>
        </ul>
        <a href="#" data-target="slide-out" class="sidenav-trigger"
            ><i class="material-icons">menu</i></a
        >
    </div>
</template>

<script>
import M from "materialize-css";
import NavBar from "../components/NavBar.vue";
import Playlists from "../components/Playlists.vue";

export default {
    name: "SlidingSideNav",
    components: {
        NavBar,
        Playlists,
    },
    mounted: function () {
        M.AutoInit();
    },
};
</script>

<style scoped>
#textcolor {
    color: black;
}

.main {
  height: 80%;
}

.waves-effect {
  width: 100%;
}

.navbar {
  bottom: 0;
}
</style>
