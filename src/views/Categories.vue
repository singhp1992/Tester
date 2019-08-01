<template>
  <div class="categories">
    <h1>Categories</h1>
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
export default class Categories extends Vue {}
</script>

<style>

.categories {
  margin-top: 100px;
}
</style>