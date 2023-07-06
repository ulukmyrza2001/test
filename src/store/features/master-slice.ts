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
interface postMasterProps {
	masterData: {
		firstName: string
		lastName: string
		authInfoRequest: {
			phoneNumber: string
			password: string | number
		}
	}
}
interface putMasterProps {
	masterData: {
		firstName: string
		lastName: string
		authInfoRequest: {
			phoneNumber: string
			password: string | number
		}
	}
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

export const postMaster = createAsyncThunk(
	'master/postMaster',
	async ({ masterData }: postMasterProps, { rejectWithValue, dispatch }) => {
		try {
			const response = await axiosInstance.post('/v1/masters', masterData)
			dispatch(getMaster())
			toast.success('Successfully toasted!')
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
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

export const putMaster = createAsyncThunk(
	'master/putMaster',
	async (
		{ masterId, masterData }: putMasterProps,
		{ rejectWithValue, dispatch },
	) => {
		try {
			const response = await axiosInstance.put(
				`/v1/masters/${masterId}`,
				masterData,
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
		//get

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

		//put

		builder.addCase(putMaster.pending, (state) => {
			state.isLoadingMaster = true
		}),
		builder.addCase(putMaster.fulfilled, (state) => {
			state.isLoadingMaster = false
		}),
		builder.addCase(putMaster.rejected, (state) => {
			state.isLoadingMaster = false
		}),

		//post

		builder.addCase(postMaster.pending, (state) => {
			state.isLoadingMaster = true
		}),
		builder.addCase(postMaster.fulfilled, (state) => {
			state.isLoadingMaster = false
		}),
		builder.addCase(postMaster.rejected, (state) => {
			state.isLoadingMaster = false
		}),

		//delete

		builder.addCase(deleteMaster.pending, (state) => {
			state.isLoadingMaster = true
		}),
		builder.addCase(deleteMaster.fulfilled, (state) => {
			state.isLoadingMaster = false
		}),
		builder.addCase(deleteMaster.rejected, (state) => {
			state.isLoadingMaster = false
		}),
	],
})
