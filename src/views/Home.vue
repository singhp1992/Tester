<template>
  <div class="home">
    <h1> All Breweries </h1>
    <!-- <Title msg="All Breweries"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import Title from '@/components/Title.vue'; // @ is an alias to /src

// @Component({
//   components: {
//     Title,
//   },
// })
export default class Home extends Vue {}
</script>

<style>

.home {
  margin-top: 100px;
}

</style>