export interface User {
  id: 0
  username: string
  password: string
  firstName: string
  lastName: string
  phone: string
  gender: number // 1: Male, 2: Female, 3: Others
  email: string
  address: string
}
export const emptyUser: User = {
  id: 0,
  username: '',
  password: '',
  firstName: '',
  lastName: '',
  phone: '',
  gender: 1,
  email: '',
  address: '',
}

export interface UserLogin {
  username: string
  password: string
}
export const emptyUserLogin: UserLogin = {
  username: '',
  password: '',
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  userId: number
}
