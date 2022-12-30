import Home from '../pages/HomePage/HomePage.vue'
import { AppRoute, RouteName } from '../const'
import { createRouter, createWebHistory } from 'vue-router'
import MoviePage from '../pages/MoviePage/MoviePage.vue'
import PlayerPage from '../pages/PlayerPage/PlayerPage.vue'
import LoginPage from '../pages/LoginPage/LoginPage.vue'
import WatchlistPage from '../pages/WatchlistPage/WatchlistPage.vue'
import AddReviewPage from '../pages/AddReviewPage/AddReviewPage.vue'

const routes = [
  {
    path: AppRoute.Home,
    component: Home,
  },
  {
    path: AppRoute.Movie,
    component: MoviePage,
    name: RouteName.Movie,
  },
  {
    path: AppRoute.Player,
    component: PlayerPage,
  },
  {
    path: AppRoute.Login,
    component: LoginPage,
  },
  {
    path: AppRoute.Watchlist,
    component: WatchlistPage,
  },
  {
    path: AppRoute.AddReview,
    component: AddReviewPage,
    name: RouteName.Review,
  },
]

const router = createRouter({
  routes,
  history: createWebHistory(),
})

export default router
