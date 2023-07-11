import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axiosInstance from '../../api/axios-config'

interface getFeedbackMasterProps {
	masterID: number | string | undefined
}

interface FeedbackInitalStateProps {
	isLoadingFeedback: boolean
	feedbackDataMaster: any /// need to full interface
}

export const getFeedbackMaster = createAsyncThunk(
	'feedback/getFeedbackMaster',
	async ({ masterID }: getFeedbackMasterProps, { rejectWithValue }) => {
		try {
			const response = await axiosInstance.get(
				`/feedbacks/master/${masterID}`,
			)
			return response.data
		} catch (error) {
			rejectWithValue((error as Error).message)
		}
	},
)

const initialState: FeedbackInitalStateProps = {
	isLoadingFeedback: false,
	feedbackDataMaster: null,
}

export const feedbackSlice = createSlice({
	name: 'feedback',
	initialState,
	reducers: {},
	extraReducers: (build) => {
		build.addCase(getFeedbackMaster.pending, (state) => {
			state.isLoadingFeedback = true
		})
		build.addCase(getFeedbackMaster.fulfilled, (state, action) => {
			state.isLoadingFeedback = false
			state.feedbackDataMaster = action.payload
		})
		build.addCase(getFeedbackMaster.rejected, (state) => {
			state.isLoadingFeedback = false
		})
	},
})
