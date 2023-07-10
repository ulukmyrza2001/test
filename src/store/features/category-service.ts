import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'

export const getCategoryServiceSelect = createAsyncThunk(
	'category/getCategoryServiceSelct',
	async () => {
		try {
			const response = await axiosInstance.get(`category-service/select`)
			return response.data
		} catch {}
	},
)

export const getSingleCategoryServiceSelect = createAsyncThunk(
	'category/getSingleCategoryServiceSelect',
	async ({ cotegoryID }: { cotegoryID: any }) => {
		try {
			const response = await axiosInstance.get(
				`category-service/${cotegoryID}`,
			)
			return response.data
		} catch {}
	},
)

const initialState: any = {
	categoryServiceSelectData: [],
	categorySingleServiceSelectData: {},
	isLoadingCategoryService: false,
}

export const categoryServiceSlice = createSlice({
	name: 'categoryService',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategoryServiceSelect.pending, (state) => {
			state.isLoadingCategoryService = true
		})
		builder.addCase(getCategoryServiceSelect.fulfilled, (state, action) => {
			state.categoryServiceSelectData = action.payload
			state.isLoadingCategoryService = false
		})
		builder.addCase(getCategoryServiceSelect.rejected, (state) => {
			state.isLoadingCategoryService = false
		})
		// ---
		builder.addCase(getSingleCategoryServiceSelect.pending, (state) => {
			state.isLoadingCategoryService = true
		})
		builder.addCase(
			getSingleCategoryServiceSelect.fulfilled,
			(state, action) => {
				state.categorySingleServiceSelectData = action.payload
				state.isLoadingCategoryService = false
			},
		)
		builder.addCase(getSingleCategoryServiceSelect.rejected, (state) => {
			state.isLoadingCategoryService = false
		})
	},
})
