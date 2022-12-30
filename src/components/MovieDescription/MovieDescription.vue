<template>
  <div class="film-card__desc">
    <MovieNavigationList />
    <MovieOverview />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MovieNavigationList from './MovieNavigationList/MovieNavigationList.vue';
import MovieOverview from './MovieOverview/MovieOverview.vue';

export default defineComponent({
  components: { MovieOverview, MovieNavigationList },
  watch: {
    $route() {

    }
  }
})
</script>

<style scoped></style>
