import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import classNames from 'classnames/bind'

import styles from './Detail.module.scss'
import { ProductDetail } from '~/models/product'
const cx = classNames.bind(styles)

export default function Detail() {
  const { configId } = useParams()
  // const [response, setResponse] = useState<ProductDetailRespone>()
  // Fetch API to get product detail
  useEffect(() => {
    window.scrollTo(0, 0)
    const getProductDetailRespone = async () => {
      try {
        // let response = await productApi.get(configId ?? '')
        // setResponse(JSON.parse(JSON.stringify(response)))
      } catch (error) {
        console.log('Failed to fetch product detail')
      }
    }
    getProductDetailRespone()
  }, [configId])

  let productDetail: ProductDetail

  return (
    <div className='bg-secondary py-3'>
      {/* <div className={cx('container')}>
        <div className='d-flex mt-3'>
          {response?.success && (
            <>
              <div className={cx('main')}>
                <div className={cx('section', 'section-media')}>
                  <Media images={response?.data?.images} />
                </div>
                <div className={`${cx('section', 'section-main')} mt-4`}>
                  {productDetail && <Characteristics id={productDetail.id} type='laptop' props={productDetail.props} />}
                  {productDetail?.onSale && (
                    <Promotions
                      discount={productDetail.price - productDetail.salePrice}
                      percent={
                        parseFloat(((productDetail.price - productDetail.salePrice) / productDetail.price).toFixed(2)) *
                        100
                      }
                    />
                  )}
                  <Guarantee />
                  <EstimatedShipping />
                  {productDetail && (
                    <Review
                      title={productDetail.review.title}
                      shortDescription={productDetail.review.shortDescription}
                      body={productDetail.review.body}
                    />
                  )}
                  <RatingComment />
                </div>
              </div>
              <aside className={cx('aside')} style={{ top: 'calc(var(--header-height) + 16px)' }}>
                {productDetail && (
                  <Aside
                    id={productDetail.id}
                    name={productDetail.name}
                    brand={productDetail.brand}
                    onSale={productDetail.onSale}
                    price={productDetail.price}
                    salePrice={productDetail.salePrice}
                    quantity={productDetail.quantity}
                    relates={productDetail.relates}
                  />
                )}
              </aside>
            </>
          )}
          {!response?.success && <div>Không có dữ liệu</div>}
        </div>
      </div> */}
    </div>
  )
}
