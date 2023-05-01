import { User, UserLogin, LoginResponse } from '~/models/user'
import axiosClient from './axiosClient'

const userApi = {
  register: (user: User) => {
    const url = 'users'
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    const formData = new FormData()
    formData.append('name', user.name)
    formData.append('phone', user.phone)
    formData.append('gender', user.gender.toString())
    formData.append('password', user.password)
    formData.append('email', user.email)
    formData.append('address', user.address)

    return axiosClient.post<User>(url, formData, config)
  },

  login: (userLogin: UserLogin) => {
    const url = 'auth/login'
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    const formData = new FormData()
    formData.append('phone', userLogin.phone)
    formData.append('password', userLogin.password)

    return axiosClient.post<LoginResponse>(url, formData, config)
  },
}

export default userApi