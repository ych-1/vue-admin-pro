import type { AxiosRequestConfig, Method } from 'axios'
import { createApi } from '@/utils/request.ts'

export function useRequest<T = any>(url: string, method: Method = 'GET', config?: AxiosRequestConfig): Promise<Response<T>> {
  return createApi<T>({ url, method, ...config })
}

export function useGet<T = any>(url: string, params?: any): Promise<Response<T>> {
  return createApi<T>({ url, method: 'GET', params })
}

export function usePost<T = any>(url: string, data?: any): Promise<Response<T>> {
  return createApi<T>({ url, method: 'POST', data })
}

export function usePut<T = any>(url: string, data?: any): Promise<Response<T>> {
  return createApi<T>({ url, method: 'PUT', data })
}

export function useDelete<T = any>(url: string, data?: any): Promise<Response<T>> {
  return createApi<T>({ url, method: 'DELETE', data })
}

export function usePage<T = any>(url: string, params?: any): Promise<Response<Page<T>>> {
  return createApi<Page<T>>({ url, method: 'GET', params })
}

export function useApi<T = any>(config: AxiosRequestConfig): Promise<Response<T>> {
  return createApi<T>(config)
}
