<template>
<div>
  <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="../assets/notes.png">
      </div>
      <a href=""><img class="circle" src="../assets/notes.png"></a>
      <a href=""><span class="white-text name" id="textcolor">Anyone</span></a>
      <a href=""><span class="white-text email" id="textcolor">anyone@gmail.com</span></a>
    </div></li>
    <li><a class="subheader">Playlists</a></li>
    <!--<li><a href="#!"><i class="material-icons">cloud</i>Search field</a></li>-->
    <li><div class="waves-effect"><Playlists class="playlists" user="User" /></div></li>
    <li><div class="divider"></div></li>
    <li><div class="waves-effect"><NavBar class="navbar" /></div></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</template>

<script>
import M from 'materialize-css'
import NavBar from "../components/NavBar.vue";
import Playlists from "../components/Playlists.vue";

export default {
    name: 'SlidingSideNav',
    components: {
      NavBar,
      Playlists
    },
    mounted: function() {
    M.AutoInit()
    }
}

</script>

<style scoped>
#textcolor {
  color:black;
}

</style>