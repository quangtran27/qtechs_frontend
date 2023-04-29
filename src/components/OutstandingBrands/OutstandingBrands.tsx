import { Link } from 'react-router-dom'
import { FreeMode, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'

import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import Button from '~/components/Button'
import styles from './OutstandingBrand.module.scss'
import { Brand } from '~/models/product'
import Image from '../Image'

const cx = classNames.bind(styles)

type OutstandingBrandsProps = {
  heading?: string
  brands: Brand[]
}

function OutstandingBrands({ heading = 'Thương hiệu nổi bật', brands }: OutstandingBrandsProps) {
  return (
    <section className='outstanding-brans'>
      <h2>{heading}</h2>
      <div className='d-flex mt-3'>
        <Swiper
          direction='horizontal'
          freeMode={true}
          initialSlide={8}
          modules={[FreeMode, Navigation]}
          navigation={{
            nextEl: `.outstanding-brands .${cx('prev-btn')}`,
            prevEl: `.outstanding-brands .${cx('next-btn')}`,
            disabledClass: `${cx('disabled')}`,
          }}
          slidesPerView={'auto'}
          slidesPerGroup={3}
          spaceBetween={8}
          onInit={(swiper) => {
            swiper.slideTo(0)
          }}
        >
          {brands.map((brand) => (
            <SwiperSlide key={brand.id} style={{ width: 'unset' }}>
              <Link to={`/brands/` + brand.id}>
                <Button className='border' border width={120} height={80}>
                  <Image height='40' width='auto' src={process.env.REACT_APP_ROOT_URL + brand.logo} />
                </Button>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='d-flex flex-1 ai-center jc-end pl-32'>
          <Button circle className={cx('next-btn', 'btn-control')}>
            <AngleLeftIcon />
          </Button>
          <Button circle className={cx('prev-btn', 'btn-control')}>
            <AngleRightIcon />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default OutstandingBrands
