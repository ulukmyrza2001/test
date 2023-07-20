import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'
import toast from 'react-hot-toast'

interface CalendarProps {
	dataCalendar:
		| {
				appointmentId: number | null
				startTime: string
				endTime: string
				description: string
				appointmentStatus: string
				userId: number | null
				userFirstName: string
				userLastName: string
				masterId: number | null
				masterFirstName: string
				masterLastName: string
		  }[]
		| []
	dataMaster: []
	isLoadingCalendar: boolean
}

interface GetCalendarProps {
	startTime: string
	endTime: string
	masterID: number[]
}

interface getMasterAppoinmentProps {
	masterID: number | undefined | string
	page: number
	size: number
}

interface postAppointmentProps {
	postData: {
		masterId: number
		serviceIds: number[]
		startDate: string
		startTime: string
		endTime: string
		description: string
	}
	startTime: string
	endTime: string
	masterID: number[]
}

export const getCalendar = createAsyncThunk(
	'calendar/getCalendar',
	async (
		{ startTime, endTime, masterID }: GetCalendarProps,
		{ rejectWithValue },
	) => {
		try {
			const masterIDsQueryParam = masterID
				.map((id: number) => `masterIds=${id}`)
				.join('&')
			const response = await axiosInstance.get(
				masterIDsQueryParam === ''
					? `appointments/calendar?startDay=${startTime}&endDay=${endTime}`
					: `appointments/calendar?${masterIDsQueryParam}&startDay=${startTime}&endDay=${endTime}`,
			)
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

export const getMasterAppoinment = createAsyncThunk(
	'calendar/getMasterAppoinment',
	async (
		{ masterID, page, size }: getMasterAppoinmentProps,
		{ rejectWithValue },
	) => {
		try {
			const response = await axiosInstance.get(
				`appointments/master/${masterID}?page=${page}&size=${size}`,
			)
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

export const postAppointment = createAsyncThunk(
	'calendar/postAppointment',
	async (
		{ postData, startTime, endTime, masterID }: postAppointmentProps,
		{ rejectWithValue, dispatch },
	) => {
		try {
			const response = await axiosInstance.post('/appointments', postData)
			dispatch(getCalendar({ startTime, endTime, masterID }))
			toast.success('Successfully toasted!')
			return response.data
		} catch (error) {
			toast.error((error as Error).message)
			rejectWithValue((error as Error).message)
		}
	},
)

const initialState: CalendarProps = {
	dataCalendar: [],
	dataMaster: [],
	isLoadingCalendar: false,
}

export const calendarSlice = createSlice({
	name: 'calendar',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//get

		builder.addCase(getCalendar.pending, (state) => {
			state.isLoadingCalendar = true
		})
		builder.addCase(getCalendar.fulfilled, (state, action) => {
			state.isLoadingCalendar = false
			state.dataCalendar = action.payload
		})
		builder.addCase(getCalendar.rejected, (state) => {
			state.isLoadingCalendar = false
		})

		builder.addCase(getMasterAppoinment.pending, (state) => {
			state.isLoadingCalendar = true
		})
		builder.addCase(getMasterAppoinment.fulfilled, (state, action) => {
			state.isLoadingCalendar = false
			state.dataMaster = action.payload
		})
		builder.addCase(getMasterAppoinment.rejected, (state) => {
			state.isLoadingCalendar = false
		})

		//post

		builder.addCase(postAppointment.pending, (state) => {
			state.isLoadingCalendar = true
		})
		builder.addCase(postAppointment.fulfilled, (state) => {
			state.isLoadingCalendar = false
		})
		builder.addCase(postAppointment.rejected, (state) => {
			state.isLoadingCalendar = false
		})
	},
})
