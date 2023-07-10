import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";

export const getCountriesSelect = createAsyncThunk(
  "countrySelect/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("countries/select");
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

const initialState: any = {
  countriesData: [],
  isLoadingCountries: false,
};

export const countriesSlice = createSlice({
  name: "country",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCountriesSelect.pending, (state) => {
      state.isLoadingCountries = true;
    });
    builder.addCase(getCountriesSelect.fulfilled, (state, action) => {
      state.countriesData = action.payload;
      state.isLoadingCountries = false;
    });
    builder.addCase(getCountriesSelect.rejected, (state) => {
      state.isLoadingCountries = false;
    });
  },
});
