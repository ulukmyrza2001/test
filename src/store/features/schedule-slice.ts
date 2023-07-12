import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'
import { toast } from 'react-hot-toast'

interface MasterScheduleProps {
	masterSchedule: {
		scheduleId: number
		startDate: string
		endDate: string
		dayScheduleResponses:
			| {
					dayScheduleId: number
					startTime: string
					endTime: string
					workingDay: boolean
					week: string
			  }[]
			| []
	} | null
	freeTimeMaster: { startTime: string; endTime: string }[] | []
	isLoadingShedule: boolean
}

interface GetMasterScheduleProps {
	masterID: number | string | undefined
	startWeek: string
}

interface putMasterScheduleProps {
	daySchedulesId: number
	daySchedulesData: {
		startTime: string
		endTime: string
		workingDay: boolean
	}
}

export const getMasterSchedule = createAsyncThunk(
	'schedule/getMasterSchedule',
	async (
		{ masterID, startWeek }: GetMasterScheduleProps,
		{ rejectWithValue },
	) => {
		try {
			const response = await axiosInstance.get(
				`schedules/masters/${masterID}?startWeek=${startWeek}`,
			)
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

export const putMasterSchedule = createAsyncThunk(
	'schedule/putMasterSchedule',
	async (
		{ daySchedulesId, daySchedulesData }: putMasterScheduleProps,
		{ rejectWithValue },
	) => {
		try {
			const response = await axiosInstance.put(
				`day-schedules/${daySchedulesId}`,
				daySchedulesData,
			)
			toast.success('Successfully toasted!')
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
			rejectWithValue((error as Error).message)
		}
	},
)

export const getFreeTimeScheduler = createAsyncThunk(
	'schedule/getFreeTimeScheduler',
	async ({ masterID, startDate }: any, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get(
				`/day-schedules/free-time/${masterID}?appointmentDate=${startDate}
			`,
			)
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

const initialState: MasterScheduleProps = {
	masterSchedule: null,
	freeTimeMaster: [],
	isLoadingShedule: false,
}

export const scheduleSlice = createSlice({
	name: 'schedule',
	initialState,
	reducers: {},
	extraReducers: (build) => {
		build.addCase(getMasterSchedule.pending, (state) => {
			state.isLoadingShedule = true
		})
		build.addCase(getMasterSchedule.fulfilled, (state, action) => {
			state.isLoadingShedule = false
			state.masterSchedule = action.payload
		})
		build.addCase(getMasterSchedule.rejected, (state) => {
			state.isLoadingShedule = false
		})

		build.addCase(getFreeTimeScheduler.pending, (state) => {
			state.isLoadingShedule = true
		})
		build.addCase(getFreeTimeScheduler.fulfilled, (state, action) => {
			state.isLoadingShedule = false
			state.freeTimeMaster = action.payload
		})
		build.addCase(getFreeTimeScheduler.rejected, (state) => {
			state.isLoadingShedule = false
		})
	},
})
