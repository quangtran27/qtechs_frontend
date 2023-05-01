export interface Brand {
  id: number
  name: string
  image: string
}

export interface Product {
  id: number
  name: string
  brandId: number
  reviewId: number
}

export interface ProductImage {
  id: number
  productId: number
  order: number
  image: string
}
