import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'

export const getCategoryServiceSelect = createAsyncThunk(
	'category/getCategoryServiceSelct',
	async () => {
		try {
			const response = await axiosInstance.get(`category-service/select`)
			return response
		} catch {}
	},
)

export const getCategory = createAsyncThunk(
	'category/getCategory',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get(`category-service`)
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

const initialState: any = {
	category: [],
	categoryServiceSelectData: [],
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
		// --
		// ---
		builder.addCase(getCategory.pending, (state) => {
			state.isLoadingCategoryService = true
		})
		builder.addCase(getCategory.fulfilled, (state, action) => {
			state.category = action.payload
			state.isLoadingCategoryService = false
		})
		builder.addCase(getCategory.rejected, (state) => {
			state.isLoadingCategoryService = false
		})
	},
})
