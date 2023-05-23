import { ProductOption } from './product'

export enum OrderPayment {
  COD = 1,
  Banking = 2,
}

export interface Order {
  id: number
  userId: number
  created: string
  updated: string
  status: number
  customerName: string
  customerPhone: string
  customerAddress: string
  payment: number
  shippingFee: number
  isPaid: boolean
  isReviewed: boolean
  note: string
  total: number
  items: string
}

export interface OrderItem {
  option: ProductOption
  onSale: boolean
  price: number
  salePrice: number
  quantity: number
}
