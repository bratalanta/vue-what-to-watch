<template>
  <section v-if="movie.id" class="film-card film-card--full">
    <div class="film-card__hero">
      <div class="film-card__bg">
        <img :src="movie.backgroundImage" :alt="movie.name" />
      </div>
      <h1 class="visually-hidden">WTW</h1>
      <header class="page-header film-card__head">
        <LogoLink />
        <UserBlock />
      </header>
      <div class="film-card__wrap">
        <div class="film-card__desc">
          <h2 class="film-card__title">
            {{ movie.name }}
          </h2>
          <p class="film-card__meta">
            <span class="film-card__genre">{{ movie.genre }}</span>
            <span class="film-card__year">{{ movie.released }}</span>
          </p>
          <div class="film-card__buttons">
            <button class="btn btn--play film-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlink:href="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button class="btn btn--list film-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlink:href="#add"></use>
              </svg>
              <span>My list</span>
              <span class="film-card__count">9</span>
            </button>
            <router-link
              :to="{
                name: route.review,
                params: {
                  id: this.movieId,
                },
              }"
              class="btn film-card__button"
              >Add review
            </router-link>
          </div>
        </div>
      </div>
    </div>
    <div class="film-card__wrap film-card__translate-top">
      <div class="film-card__info">
        <div class="film-card__poster film-card__poster--big">
          <img
            :src="movie.posterImage"
            alt="The Grand Budapest Hotel poster"
            width="218"
            height="327"
          />
        </div>

        <MovieDescription />
      </div>
    </div>
  </section>
  <div class="page-content">
    <section class="catalog catalog--like-this">
      <h2 class="catalog__title">More like this</h2>

      <MovieList :movies="similarMovies" />
    </section>

    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '../../components/PageFooter/PageFooter.vue'
import MovieList from '../../components/MovieList/MovieList.vue'
import { defineComponent } from 'vue'
import { mapActions, mapState } from 'vuex'
import MovieDescription from '../../components/MovieDescription/MovieDescription.vue'
import { RouteName, AppRoute } from '../../const'
import UserBlock from '../../components/UserBlock/UserBlock.vue'
import LogoLink from '../../components/LogoLink/LogoLink.vue'

export default defineComponent({
  components: { LogoLink, UserBlock, MovieDescription, MovieList, PageFooter },
  mounted() {
    this.fetchMovie({ id: this.movieId })
    this.fetchSimilarMovies({ id: this.movieId })
  },
  computed: mapState({
    similarMovies: (state) => state.moviesModule.similarMovies,
    movie: (state) => state.moviesModule.movie,
  }),
  methods: {
    ...mapActions({
      fetchSimilarMovies: 'moviesModule/fetchSimilarMovies',
      fetchMovie: 'moviesModule/fetchMovie',
    }),
  },
  data() {
    return {
      movieId: this.$route.params.id,
      route: {
        review: RouteName.Review,
        home: AppRoute.Home,
      },
    }
  },
})
</script>
