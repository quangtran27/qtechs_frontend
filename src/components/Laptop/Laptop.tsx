import { useState, useEffect } from 'react'
import { ProductImage } from '~/models/product'
import { LaptopConfig, Laptop as LaptopModel, emptyLaptopConfig } from '~/models/laptop'
import Product from '../Product/Product'
import productApi from '~/api/productApi'
import laptopApi from '~/api/laptopApi'

type LaptopProps = {
  laptop: LaptopModel
}

export default function Laptop({ laptop }: LaptopProps) {
  const [images, setImages] = useState<ProductImage[]>([])
  const [configs, setConfigs] = useState<LaptopConfig[]>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        setImages((await productApi.getImages(laptop.productPtrId)).data)
        setConfigs((await laptopApi.getConfigs(laptop.id)).data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [laptop.id, laptop.productPtrId])

  let minConfig = emptyLaptopConfig
  if (configs.length > 0) {
    minConfig = configs[0]
    let minPrice = minConfig.onSale ? minConfig.salePrice : minConfig.price
    configs.forEach((config) => {
      if (config.onSale && config.salePrice < minPrice) {
        minConfig = config
        minPrice = config.salePrice
      } else if (!config.onSale && config.price < minPrice) {
        minConfig = config
        minPrice = config.price
      }
    })
  }

  return (
    <Product
      id={laptop.id}
      name={laptop.name}
      price={minConfig.price}
      onSale={minConfig.onSale}
      salePrice={minConfig.salePrice}
      images={images}
      url={`/laptop/${laptop.id}`}
    />
  )
}
