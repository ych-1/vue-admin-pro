import { createRouter, createWebHistory } from 'vue-router'
import type { App } from 'vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
  ],
})

export function setupRouter(app: App<Element>) {
  app.use(router)
}

export default router
