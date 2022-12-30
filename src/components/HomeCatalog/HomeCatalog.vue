<template>
  <section class="catalog">
    <h2 class="catalog__title visually-hidden">Catalog</h2>
    <GenreList />
    <MovieList />
    <ShowMoreButton />
  </section>
</template>

<script>
import MovieList from '../MovieList/MovieList.vue'
import GenreList from '../GenreList/GenreList.vue'
import ShowMoreButton from './ShowMoreButton/ShowMoreButton.vue'

export default {
  components: { ShowMoreButton, GenreList, MovieList },
}
</script>

<style lang="scss" scoped></style>
