import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import productApi from '~/api/productApi'
import Aside from '~/components/Detail/Aside/Aside'
import LaptopCharacteristics from '~/components/Detail/Characteristics/Characteristics'
import EstimatedShipping from '~/components/Detail/EstimatedShipping/EstimatedShipping'
import Guarantee from '~/components/Detail/Guarantee/Guarantee'
import Media from '~/components/Detail/Media/Media'
import Promotions from '~/components/Detail/Promotions/Promotions'
import RatingComment from '~/components/Detail/RatingComment/RatingComment'
import { Product, ProductOption, emptyOption, emptyProduct } from '~/models/product'
import styles from './ProductDetail.module.scss'

const cx = classNames.bind(styles)

export default function ProductDetail() {
  const { category, productId } = useParams()
  const [product, setProduct] = useState<Product>(emptyProduct)
  const [selectedOption, setSelectedOption] = useState<ProductOption>(emptyOption)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const _productId = Number(productId)
        if (!isNaN(_productId)) {
          setProduct((await productApi.get(_productId)).data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [productId])

  useEffect(() => {
    if (product.options.length > 0) {
      setSelectedOption(product.options[0])
    }
  }, [product.options])

  return (
    <div className='py-3'>
      <div className={cx('container')}>
        <div className='d-flex mt-3'>
          <div className={cx('main')}>
            <div className={cx('section', 'section-media')}>
              <Media images={selectedOption.images} />
            </div>
            <div className={`${cx('section', 'section-main')} mt-4`}>
              <LaptopCharacteristics specs={selectedOption.specs} />
              {selectedOption.onSale && (
                <Promotions
                  discount={selectedOption.price - selectedOption.salePrice}
                  percent={Math.round(
                    parseFloat(((selectedOption.price - selectedOption.salePrice) / selectedOption.price).toFixed(2)) *
                      100,
                  )}
                />
              )}
              <Guarantee />
              <EstimatedShipping />
              {/* <Review
                title={selectedOption.review.title}
                shortDescription={selectedOption.review.shortDescription}
                body={selectedOption.review.body}
              /> */}
              <RatingComment />
            </div>
          </div>
          <aside className={cx('aside')} style={{ top: 'calc(var(--header-height) + 16px)' }}>
            <Aside
              name={product.name}
              options={product.options}
              selectedOption={selectedOption}
              setSelectedOption={setSelectedOption}
            />
          </aside>
        </div>
      </div>
    </div>
  )
}
