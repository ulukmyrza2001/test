import axios, { AxiosInstance } from 'axios'
import config from '../config.json'
import Cookies from 'js-cookie'

const axiosInstance: AxiosInstance = axios.create({
	baseURL: config.DEV_URL,
	timeout: 5000,
})

axiosInstance.interceptors.request.use((config) => {
	const data = Cookies.get('token')

	const convertObj = data ? data : null

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
	},
)

export default axiosInstance
