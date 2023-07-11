import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'

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
	isLoadingShedule: boolean
}
interface GetMasterScheduleProps {
	masterID: number | string | undefined
	startWeek: string
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

const initialState: MasterScheduleProps = {
	masterSchedule: null,
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
	},
})
