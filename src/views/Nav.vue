<template>
  <div id="nav">
        <router-link to="/">Welcome</router-link> |
        <router-link to="/home">All Breweries</router-link> |
        <router-link to="/categories">Categories</router-link> | 
        <router-link to="/random">Random</router-link>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

export default class Nav extends Vue {}
</script>

<style>

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
  box-shadow: 0 8px 16px 0 rgba(0, 0, 0, 0.3);
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
</style>