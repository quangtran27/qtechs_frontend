import { ProductImage } from '~/models/product'
import axiosClient from './axiosClient'

const productApi = {
  getImages: (productId: number) => {
    const url = `products/${productId}/images`
    return axiosClient.get<ProductImage[]>(url)
  },
}

export default productApi
