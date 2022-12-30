<template>
  <article class="small-film-card catalog__films-card">
    <div class="small-film-card__image">
      <img
        :alt="movie.name"
        height="175"
        :src="movie.previewImage"
        width="280"
      />
    </div>
    <h3 class="small-film-card__title">
      <router-link
        class="small-film-card__link"
        :to="{
          name: movieRoute,
          params: {
            id: movie.id,
          },
          hash: MovieNavigationHash.Details,
        }"
        >{{ movie.name }}
      </router-link>
    </h3>
  </article>
</template>

<script lang="ts">
import { MovieNavigationHash, RouteName } from '../../../const'
import { Movie } from '../../../types/movie/movie'
import { defineComponent } from 'vue'
import { PropType } from 'vue'

export default defineComponent({
  props: {
    movie: {
      type: Object as PropType<Movie>,
      required: true,
    },
  },
  data() {
    return {
      movieRoute: RouteName.Movie,
      MovieNavigationHash,
    }
  },
})
</script>
