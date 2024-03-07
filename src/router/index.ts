import { createRouter, createWebHashHistory, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { basicRoutes } from './routes.ts'
import { createRouterGuards } from '@/router/router-guards.ts'
import { IS_HASH_MODE } from '@/utils/constants.ts'

const router = createRouter({
  history: IS_HASH_MODE ? createWebHashHistory() : createWebHistory(),
  routes: [
    ...basicRoutes,
  ],
})

export function setupRouter(app: App<Element>) {
  createRouterGuards(router)
  app.use(router)
}

export default router
