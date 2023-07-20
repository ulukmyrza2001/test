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

interface deleteMasterSchedule {
	daySchedulesId: number
	masterID: number | string | undefined
	startWeek: string
}

interface deleteMasterFullScheduleProps {
	scheduleId: number
	masterID: undefined | string | number
	startWeek: string
}

interface putMasterScheduleProps {
	daySchedulesId: number | string | undefined
	masterID: number | string | undefined
	startWeek: string
	daySchedulesData: {
		startTime: string
		endTime: string
	}
}

interface postMasterScheduleProps {
	masterID: number | string | undefined
	startWeek: string
	scheduleData: {
		startDate: string
		endDate: string
		dayScheduleRequests: {
			startTime: string
			endTime: string
			dayOfWeek: string
			workingDay: boolean
		}[]
	}
}

interface getFreeTimeSchedulerProps {
	masterID: number | string | undefined
	startDate: string
	serviceTime: number
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

export const deleteMasterSchedule = createAsyncThunk(
	'schedule/deleteMasterSchedule',
	async (
		{ daySchedulesId, masterID, startWeek }: deleteMasterSchedule,
		{ rejectWithValue, dispatch },
	) => {
		try {
			const response = await axiosInstance.delete(
				`day-schedules/${daySchedulesId}`,
			)
			toast.success('Successfully toasted!')
			dispatch(getMasterSchedule({ masterID, startWeek }))
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
			rejectWithValue((error as Error).message)
		}
	},
)

export const deleteMasterFullSchedule = createAsyncThunk(
	'schedule/deleteMasterFullSchedule',
	async (
		{ scheduleId, masterID, startWeek }: deleteMasterFullScheduleProps,
		{ rejectWithValue, dispatch },
	) => {
		try {
			const response = await axiosInstance.delete(
				`schedules/${scheduleId}`,
			)
			dispatch(getMasterSchedule({ masterID, startWeek }))
			toast.success('Successfully toasted!')
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
			rejectWithValue((error as Error).message)
		}
	},
)

export const putMasterSchedule = createAsyncThunk(
	'schedule/putMasterSchedule',
	async (
		{
			daySchedulesId,
			daySchedulesData,
			startWeek,
			masterID,
		}: putMasterScheduleProps,
		{ rejectWithValue, dispatch },
	) => {
		try {
			const response = await axiosInstance.put(
				`day-schedules/${daySchedulesId}?startTime=${daySchedulesData.startTime}&endTime=${daySchedulesData.endTime}`,
			)
			toast.success('Successfully toasted!')
			dispatch(getMasterSchedule({ masterID, startWeek }))
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
			rejectWithValue((error as Error).message)
		}
	},
)

export const postMasterSchedule = createAsyncThunk(
	'schedule/postMasterSchedule',
	async (
		{ masterID, scheduleData, startWeek }: postMasterScheduleProps,
		{ rejectWithValue, dispatch },
	) => {
		try {
			const response = await axiosInstance.post(
				`schedules/masters/${masterID}`,
				scheduleData,
			)
			toast.success('Successfully toasted!')
			dispatch(getMasterSchedule({ masterID, startWeek }))
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
			rejectWithValue((error as Error).message)
		}
	},
)

export const getFreeTimeScheduler = createAsyncThunk(
	'schedule/getFreeTimeScheduler',
	async (
		{ masterID, startDate, serviceTime }: getFreeTimeSchedulerProps,
		{ rejectWithValue },
	) => {
		try {
			const response = await axiosInstance.get(
				`/day-schedules/free-time/${masterID}?appointmentDate=${startDate}&serviceTime=${serviceTime}
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
