import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'

interface CompaniesProps {
	isLoadingCompanies: boolean
	companies: []
}

export const getCompanies = createAsyncThunk(
	'companies/getCompanies',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get('companies')
			console.log(response)

			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

const initialState: CompaniesProps = {
	isLoadingCompanies: false,
	companies: [],
}

export const companiesSlice = createSlice({
	name: 'companies',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder.addCase(getCompanies.pending, (state) => {
			state.isLoadingCompanies = true
		})
		builder.addCase(getCompanies.fulfilled, (state, action) => {
			state.isLoadingCompanies = false
			state.companies = action.payload
		})
		builder.addCase(getCompanies.rejected, (state) => {
			state.isLoadingCompanies = false
		})
	},
})
