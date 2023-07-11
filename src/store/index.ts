import { serviceSlice } from './features/service-slice'
import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useSelector } from 'react-redux'
import { authSlice } from './features/auth-slice'
import { calendarSlice } from './features/calendar-slice'
import { companiesSlice } from './features/company-slice'
import { masterSlice } from './features/master-slice'
import { categoryServiceSlice } from './features/category-service'
import { branchSlice } from './features/branch-slice'
import { adminSlice } from './features/admin-slice'
import { categorySlice } from './features/category-slice'
import { subCategorySlice } from './features/sub-category-service'
import { countriesSlice } from './features/countries-slice'
import { regionSlice } from './features/region-slice'
import { citySlice } from './features/city-slice'
import { scheduleSlice } from './features/schedule-slice'
import { feedbackSlice } from './features/feedback-slice'

export const store = configureStore({
	reducer: {
		auth: authSlice.reducer,
		calendar: calendarSlice.reducer,
		master: masterSlice.reducer,
		companies: companiesSlice.reducer,
		categoryService: categoryServiceSlice.reducer,
		admin: adminSlice.reducer,
		branch: branchSlice.reducer,
		category: categorySlice.reducer,
		subCategory: subCategorySlice.reducer,
		countries: countriesSlice.reducer,
		region: regionSlice.reducer,
		city: citySlice.reducer,
		schedule: scheduleSlice.reducer,
		service: serviceSlice.reducer,
		feedback: feedbackSlice.reducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
