<template>
<div>
  <ul id="slide-out" class="sidenav">
    <li><div class="user-view">
      <div class="background">
        <img src="../assets/notes.png">
      </div>
      <a href=""><img class="circle" src="../assets/notes.png"></a>
      <a href=""><span class="white-text name">Anyone</span></a>
      <a href=""><span class="white-text email">anyone@gmail.com</span></a>
    </div></li>
    <li><a href="#!"><i class="material-icons">cloud</i>Search field</a></li>
    <li><a href="#!">Song list</a></li>
    <li><a href="#!">Play lists</a></li>
    <li><a href="#!">Musik player</a></li>
    <li><div class="divider"></div></li>
    <li><a class="subheader">Important functions</a></li>
    <li><a class="waves-effect" href="#!">Logout (With Waves)</a></li>
  </ul>
  <a href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
  </div>
</template>

<script>
import M from 'materialize-css'

export default {
    name: 'SlidingSideNav',
    mounted: function() {
    M.AutoInit()
    }
}

</script>

<style scoped>

</style>