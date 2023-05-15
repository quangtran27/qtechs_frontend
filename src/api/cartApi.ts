import { Cart, CartItem } from '~/models/cart'
import axiosClient from './axiosClient'
import { getAuthHeader } from '~/utils/auth'

const cartApi = {
  addToCart: (userId: number, data: { optionId: number; quantity: number }) => {
    const accessToken = localStorage.getItem('accessToken')
    const config = {
      headers: {
        'content-type': 'multipart/form-data',
        Authorization: `Bearer ${accessToken}`,
      },
    }

    const url = `users/${userId}/carts/items`
    const formData = new FormData()
    formData.append('optionId', data.optionId.toString())
    formData.append('quantity', data.quantity.toString())

    return axiosClient.post<CartItem>(url, formData, config)
  },

  getCart: (userId: number) => {
    const url = `users/${userId}/carts`
    return axiosClient.get<Cart>(url, {
      headers: getAuthHeader(),
    })
  },
  updateCartItem: (userId: number, cartItemId: number, quantity: number) => {
    const url = `users/${userId}/carts/items/${cartItemId}`
    const formData = new FormData()
    formData.append('quantity', quantity.toString())

    return axiosClient.put<CartItem>(url, formData, {
      headers: getAuthHeader('multipart/form-data'),
    })
  },
  deleteCartItem: (userId: number, cartItemId: number, quantity: number) => {
    const url = `users/${userId}/carts/items/${cartItemId}`
    return axiosClient.delete(url, {
      headers: getAuthHeader('multipart/form-data'),
    })
  },
}

export default cartApi
