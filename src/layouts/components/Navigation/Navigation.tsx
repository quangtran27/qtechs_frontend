import classNames from 'classnames/bind'
import { Navigation as SwiperNavigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '~/components/Button'
import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import Image from '~/components/Image'
import styles from './Navigation.module.scss'
import { Category } from '~/models/product'
import productApi from '~/api/productApi'

const cx = classNames.bind(styles)
function Navigation() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const swiperWrapper = document.querySelector(`.${cx('container')} .swiper-wrapper`)
    const fetchCategories = async () => {
      setCategories((await productApi.getCategories()).data)
    }

    if (swiperWrapper != null) {
      swiperWrapper.setAttribute('style', 'display: flex')
    }
    fetchCategories()
  }, [])

  return (
    // Element in navigation is hard code
    <nav className={`main-navigation ${cx('wrapper')}`}>
      <div className={cx('container')}>
        <Swiper
          modules={[SwiperNavigation]}
          navigation={{
            nextEl: `.${cx('wrapper')} .${cx('prev-btn')}`,
            prevEl: `.${cx('wrapper')} .${cx('next-btn')}`,
            disabledClass: `${cx('disabled')}`,
          }}
          slidesPerView={'auto'}
          spaceBetween={8}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id} className={cx('swiper-slide')}>
              <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to={`/${category.path}`}>
                <Button>
                  <Image src={process.env.REACT_APP_API_URL + category.image} alt='laptop' />
                  <span className='text-ui fw-bold ms-2'>{category.name}</span>
                </Button>
              </NavLink>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className='d-flex flex-1 align-items-center justify-content-end pe-4'>
          <Button circle className={cx('next-btn', 'btn-control')}>
            <AngleLeftIcon />
          </Button>
          <Button circle className={cx('prev-btn', 'btn-control')}>
            <AngleRightIcon />
          </Button>
        </div>
      </div>
    </nav>
  )
}

export default Navigation
