import type { LoginForm, LoginResult, UserInfo } from './types.ts'

enum Api {
  'loginApiUrl' = '/api/user/login',
  'logoutApiUrl' = '/api/user/logout',
  'profileApiUrl' = '/api/user/profile',
}

export const loginApi = (data: LoginForm) => usePost<LoginResult>(Api.loginApiUrl, data)

export const logoutApi = () => usePost(Api.logoutApiUrl)

export const profileApi = () => useGet<UserInfo>(Api.profileApiUrl)

export * from './types.ts'
