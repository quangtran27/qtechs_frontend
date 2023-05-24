import { Brand, Category, Product, ProductImage } from '~/models/product'
import axiosClient from './axiosClient'
import { ListResponse, PaginationParams } from '~/models/common'

const productApi = {
  // cũ, bỏ
  getImages: (productId: number) => {
    const url = `products/${productId}/images`
    return axiosClient.get<ProductImage[]>(url)
  },
  //

  get: (productId: string) => {
    const url = `products/${productId}`
    return axiosClient.get<Product>(url)
  },
  getAll: (params: { page: number; pageSize: number; categoryId: string }) => {
    const url = 'products'
    return axiosClient.get<ListResponse<Product, PaginationParams>>(url, { params: params })
  },
  getCategory: (categoryId: string) => {
    const url = `categories/${categoryId}`
    return axiosClient.get<Category>(url)
  },
  getCategories: () => {
    const url = 'categories'
    return axiosClient.get<Category[]>(url)
  },
  getBrand: (brandId: number) => {
    const url = `brands/${brandId}`
    return axiosClient.get<Brand>(url)
  },
  getBrands: () => {
    const url = 'brands'
    return axiosClient.get<Brand[]>(url)
  },
}

export default productApi
