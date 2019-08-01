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
  position: fixed;
  text-align: center;
  margin-left: -30px;
  left: 0;
  top: 0;
  right: 0;
  width: 100%;
  background-color: black;
  color: white;
  border-bottom: 2px solid black;
  z-index: 10;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
} 

a {
  font-weight: bold;
  text-decoration: none;
  color: white;
}

a:visited  {
  color: white;
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
