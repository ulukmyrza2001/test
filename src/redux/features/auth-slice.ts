import axiosInstance from '@/src/api/axios-config'
import { AuthState, SetUserDataPayload } from '@/src/common/auth/Iauth'
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'

export const SignUp = createAsyncThunk(
  'auth/SignUp',
  async ({ userData }: SetUserDataPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/authentication', userData)
      toast.success('Successfully toasted!')
      return response.data
    } catch (error) {
      toast.error((error as Error).message)
      return rejectWithValue((error as Error).message)
    }
  }
)

export const Login = createAsyncThunk(
  'auth/Login',
  async ({ userData }: SetUserDataPayload, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('/auth/authentication', userData)
      toast.success('Successfully toasted!')
      return response.data
    } catch (error) {
      toast.error((error as Error).message)
      return rejectWithValue((error as Error).message)
    }
  }
)

const initialState: AuthState = {
  token: null,
  authId: '',
  role: null,
  isAuthenticated: false,
  phoneNumber: ''
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SignUp.pending, (state) => {})
    builder.addCase(SignUp.fulfilled, (state, { payload }) => {
      state.isAuthenticated = true
      state.token = payload.token
      state.role = payload.role
      state.phoneNumber = payload.phoneNumber
    })
    builder.addCase(SignUp.rejected, (state, action) => {})
  }
})
