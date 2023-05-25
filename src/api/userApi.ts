import { LoginResponse, User, UserLogin } from '~/models/user'
import { getAuthHeader } from '~/utils/auth'
import axiosClient from './axiosClient'

const userApi = {
  register: (user: User) => {
    const url = 'users/'
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
      },
    }

    const formData = new FormData()
    formData.append('username', user.username)
    formData.append('password', user.password)
    formData.append('name', user.name)
    formData.append('phone', user.phone)
    formData.append('gender', user.gender.toString())
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
    formData.append('username', userLogin.username)
    formData.append('password', userLogin.password)

    return axiosClient.post<LoginResponse>(url, formData, config)
  },
  getInfo: (userId: number) => {
    const url = `users/${userId}`
    return axiosClient.get<User>(url, {
      headers: getAuthHeader(),
    })
  },
  updateInfo: (user: User, image: File | null) => {
    const url = `users/${user.id}`

    const formData = new FormData()
    formData.append('name', user.name)
    formData.append('phone', user.phone)
    formData.append('gender', user.gender.toString())
    formData.append('email', user.email)
    formData.append('address', user.address)
    if (image != null) {
      formData.append('image', image)
    }

    return axiosClient.put<User>(url, formData, {
      headers: getAuthHeader(),
    })
  },

  changePassword: (userId: number, oldPassword: string, newPassword: string) => {
    const url = `users/${userId}/password`

    const formData = new FormData()
    formData.append('oldPassword', oldPassword)
    formData.append('newPassword', newPassword)

    return axiosClient.put(url, formData, {
      headers: getAuthHeader(),
    })
  },
}

export default userApi
