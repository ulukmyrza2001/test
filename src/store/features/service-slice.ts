import axiosInstance from "../../api/axios-config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { toast } from "react-hot-toast";

interface Iservice {
  isLoadingService: boolean;
  serviceData:
    | {
        id: number;
        name: string;
        icon?: string;
        subCategorySlice:
          | {
              id: number;
              name: string;
              serviceResponses:
                | {
                    id: number;
                    name: string;
                    price: number;
                    duration: number;
                  }[]
                | [];
            }[]
          | [];
      }[]
    | [];
}
const initialState: Iservice = {
  isLoadingService: false,
  serviceData: [],
};

export const getServices = createAsyncThunk(
  "services/getServices",
  async (branchId: string | number | undefined, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`v1/services/${branchId}`);
      return data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const serviceSlice = createSlice({
  name: "service",
  initialState,
  reducers: {},
  extraReducers: (builder) => [
    builder.addCase(getServices.pending, (state) => {
      state.isLoadingService = true;
    }),
    builder.addCase(getServices.fulfilled, (state, { payload }) => {
      state.isLoadingService = false;
      state.serviceData = payload;
    }),
    builder.addCase(getServices.rejected, (state) => {
      state.isLoadingService = false;
    }),
  ],
});
