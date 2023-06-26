import counterReducer from './features/counterSlice'
import { userApi } from './services/userApi'
import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'

export const store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  reducer: {
    counterReducer,
    [userApi.reducerPath]: userApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({}).concat([userApi.middleware])
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
