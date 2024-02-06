import type { RouteRecordRaw } from 'vue-router'

export const Layout = import('@/layouts/index.vue')

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Home',
        component: () => import('@/views/dashboard/index.vue'),
      },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/layouts/views/404.vue'),
  },
]
