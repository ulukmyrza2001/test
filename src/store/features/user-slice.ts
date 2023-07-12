import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";
import { toast } from "react-hot-toast";

interface IgetUsersId {
  usersID: number | string | undefined;
}

interface IputUsersId {
  usersID: number | string | undefined;
  usersData: {
    firstName: string;
    lastName: string;
    authInfoUpdateRequest: {
      phoneNumber: string;
      oldPassword: string;
      newPassword: string;
    };
  };
}

interface UsersInitalStateProps {
  isLoadingUsers: boolean;
  usersIdData: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string | null;
    role: string;
  } | null;
  usersAllData:
    | {
        id: number;
        firstName: string;
        lastName: string;
        phoneNumber: string;
      }[]
    | null;
}

export const getAllUsers = createAsyncThunk(
  "users/getAllUsers",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get("/users");
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const getUsersId = createAsyncThunk(
  "users/getUsersId",
  async (usersID: IgetUsersId, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`/users//${usersID}`);
      return response.data;
    } catch (error) {
      rejectWithValue((error as Error).message);
    }
  }
);

export const putUsersId = createAsyncThunk(
  "users/putUsersId",
  async (
    { usersID, usersData }: IputUsersId,
    { rejectWithValue, dispatch }
  ) => {
    try {
      const response = await axiosInstance.put(`admins/${usersID}`, usersData);
      toast.success("Изменения прошло успешно!");
      dispatch(getAllUsers());
    //   dispatch(getUsersId(usersID));
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

export const usersDelete = createAsyncThunk(
  "users/delete",
  async (usersId: IgetUsersId, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.delete(`users/${usersId}`);
      toast.success("Удаление прошло успешно!");
      dispatch(getAllUsers());
      dispatch(getUsersId(usersId));
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: UsersInitalStateProps = {
  isLoadingUsers: false,
  usersAllData: null,
  usersIdData: null,
};

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (build) => {
    build.addCase(getAllUsers.pending, (state) => {
      state.isLoadingUsers = true;
    });
    build.addCase(getAllUsers.fulfilled, (state, action) => {
      state.isLoadingUsers = false;
      state.usersAllData = action.payload;
    });
    build.addCase(getAllUsers.rejected, (state) => {
      state.isLoadingUsers = false;
    });
    ////=========================================================>
    build.addCase(getUsersId.pending, (state) => {
      state.isLoadingUsers = true;
    });
    build.addCase(getUsersId.fulfilled, (state, action) => {
      state.isLoadingUsers = false;
      state.usersIdData = action.payload;
    });
    build.addCase(getUsersId.rejected, (state) => {
      state.isLoadingUsers = false;
    });
    ////=========================================================>
    build.addCase(putUsersId.pending, (state) => {
      state.isLoadingUsers = true;
    });
    build.addCase(putUsersId.fulfilled, (state) => {
      state.isLoadingUsers = false;
    });
    build.addCase(putUsersId.rejected, (state) => {
      state.isLoadingUsers = false;
    });
    ////=========================================================>
    build.addCase(usersDelete.pending, (state) => {
      state.isLoadingUsers = true;
    });
    build.addCase(usersDelete.fulfilled, (state) => {
      state.isLoadingUsers = false;
    });
    build.addCase(usersDelete.rejected, (state) => {
      state.isLoadingUsers = false;
    });
  },
});
