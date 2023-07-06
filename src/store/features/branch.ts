import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";
import { toast } from "react-hot-toast";

export const getBrancheById = createAsyncThunk(
  "bbyIdBranches/all",
  async ({ branchId }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`branches/${branchId}`);
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const getBranches = createAsyncThunk(
  "allbranches/all",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("branches");
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const postBranch = createAsyncThunk(
  "branch/post",
  async ({ brancheData }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`branches`, brancheData);
      toast.success("Успешный успех!");
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

export const deleteBranch = createAsyncThunk(
  "branch/delete",
  async ({ branchId }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.delete(`branches/${branchId}`);
      toast.success("Успешно удалено!");
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

export const putBranch = createAsyncThunk(
  "branch/put",
  async ({ branchId }: any, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(`branches/${branchId}`);
      toast.success("Успешно изменено!");
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

const initialState: any = {
  branchData: [],
  isLoadingBranch: false,
};

export const branchSlice = createSlice({
  name: "branch",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBranches.pending, (state) => {
      state.isLoadingBranch = true;
    });
    builder.addCase(getBranches.fulfilled, (state, action) => {
      state.isLoadingBranch = false;
      state.branchData = action.payload;
    });
    builder.addCase(getBranches.rejected, (state) => {
      state.isLoadingBranch = false;
    });

    // ----------------------------------------------------------->

    builder.addCase(getBrancheById.pending, (state) => {
      state.isLoadingBranch = true;
    });
    builder.addCase(getBrancheById.fulfilled, (state, action) => {
      state.isLoadingBranch = false;
      state.branchData = action.payload;
    });
    builder.addCase(getBrancheById.rejected, (state) => {
      state.isLoadingBranch = false;
    });

    //------------------------------------------------------------>

    builder.addCase(postBranch.pending, (state) => {
      state.isLoadingBranch = true;
    });
    builder.addCase(postBranch.fulfilled, (state) => {
      state.isLoadingBranch = false;
    });
    builder.addCase(postBranch.rejected, (state) => {
      state.isLoadingBranch = false;
    });

    //------------------------------------------------------------>

    builder.addCase(deleteBranch.pending, (state) => {
      state.isLoadingBranch = true;
    });
    builder.addCase(deleteBranch.fulfilled, (state) => {
      state.isLoadingBranch = false;
    });
    builder.addCase(deleteBranch.rejected, (state) => {
      state.isLoadingBranch = false;
    });

    //------------------------------------------------------------>

    builder.addCase(putBranch.pending, (state) => {
      state.isLoadingBranch = true;
    });
    builder.addCase(putBranch.fulfilled, (state) => {
      state.isLoadingBranch = false;
    });
    builder.addCase(putBranch.rejected, (state) => {
      state.isLoadingBranch = false;
    });
  },
});
