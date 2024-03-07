/**
 * 页面标题
 */
export const APP_TITLE = import.meta.env.VITE_APP_TITLE as string

/**
 * 路由模式
 */
export const ROUTER_MODE = import.meta.env.VITE_ROUTER_MODE as 'hash' | 'history'

/**
 * 是否 hash 模式
 */
export const IS_HASH_MODE = ROUTER_MODE === 'hash'

/**
 * 路由是否来自服务端
 */
export const ROUTER_FROM_SERVER = import.meta.env.VITE_ROUTER_FROM_SERVER === 'true'

/**
 * API 请求基础路径
 */
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string

/**
 * 路由白名单
 */
export const ROUTER_WHITE_LIST = ['/login', '/404', '/401']

/**
 * 登录页路径
 */
export const LOGIN_PATH = '/login'
