import { Order, OrderPayment } from '~/models/order'
import axiosClient from './axiosClient'
import { getAuthHeader } from '~/utils/auth'

const orderApi = {
  addOrder: (
    userId: number,
    customerName: string,
    customerPhone: string,
    customerAddress: string,
    payment: OrderPayment,
    note: string,
    cartItemIds: string,
  ) => {
    const url = `users/${userId}/orders`

    const formData = new FormData()
    formData.append('customerName', customerName)
    formData.append('customerPhone', customerPhone)
    formData.append('customerAddress', customerAddress)
    formData.append('payment', payment.toString())
    formData.append('note', note)
    formData.append('cartItemIds', cartItemIds)

    return axiosClient.post<Order>(url, formData, {
      headers: getAuthHeader(),
    })
  },
}

export default orderApi
