<template>
  <div class="random">
    <h1>Random</h1>
    <!-- <Title msg="Random Brewery"/> -->
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Title from '@/components/Title.vue'; // @ is an alias to /src

@Component({
  components: {
    Title,
  },
})
export default class Home extends Vue {}
</script>

<style>

.random {
  margin-top: 100px;
}
</style>