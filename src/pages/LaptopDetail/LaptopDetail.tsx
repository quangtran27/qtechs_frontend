import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import laptopApi from '~/api/laptopApi'
import productApi from '~/api/productApi'
import LaptopAside from '~/components/Detail/Asides/LaptopAside'
import LaptopCharacteristics from '~/components/Detail/Characteristics/LaptopCharacteristics'
import EstimatedShipping from '~/components/Detail/EstimatedShipping/EstimatedShipping'
import Guarantee from '~/components/Detail/Guarantee/Guarantee'
import Media from '~/components/Detail/Media/Media'
import Promotions from '~/components/Detail/Promotions/Promotions'
import RatingComment from '~/components/Detail/RatingComment/RatingComment'
import { LaptopConfig, emptyLaptop, emptyLaptopConfig } from '~/models/laptop'
import { ProductImage } from '~/models/product'
import styles from './LaptopDetail.module.scss'
const cx = classNames.bind(styles)

export default function LaptopDetail() {
  const { laptopId } = useParams()
  const [laptop, setLaptop] = useState(emptyLaptop)
  const [configs, setConfigs] = useState<LaptopConfig[]>([])
  const [images, setImages] = useState<ProductImage[]>([])
  const [selectedConfig, setSelectedConfig] = useState<LaptopConfig>(emptyLaptopConfig)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const _laptopId = Number(laptopId)
        if (!isNaN(_laptopId)) {
          setConfigs((await laptopApi.getConfigs(_laptopId)).data)
          setLaptop((await laptopApi.get(_laptopId)).data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [laptopId])

  useEffect(() => {
    if (laptop.id !== 0) {
      const getImages = async () => {
        setImages((await productApi.getImages(laptop.productPtrId)).data)
      }
      getImages()
    }
  }, [laptop])

  useEffect(() => {
    if (configs.length > 0) {
      setSelectedConfig(configs[0])
    }
  }, [configs])

  return (
    <div className='py-3'>
      <div className={cx('container')}>
        <div className='d-flex mt-3'>
          <div className={cx('main')}>
            <div className={cx('section', 'section-media')}>
              <Media images={images} />
            </div>
            <div className={`${cx('section', 'section-main')} mt-4`}>
              <LaptopCharacteristics config={selectedConfig} />
              {selectedConfig.onSale && (
                <Promotions
                  discount={selectedConfig.price - selectedConfig.salePrice}
                  percent={
                    parseFloat(((selectedConfig.price - selectedConfig.salePrice) / selectedConfig.price).toFixed(2)) *
                    100
                  }
                />
              )}
              <Guarantee />
              <EstimatedShipping />
              {/* <Review
                title={selectedConfig.review.title}
                shortDescription={selectedConfig.review.shortDescription}
                body={selectedConfig.review.body}
              /> */}
              <RatingComment />
            </div>
          </div>
          <aside className={cx('aside')} style={{ top: 'calc(var(--header-height) + 16px)' }}>
            <LaptopAside
              name={laptop.name}
              selected={selectedConfig}
              configs={configs}
              setSelectedConfig={setSelectedConfig}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
