<template>
  <nav class="film-nav film-card__nav">
    <ul class="film-nav__list">
      <MovieNavigationItem
        v-for="name of movieNavigationItemNames"
        :key="name"
        :itemName="name"
      />
    </ul>
  </nav>
</template>

<script>
import MovieNavigationItem from './MovieNavigationItem/MovieNavigationItem.vue'
import { MovieNavigationName } from '../../../const'

export default {
  components: { MovieNavigationItem },
  props: {},
  data() {
    return {
      movieNavigationItemNames: Object.values(MovieNavigationName),
    }
  },
}
</script>
