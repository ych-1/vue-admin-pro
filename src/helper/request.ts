import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios'
import axios from 'axios'
import { ResponseCodeEnum } from '@/enums/http-enum.ts'

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
    const code = data.code as keyof typeof ResponseCodeEnum
    if (code !== 200) {
      const message = ResponseCodeEnum[code] || data.message as string
      window.$message?.error(message)
      return Promise.reject(new Error(message))
    }
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
