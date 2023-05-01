import { IReview } from './review'

export interface ICategory {
  id: string
  name: string
}

export interface Product {
  id: string
  name: string
  onSale: boolean
  price: number
  salePrice: number
  versions: number
  quantity: number
  colors: string[]
  images: string[]
}

export interface ProductDetail {
  id: string
  name: string
  brand: string
  onSale: boolean
  price: number
  salePrice: number
  quantity: number
  sold: number
  props: LaptopProps
  color: string
  colorHex: string
  images: string[]
  relates: ProductRelate[]
  review: IReview
}

export interface ProductRelate {
  id: string
  onSale: boolean
  price: number
  salePrice: number
  props: string[]
}

export interface LaptopProps {
  screen: {
    size: number
    resolution: string
    panel: string
    detail?: string
  }
  cpu: {
    name: string
    shortName: string
    numOfCores: number
    numOfThreads: number
  }
  ram: {
    capacity: number
    standard: string
    speed: number
  }
  gpu: {
    internal: {
      name: string
      shortName: string
      capacity: number
    }
    external: {
      exist: false
      name: null
      shortName: null
      capacity: number
    }
  }
  storage: {
    primary: {
      capacity: number
      type: number
    }
    second: {
      exist: false
      capacity: number
      type: number
    }
  }
  battery: string
  connections: string
  weight: string
}

export interface Brand {
  id: number
  name: string
  logo: string
}
