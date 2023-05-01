import { Brand } from '~/models/product'
import axiosClient from './axiosClient'
import { ListResponse, PaginationParams } from '~/models/common'
import { Laptop, LaptopConfig } from '~/models/laptop'

const laptopApi = {
  get: (laptopId: number) => {
    const url = `laptops/${laptopId}`
    return axiosClient.get<Laptop>(url)
  },
  getAll: (params: { page: number; pageSize: number }) => {
    const url = `laptops/`
    return axiosClient.get<ListResponse<Laptop, PaginationParams>>(url, { params: params })
  },
  getAllBrands: () => {
    const url = `laptops/brands`
    return axiosClient.get<Brand[]>(url)
  },
  getConfigs: (laptopId: number) => {
    const url = `laptops/${laptopId}/configs`
    return axiosClient.get<LaptopConfig[]>(url)
  },
}

export default laptopApi
