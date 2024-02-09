import axios, { AxiosInstance, AxiosResponse } from 'axios'

// Create an instance of Axios
const api: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  timeout: 15000 // Set a reasonable timeout value
})

// Optional: Add request interceptor for authorization, headers, etc.
// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   // Add your custom logic here, e.g., setting authorization headers
//   return config
// })

// Optional: Add response interceptor for error handling, response formatting, etc.
api.interceptors.response.use(
  (response: AxiosResponse) => {
    return response
  },
  (error: any) => {
    return Promise.reject(error)
  }
)

export default api
