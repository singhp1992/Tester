<template>
  <div id="app">
    <Nav />
    <router-view/>
    <div id="footer">
      <router-link to="/home">Home</router-link> |
      <router-link to="/categories">Categories</router-link> | 
      <router-link to="/random">Random</router-link> |
      <router-link to="/github" target="_blank">Preeti Singh</router-link>
    </div>
  </div>
</template>

<script lang="ts">

import VueRouter, { RouteConfig } from 'vue-router';
import { Component, Vue } from 'vue-property-decorator';
import Landing from './views/Landing.vue';
import Nav from './views/Nav.vue';


@Component({
  components: {
    Landing,
    Nav,
  },
})

export default class App extends Vue {}

</script>

<style>

#app {
  font-family: 'Roboto Mono', monospace, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

#footer {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  background-color: black;
  color: white;
  text-align: center;
  z-index: 10;
  height: 5%;
  padding-top: 10px;
  border-top: 2px solid black;
  box-shadow: 0 -5px 16px 0px rgba(0,0,0,0.3);
}

#footer a {
  color: goldenrod;
}

</style>

    <!-- <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/categories">Categories</router-link> | 
      <router-link to="/random">Random</router-link>
    </div> -->
