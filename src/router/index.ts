import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'
import { routes } from './routes.ts'
import { createRouterGuards } from '@/router/router-guards.ts'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes,
  ],
})

export function setupRouter(app: App<Element>) {
  createRouterGuards(router)
  app.use(router)
}

export default router
