import { Product } from './product'

export interface Laptop extends Product {
  productPtrId: number
}

export interface LaptopConfig {
  id: number
  laptopId: number
  screen: string
  battery: string
  cpu: string
  gpu: string
  ram: number
  storage: number
  quantity: number
  sold: number
  onSale: boolean
  price: number
  salePrice: number
  color: string
  summary: string
}

// Empty objects:
export const emptyLaptop: Laptop = {
  id: 0,
  name: '',
  brandId: 0,
  reviewId: 0,
  productPtrId: 0,
}

export const emptyLaptopConfig: LaptopConfig = {
  id: 0,
  laptopId: 0,
  screen: '',
  battery: '',
  cpu: '',
  gpu: '',
  ram: 0,
  storage: 0,
  quantity: 0,
  sold: 0,
  onSale: false,
  price: 0,
  salePrice: 0,
  color: '',
  summary: '',
}
