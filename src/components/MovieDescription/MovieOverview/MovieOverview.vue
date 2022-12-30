<template>
  <div class="film-rating">
    <div class="film-rating__score">{{ movie.rating }}</div>
    <p class="film-rating__meta">
      <span class="film-rating__level">Very good</span>
      <span class="film-rating__count">{{ movie.scoresCount }}</span>
    </p>
  </div>
  <div class="film-card__text">
    <p>
      {{ movie.description }}
    </p>

    <p class="film-card__director">
      <strong>Director: {{ movie.director }}</strong>
    </p>

    <p class="film-card__starring">
      <strong>Starring: {{ 1 }}</strong>
    </p>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  computed: {
    ...mapState({
      movie: (state) => state.moviesModule.movie,
    }),
  },
}
</script>
