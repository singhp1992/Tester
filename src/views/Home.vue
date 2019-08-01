<template>
  <div class="home">
    <Title msg="All Breweries"/>
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
