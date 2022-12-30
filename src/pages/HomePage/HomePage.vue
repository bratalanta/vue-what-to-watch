<template>
  <section class="film-card">
    <div class="film-card__bg">
      <img
        alt="The Grand Budapest Hotel"
        src="img/bg-the-grand-budapest-hotel.jpg"
      />
    </div>

    <h1 class="visually-hidden">WTW</h1>

    <header class="page-header film-card__head">
      <div class="logo">
        <a class="logo__link">
          <span class="logo__letter logo__letter--1">W</span>
          <span class="logo__letter logo__letter--2">T</span>
          <span class="logo__letter logo__letter--3">W</span>
        </a>
      </div>

      <ul class="user-block">
        <li class="user-block__item">
          <div class="user-block__avatar">
            <img
              alt="User avatar"
              height="63"
              src="img/avatar.jpg"
              width="63"
            />
          </div>
        </li>
        <li class="user-block__item">
          <a class="user-block__link">Sign out</a>
        </li>
      </ul>
    </header>

    <div class="film-card__wrap">
      <div class="film-card__info">
        <div class="film-card__poster">
          <img
            alt="The Grand Budapest Hotel poster"
            height="327"
            src="img/the-grand-budapest-hotel-poster.jpg"
            width="218"
          />
        </div>

        <div class="film-card__desc">
          <h2 class="film-card__title">The Grand Budapest Hotel</h2>
          <p class="film-card__meta">
            <span class="film-card__genre">Drama</span>
            <span class="film-card__year">2014</span>
          </p>

          <div class="film-card__buttons">
            <button class="btn btn--play film-card__button" type="button">
              <svg height="19" viewBox="0 0 19 19" width="19">
                <use xlink:href="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button class="btn btn--list film-card__button" type="button">
              <svg height="20" viewBox="0 0 19 20" width="19">
                <use xlink:href="#add"></use>
              </svg>
              <span>My list</span>
              <span class="film-card__count">9</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div class="page-content">
    <MovieList :movies="movies"/>
    <PageFooter />
  </div>
</template>

<script>
import PageFooter from '../../components/PageFooter/PageFooter.vue'
import MovieList from '../../components/MovieList/MovieList.vue'
import { mapActions, mapState } from 'vuex'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { MovieList, PageFooter },
  mounted() {
    this.fetchMovies()
  },
  computed: mapState({
    movies: (state) => state.moviesModule.movies,
  }),
  methods: {
    ...mapActions({
      fetchMovies: 'moviesModule/fetchMovies',
    }),
  },
})
</script>
