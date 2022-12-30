import { api } from '../../services/api'
import { APIRoute } from '../../const'
import { ActionContext, Module } from 'vuex'
import { Movie } from '../../types/movie/movie'
import { RootState } from '../../types/state/state'

export type MoviesModule = {
  movies: Movie[]
  similarMovies: Movie[]
  movie: Movie
}

export const moviesModule: Module<MoviesModule, RootState> = {
  state: () => ({
    movies: [],
    similarMovies: [],
    movie: {} as Movie,
  }),
  mutations: {
    setMovies(state, movies) {
      state.movies = movies
    },
    setSimilarMovies(state, movies) {
      state.similarMovies = movies
    },
    setMovie(state, movie) {
      state.movie = movie
    },
  },
  actions: {
    async fetchMovies({ commit }: ActionContext<MoviesModule, RootState>) {
      try {
        const { data } = await api.get(APIRoute.Movies)
        commit('setMovies', data)
        console.log(1)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchSimilarMovies(
      { commit }: ActionContext<MoviesModule, RootState>,
      { id }
    ) {
      try {
        console.log(id)
        const { data } = await api.get(`${APIRoute.Movies}/${id}/similar`)
        commit('setSimilarMovies', data)
      } catch (e) {
        console.log(e)
      }
    },
    async fetchMovie(
      { commit }: ActionContext<MoviesModule, RootState>,
      { id }
    ) {
      try {
        const { data } = await api.get(`${APIRoute.Movies}/${id}`)
        commit('setMovie', data)
        console.log(data)
      } catch (e) {
        console.log(e)
      }
    },
  },
  namespaced: true,
}
