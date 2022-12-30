<template>
  <div class="catalog__films-list">
    <MovieListCard v-for="movie in movies" :movie="movie" :key="movie.id" />
  </div>
</template>

<script lang="ts">
import MovieListCard from './MovieListCard/MovieListCard.vue'
import { defineComponent, PropType } from 'vue'
import { Movie } from '../../types/movie/movie.js'

export default defineComponent({
  components: { MovieListCard },
  props: {
    movies: {
      type: Array as PropType<Movie[]>,
      required: true,
    },
  },
})
</script>

<style lang="scss" scoped></style>
