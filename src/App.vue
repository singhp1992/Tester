<template>
  <div id="app">
    <div id="nav">
      <router-link to="/home">Home</router-link> |
      <router-link to="/categories">Categories</router-link> | 
      <router-link to="/random">Random</router-link>
    </div>
    <router-view/>
    <div id="footer">
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

#nav a {
  font-weight: bold;
  text-decoration: none;
}

#nav a:visited  {
  color: black;
}

#nav a.router-link-exact-active {
  color: goldenrod
} 

</style>
