export interface Brand {
  id: number
  name: string
  image: string
}

export interface Category {
  id: string
  name: string
  image: string
}

export interface Product {
  id: number
  name: string
  status: boolean
  categoryId: string
  brandId: number
  reviewId: number
  options: ProductOption[]
}
export const emptyProduct: Product = {
  id: 0,
  name: '',
  status: false,
  categoryId: '',
  brandId: 0,
  reviewId: 0,
  options: [],
}

export interface ProductOption {
  id: number
  name: string
  SKU: string
  onSale: boolean
  price: number
  salePrice: number
  sold: number
  quantity: number
  color: string
  summary: string
  specs: OptionSpec[]
  images: string[]
}
export const emptyOption: ProductOption = {
  id: 0,
  name: '',
  SKU: '',
  onSale: false,
  price: 0,
  salePrice: 0,
  sold: 0,
  quantity: 0,
  color: '',
  summary: '',
  specs: [],
  images: [],
}

export interface OptionSpec {
  name: string
  code: string
  value: string
}

export interface ProductImage {
  id: number
  productId: number
  order: number
  image: string
}
