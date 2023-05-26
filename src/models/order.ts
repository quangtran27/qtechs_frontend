import { ProductOption } from './product'

export enum OrderPayment {
  COD = 1,
  Banking = 2,
}

export const enum OrderStatus {
  CREATED = 1,
  PREPARING = 2,
  DELIVERING = 3,
  DELIVERED = 4,
  CANCELED = 5,
}

export interface Order {
  id: number
  userId: number
  created: string
  updated: string
  status: OrderStatus
  customerName: string
  customerPhone: string
  customerAddress: string
  payment: number
  shippingFee: number
  isPaid: boolean
  isReviewed: boolean
  note: string
  total: number
  items: OrderItem[]
}

export interface OrderItem {
  option: ProductOption
  onSale: boolean
  price: number
  salePrice: number
  quantity: number
}
