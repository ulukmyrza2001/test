import axios, { AxiosInstance } from 'axios'
import { _KEY_AUTH } from '../utils/constants/constants'

const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.DEV_URL,
  timeout: 5000
})

axiosInstance.interceptors.request.use((config) => {
  const data = localStorage.getItem(_KEY_AUTH)

  const convertObj = data ? JSON.parse(data).token : null

  if (convertObj !== null) {
    config.headers.Authorization = `Bearer ${convertObj}`
  } else {
    config.headers.Authorization = ''
  }

  return config
})

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    return Promise.reject(error)
  }
)

export default axiosInstance
