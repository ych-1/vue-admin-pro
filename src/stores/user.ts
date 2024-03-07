import type { MenuOption } from 'naive-ui'
import type { LoginForm, UserInfo } from '@/api/system/user'
import { generateLocalRoutes, generateServerRoutes } from '@/router/generate-routes'
import { ROUTER_FROM_SERVER } from '@/utils/constants'

export const useUserStore = defineStore('user', () => {
  const token = useAuthorization()
  const userInfo = ref<Partial<UserInfo>>({})
  const menus = ref<MenuOption[]>()

  const roles = computed<string[]>(() => userInfo.value?.roles || [])
  const permissions = computed<string[]>(() => userInfo.value?.permissions || [])

  const login = (formState: LoginForm) => {
    token.value = 'token'
    userInfo.value = {
      id: '1',
      username: formState.username,
      avatar: 'https://avatars.githubusercontent.com/u/3864855?v=4',
      name: formState.username,
      email: '',
      phone: '1234567890',
      roles: ['admin'],
      permissions: ['*:*:*'],
    }
  }

  const logout = () => {
    token.value = null
    userInfo.value = {}
  }

  const profile = async () => {
    return userInfo.value
  }

  const generateRoutes = async () => {
    const func = ROUTER_FROM_SERVER ? generateServerRoutes : generateLocalRoutes
    const { menus: menuData, routes } = await func()
    menus.value = menuData
    return routes
  }

  return {
    userInfo,
    roles,
    permissions,
    login,
    logout,
    profile,
    generateRoutes,
  }
})
