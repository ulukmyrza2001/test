import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'

export const getCategorySelect = createAsyncThunk(
	'category/getCategorySelect',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get(`categories/select`)
			return response
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

export const getCategory = createAsyncThunk(
	'category/getCategory',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get(
				`categories?page=1&size=10`,
			)
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

const initialState: any = {
	category: [],
	categoryData: [],
	isLoadingCategory: false,
}

export const categorySlice = createSlice({
	name: 'category',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCategorySelect.pending, (state) => {
			state.isLoadingCategoryService = true
		})
		builder.addCase(getCategorySelect.fulfilled, (state, action) => {
			state.categoryData = action.payload
			state.isLoadingCategoryService = false
		})
		builder.addCase(getCategorySelect.rejected, (state) => {
			state.isLoadingCategoryService = false
		})
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
