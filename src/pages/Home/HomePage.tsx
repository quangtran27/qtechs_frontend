import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'
import { Swiper, SwiperSlide } from 'swiper/react'
import promotionApi from '~/api/promotionApi'
import Card from '~/components/Card'
import { Banner } from '~/models/promotion'
import styles from './Home.module.scss'
import { Product as ProductModel } from '~/models/product'
import productApi from '~/api/productApi'
import Product from '~/components/Product/Product'

const cx = classNames.bind(styles)

function Home() {
  const [banners, setBanners] = useState<Banner[]>([])
  const [products, setProducts] = useState<ProductModel[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        setBanners((await promotionApi.getAllBanners()).data)
        setProducts((await productApi.getAll({ page: 1, pageSize: 8 })).data.data)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
    <div className='wrapper pt-4'>
      <Card className='p-0 overflow-hidden'>
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          loop
          modules={[Pagination]}
          className={cx('banner-swiper')}
        >
          {banners.map((banner) => (
            <SwiperSlide>
              <img src={process.env.REACT_APP_API_URL + banner.image} alt='' />
            </SwiperSlide>
          ))}
        </Swiper>
      </Card>
      <section className='mt-3'>
        <h2>Sản phẩm nổi bật</h2>
        <div className='grid mt-2'>
          {products &&
            products.map((product) => (
              <div key={product.id} className='g-col-3'>
                <Product {...product} />
              </div>
            ))}
        </div>
      </section>
    </div>
  )
}

export default Home
