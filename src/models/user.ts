export interface User {
  id: 0
  username: string
  password: string
  name: string
  phone: string
  gender: number // 1: Male, 2: Female, 3: Others
  email: string
  address: string
  image?: string
}
export const emptyUser: User = {
  id: 0,
  username: '',
  password: '',
  name: '',
  phone: '',
  gender: 1,
  email: '',
  address: '',
  image: '',
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
