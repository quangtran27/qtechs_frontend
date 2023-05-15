import { ProductOption } from './product'

export interface Cart {
  id: number
  userId: number
  cartItems: CartItem[]
}

export const emptyCart: Cart = {
  id: 0,
  userId: 0,
  cartItems: [],
}

export interface CartItem {
  id: number
  cartId: number
  option: ProductOption
  quantity: number
}
