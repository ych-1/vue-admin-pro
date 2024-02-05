import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'

const service = axios.create({
  baseURL: '/api',
  timeout: 5000,
})

service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    return config
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

service.interceptors.response.use(
  (response: AxiosResponse) => {
    const data = response.data
    if (data.code !== 200)
      return Promise.reject(new Error(data.message))

    return data
  },
  (error: AxiosError) => {
    return Promise.reject(error)
  },
)

export function createApi<T = any>(config: AxiosRequestConfig): Promise<Response<T>> {
  return service.request<T, Response<T>>(config)
}

export default service
