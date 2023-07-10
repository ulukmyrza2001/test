import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";
import { toast } from "react-hot-toast";

export const getBrancheById = createAsyncThunk(
  "byIdBranches/all",
  async ({ branchId }: { branchId: number }, { rejectWithValue }) => {
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
  async (
    { search, categoryServiceId, subCategoryServiceId, page, size }: any,
    { rejectWithValue }
  ) => {
    try {
      const response = await axiosInstance.get(
        search === ""
          ? `branches?page=${page}&size=${size}`
          : `branches?search=${search}&page=${page}&size=${size}`
      );
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const getBranchesOwner = createAsyncThunk(
  "allbranches/owner",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("branches/owner");
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

interface postData {
  branchData: {
    phoneNumber: string;
    regionId: number | undefined;
    cityId: number | undefined;
    addressRequest: {
      name: string;
      latitude: number | null;
      longitude: number | null;
    };
  };
}

export const postBranch = createAsyncThunk(
  "branch/post",
  async ({ branchData }: postData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(`branches`, branchData);
      toast.success("Филлиал успешно создан !");
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

export const deleteBranch = createAsyncThunk(
  "branch/delete",
  async ({ branchId }: { branchId: number }, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.delete(`branches/${branchId}`);
      toast.success("Успешно удалено!");
      dispatch(getBranchesOwner());
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

interface putData {
  branchId: number;

  branchData: {
    phoneNumber: string;
    regionId: number | undefined;
    cityId: number | undefined;
    addressRequest: {
      name: string;
      latitude: number | null;
      longitude: number | null;
    };
  };
}

export const putBranch = createAsyncThunk(
  "branch/put",
  async ({ branchId, branchData }: putData, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.put(
        `branches/${branchId}`,
        branchData
      );
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

    builder.addCase(getBranchesOwner.pending, (state) => {
      state.isLoadingBranch = true;
    });
    builder.addCase(getBranchesOwner.fulfilled, (state, action) => {
      state.isLoadingBranch = false;
      state.branchData = action.payload;
    });
    builder.addCase(getBranchesOwner.rejected, (state) => {
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
