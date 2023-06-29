export interface AuthState {
  token: string | null
  role: string | null
  authId: string | null
  phoneNumber: string | null
  isAuthenticated: boolean
}

export interface SetUserDataPayload {
  userData: {
    phoneNumber: string
    password: string
  }
}
