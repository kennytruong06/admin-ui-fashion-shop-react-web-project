import axios from 'axios'
import Cookies from 'js-cookie'

const getTokenWithExpiry = (key) => {
  const token = Cookies.get(key)
  return token || null
}

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
})

axiosInstance.interceptors.request.use(
  (config) => {
    const token = getTokenWithExpiry('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  (error) => Promise.reject(error),
)

export default axiosInstance
