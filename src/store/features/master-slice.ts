import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'
import { toast } from 'react-hot-toast'

interface MasterProps {
	dataMaster:
		| {
				id: number
				firstName: string
				lastName: string
				phoneNumber: string
		  }[]
		| []
	isLoadingMaster: boolean
}
interface deleteMasterProps {
	masterId: number
}

export const getMaster = createAsyncThunk(
	'master/getMaster',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get('/v1/masters')
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

export const deleteMaster = createAsyncThunk(
	'master/deleteMaster',
	async ({ masterId }: deleteMasterProps, { rejectWithValue, dispatch }) => {
		try {
			const response = await axiosInstance.delete(
				`/v1/masters/${masterId}`,
			)
			dispatch(getMaster())
			toast.success('Successfully toasted!')
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
			rejectWithValue((error as Error).message)
		}
	},
)

const initialState: MasterProps = {
	dataMaster: [],
	isLoadingMaster: false,
}

export const masterSlice = createSlice({
	name: 'master',
	initialState,
	reducers: {},
	extraReducers: (builder) => [
		builder.addCase(getMaster.pending, (state) => {
			state.isLoadingMaster = true
		}),
		builder.addCase(getMaster.fulfilled, (state, action) => {
			state.isLoadingMaster = false
			state.dataMaster = action.payload
		}),
		builder.addCase(getMaster.rejected, (state) => {
			state.isLoadingMaster = false
		}),
	],
})
