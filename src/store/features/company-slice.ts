import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";
import { toast } from "react-hot-toast";

interface CompaniesProps {
  isLoadingCompanies: boolean;
  companies: [];
}
interface IpostData {
  name: string;
  logo?: string;
  domain?: string;
  instagram?: string;
  categoryType?: string;
  branchRequest:
    | {
        phoneNumber: string;
        regionId: number;
        cityId: number;
        addressRequest:
          | {
              name: string;
              latitude: number;
              longitude: number;
            }
          | undefined;
      }
    | undefined;
  ownerRequest:
    | {
        firstName: string;
        lastName: string;
      }
    | undefined;
  authInfoRequest: {
    phoneNumber: string;
    password: string;
  };
}

export const getCompanies = createAsyncThunk(
  "companies/getCompanies",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("companies");
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const postCompanies = createAsyncThunk(
  "companies/postCompanies",
  async (Data: IpostData, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.post(`companies`, Data);
      toast.success("Successfully toasted!");
      dispatch(getCompanies());
      return response.data;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

export const companiesDelete = createAsyncThunk(
  "companies/companiesDelete",
  async (
    companyId: number | string | undefined,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axiosInstance.delete(`companies/${companyId}`);
      toast.success("Удаление прошло успешно!");
      dispatch(getCompanies());
      return response.data;
    } catch (error) {
      toast.error((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: CompaniesProps = {
  isLoadingCompanies: false,
  companies: [],
};

export const companiesSlice = createSlice({
  name: "companies",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCompanies.pending, (state) => {
      state.isLoadingCompanies = true;
    });
    builder.addCase(getCompanies.fulfilled, (state, action) => {
      state.isLoadingCompanies = false;
      state.companies = action.payload;
    });
    builder.addCase(getCompanies.rejected, (state) => {
      state.isLoadingCompanies = false;
    });

    builder.addCase(companiesDelete.pending, (state) => {
      state.isLoadingCompanies = true;
    });
    builder.addCase(companiesDelete.fulfilled, (state) => {
      state.isLoadingCompanies = false;
    });
    builder.addCase(companiesDelete.rejected, (state) => {
      state.isLoadingCompanies = false;
    });
  },
});
