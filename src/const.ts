const enum AppRoute {
  Home = '/',
  Movie = '/movies/:id',
  Login = '/login',
  Player = '/player/:id',
  Watchlist = '/watchlist',
  NotFound = '*',
  AddReview = '/movies/:id/review',
}

const enum RouteName {
  Movie = 'movie',
  Review = 'review',
}

const enum APIRoute {
  Movies = '/films',
}

const MovieNavigationName = {
  Overview: 'Overview',
  Details: 'Details',
  Reviews: 'Reviews',
} as const

const MovieNavigationHash = {
  Overview: '#overview',
  Details: '#details',
  Reviews: '#reviews',
} as const

export { AppRoute, APIRoute, RouteName, MovieNavigationName, MovieNavigationHash }
