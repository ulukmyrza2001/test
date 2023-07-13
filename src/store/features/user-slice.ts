import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "../../api/axios-config";
import { toast } from "react-hot-toast";

interface IputUsersId {
  usersID: number | string;
  usersData: {
    firstName: string | undefined;
    lastName: string | undefined;
    authInfoUpdateRequest: {
      phoneNumber: string | undefined;
      oldPassword: string;
      newPassword: string;
    };
  };
}

interface UsersInitalStateProps {
  isLoadingUsers: boolean;
  usersProfileData: {
    id: number;
    firstName: string;
    lastName: string;
    phoneNumber: string;
    avatar: string | null;
  } | null;
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

export const getUsersProfile = createAsyncThunk(
  "users/getUsersProfile",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axiosInstance.get(`/users/profile`);
      return data;
    } catch (err) {
      rejectWithValue((err as Error).message);
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
      const response = await axiosInstance.put(`users/${usersID}`, usersData);
      toast.success("Изменения прошло успешно!");
      dispatch(getAllUsers());
      dispatch(getUsersProfile());
      return response;
    } catch (error) {
      toast.error((error as Error).message);
      rejectWithValue((error as Error).message);
    }
  }
);

export const usersDelete = createAsyncThunk(
  "users/delete",
  async (usersId: number | string, { rejectWithValue, dispatch }) => {
    try {
      const response = await axiosInstance.delete(`users/${usersId}`);
      toast.success("Удаление прошло успешно!");
      dispatch(getAllUsers());
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
  usersProfileData: null,
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
    build.addCase(getUsersProfile.pending, (state) => {
      state.isLoadingUsers = true;
    });
    build.addCase(getUsersProfile.fulfilled, (state, action) => {
      state.isLoadingUsers = false;
      state.usersProfileData = action.payload;
    });
    build.addCase(getUsersProfile.rejected, (state) => {
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
