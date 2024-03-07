import type { RouteRecordRaw } from 'vue-router'

export const Layout = () => import('@/layout/index.vue')

/**
 * 基础路由
 */
export const basicRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/table',
    name: 'table',
    component: Layout,
    redirect: '/table/index',
    children: [
      {
        path: 'index',
        name: 'Table',
        component: () => import('@/views/pro/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404',
  },
]

/**
 * 动态路由
 */
export const dynamicRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
]

/**
 * 根路由
 */
export const ROOT_ROUTE: RouteRecordRaw = {
  path: '/',
  name: 'Root',
  component: Layout,
  children: [],
}

/**
 * 404 路由
 */
export const NOT_FOUND_ROUTE: RouteRecordRaw = {
  path: '/:pathMatch(.*)*',
  name: 'NotFound',
  component: () => import('@/layout/views/404.vue'),
}

/**
 * 导入所有路由
 */
const modules = import.meta.glob(['./modules/*.ts', '@/views/**/route.ts'], { eager: true, import: 'default' })
Object.keys(modules).forEach((key) => {
  const _module = modules[key] as RouteRecordRaw
  const _modules = Array.isArray(_module) ? _module : [_module]
  dynamicRoutes.push(..._modules)
})

export function generator(routes: RouteRecordRaw[], root: RouteRecordRaw = ROOT_ROUTE) {
  console.log(routes)
  console.log(root)
  return routes
}

export const localRoutes: RouteRecordRaw[] = generator(dynamicRoutes, ROOT_ROUTE)
