import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";

export const getSubCategorySelect = createAsyncThunk(
  "category/getSubCategorySelect",
  async ({ categoryServiceId }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `sub-category-service/select/${categoryServiceId}`
      );
      return response;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

const initialState: any = {
  subCategoryData: [],
  isLoadingCategory: false,
};

export const subCategorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSubCategorySelect.pending, (state) => {
      state.isLoadingCategoryService = true;
    });
    builder.addCase(getSubCategorySelect.fulfilled, (state, action) => {
      state.subCategoryData = action.payload;
      state.isLoadingCategoryService = false;
    });
    builder.addCase(getSubCategorySelect.rejected, (state) => {
      state.isLoadingCategoryService = false;
    });
  },
});
