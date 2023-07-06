import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";
import { toast } from "react-hot-toast";

export const adminsGet = createAsyncThunk(
  "admins/get",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("admins");
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const adminsRegistration = createAsyncThunk(
  "admins/registration",
  async ({ branchId, AdminsData }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        `admins/registration/${branchId}`,
        AdminsData
      );
      toast.success("Создание прошло успешно!");
      return response.data;
    } catch (error) {
      toast.error((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const adminsDelete = createAsyncThunk(
  "admins/delete",
  async ({ adminId }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`admins/${adminId}`);
      toast.success("Удаление прошло успешно!");
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const adminsPut = createAsyncThunk(
  "admins/put",
  async ({ adminId, AdminsData }: any, { rejectWithValuew }: any) => {
    try {
      const response = await axiosInstance.put(`admins/${adminId}`, AdminsData);
      toast.success("Изменения прошло успешно!");
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValuew((error as Error).message);
    }
  }
);

const initialState: any = {
  adminData: [],
  isLoadindOwner: false,
};

export const OwnerSlice = createSlice({
  name: "owwner",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(adminsGet.pending, (state) => {
      state.isLoadindOwner = true;
    });
    builder.addCase(adminsGet.fulfilled, (state, action) => {
      state.adminData = action.payload;
      state.isLoadindOwner = false;
    });
    builder.addCase(adminsGet.rejected, (state) => {
      state.isLoadindOwner = false;
    });

    //-------------------------------------------------------->

    builder.addCase(adminsRegistration.pending, (state) => {
      state.isLoadindOwner = true;
    });
    builder.addCase(adminsRegistration.fulfilled, (state) => {
      state.isLoadindOwner = false;
    });
    builder.addCase(adminsRegistration.rejected, (state) => {
      state.isLoadindOwner = false;
    });

    //-------------------------------------------------------->

    builder.addCase(adminsDelete.pending, (state) => {
      state.isLoadindOwner = true;
    });
    builder.addCase(adminsDelete.fulfilled, (state) => {
      state.isLoadindOwner = false;
    });
    builder.addCase(adminsDelete.rejected, (state) => {
      state.isLoadindOwner = false;
    });

    //-------------------------------------------------------->

    builder.addCase(adminsPut.pending, (state) => {
      state.isLoadindOwner = true;
    });
    builder.addCase(adminsPut.fulfilled, (state) => {
      state.isLoadindOwner = false;
    });
    builder.addCase(adminsPut.rejected, (state) => {
      state.isLoadindOwner = false;
    });
  },
});
