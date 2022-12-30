import { createStore, StoreOptions } from 'vuex'
import { RootState } from '../types/state/state'
import { moviesModule } from './moviesModule/moviesModule'

const store: StoreOptions<RootState> = createStore({
  modules: {
    moviesModule,
  },
})

export { store }
