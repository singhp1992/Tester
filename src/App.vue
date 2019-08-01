<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/categories">Categories</router-link> | 
      <router-link to="/random">Random</router-link>
    </div>
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


@Component({
  components: {
    Landing,
  },
})

export default class App extends Vue {}

</script>

<style>

#app {
  font-family: 'Raleway', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}


 #nav {
  padding: 30px;
} 

a {
  font-weight: bold;
  text-decoration: none;
  color: black;
}

a:visited  {
  color: black;
}

#nav a.router-link-exact-active {
  color: goldenrod
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
}

#footer a {
  color: goldenrod;
}

</style>
