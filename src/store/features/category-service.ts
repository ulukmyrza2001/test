import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";

export const getCategoryServiceSelect = createAsyncThunk(
  "category/getCategoryServiceSelct",
  async () => {
    try {
      const response = await axiosInstance.get(`category-service/select`);
      console.log(response);
      return response;
    } catch {}
  }
);

const initialState: any = {
  categoryServiceSelectData: [],
  isLoadingCategoryService: false,
};

export const categoryServiceSlice = createSlice({
  name: "categoryService",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategoryServiceSelect.pending, (state) => {
      state.isLoadingCategoryService = true;
    });
    builder.addCase(getCategoryServiceSelect.fulfilled, (state, action) => {
      state.categoryServiceSelectData = action.payload;
      state.isLoadingCategoryService = false;
    });
    builder.addCase(getCategoryServiceSelect.rejected, (state) => {
      state.isLoadingCategoryService = false;
    });
  },
});
