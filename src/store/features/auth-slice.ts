import axiosInstance from "../../api/axios-config";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import { AuthState, SetUserDataPayload } from "../../common/auth/Iauth";

export const SignUp = createAsyncThunk(
  "auth/SignUp",
  async ({ userData }: SetUserDataPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "auth/authentication",
        userData
      );
      document.cookie = `role=${response.data.role}; path=/`;
      document.cookie = `token=${response.data.token}; path=/`;
      document.cookie = `isAuthenticated=${true}; path=/`;
      toast.success("Successfully toasted!");
      return response.data;
    } catch (error) {
      toast.error((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const Login = createAsyncThunk(
  "auth/Login",
  async ({ userData }: SetUserDataPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/auth/authentication",
        userData
      );
      toast.success("Successfully toasted!");
      return response.data;
    } catch (error) {
      toast.error((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

export const RegistrationUser = createAsyncThunk(
  "auth/RegistrationUser",
  async ({ userData }: SetUserDataPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post(
        "/users/registration",
        userData
      );
      document.cookie = `role=${response.data.role}; path=/`;
      document.cookie = `token=${response.data.token}; path=/`;
      document.cookie = `isAuthenticated=${true}; path=/`;
      toast.success("Successfully toasted!");
      return response.data;
    } catch (error) {
      toast.error((error as Error).message);
      return rejectWithValue((error as Error).message);
    }
  }
);

const initialState: AuthState = {
  token: null,
  authId: "",
  role: "USER",
  isAuthenticated: false,
  phoneNumber: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, () => {});
    builder.addCase(SignUp.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true;
      state.token = payload.token;
      state.role = payload.role;
      state.phoneNumber = payload.phoneNumber;
    });
    builder.addCase(SignUp.rejected, () => {});
  },
});
