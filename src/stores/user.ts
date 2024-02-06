import type { LoginForm, UserInfo } from '@/api/system/user'

export const useUserStore = defineStore('user', () => {
  const token = useAuthorization()
  const userInfo = ref<Partial<UserInfo>>({})

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

  const profile = () => {
    return userInfo.value
  }

  return {
    userInfo,
    roles,
    permissions,
    login,
    logout,
    profile,
  }
})
