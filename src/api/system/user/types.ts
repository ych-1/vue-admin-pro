export interface UserInfo {
  id: string
  username: string
  name: string
  email: string
  phone: string
  avatar: string
  roles: string[]
  permissions: string[]
}

export interface LoginForm {
  username: string
  password: string
}

export interface LoginResult {
  token: string
  userInfo: UserInfo
}
