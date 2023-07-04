import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { authSlice } from './features/auth-slice'
import { calendarSlice } from './features/calendar-slice'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		calendar: calendarSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
