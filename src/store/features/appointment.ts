import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";

export const postAppointment = createAsyncThunk(
  "appointment/post",
  async ({ postData }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post("api/appointments", postData);
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const postAppointmentByUserId = createAsyncThunk(
  "post/appointmentByUserId",
  async ({ userId, postData }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `api/appointments/${userId}`,
        postData
      );
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

const initialState = {
  appointmentData: [],
  isLoadingAppointment: false,
};

export const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(postAppointment.pending, (state) => {
      state.isLoadingAppointment = true;
    });
    builder.addCase(postAppointment.fulfilled, (state) => {
      state.isLoadingAppointment = false;
    });
    builder.addCase(postAppointment.rejected, (state) => {
      state.isLoadingAppointment = false;
    });

    builder.addCase(postAppointmentByUserId.pending, (state) => {
      state.isLoadingAppointment = true;
    });
    builder.addCase(postAppointmentByUserId.fulfilled, (state) => {
      state.isLoadingAppointment = false;
    });
    builder.addCase(postAppointmentByUserId.rejected, (state) => {
      state.isLoadingAppointment = false;
    });
  },
});
