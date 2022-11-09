<template>
  <div class="container-fluid mt-3">
    <div class="jumbotron">
      <h1>Bienvenidos a Vue CLI</h1>
      <br>
      <NavBar />
      <router-view></router-view>
    </div>
  </div>
</template>

<script>

import NavBar from './components/NavBar.vue'


export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
  h1 {
    color: blue;
  }
</style>
