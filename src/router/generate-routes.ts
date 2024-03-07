import type { MenuOption } from 'naive-ui'
import type { RouteRecordRaw } from 'vue-router'

export async function generateServerRoutes() {
  const routes: RouteRecordRaw[] = []
  const menus: MenuOption[] = []

  return {
    routes,
    menus,
  }
}

export async function generateLocalRoutes() {
  const routes: RouteRecordRaw[] = []
  const menus: MenuOption[] = []

  return {
    routes,
    menus,
  }
}
