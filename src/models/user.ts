export interface User {
  id: number
  name: string
  phone: string
  gender: number // 1: Male, 2: Female, 3: Others
  password: string
  email: string
  address: string
}

export interface UserLogin {
  phone: string
  password: string
}

export interface LoginResponse {
  accessToken: string
  refreshToken: string
  accessExpires: string
  refreshExpires: string
  user: User
}
