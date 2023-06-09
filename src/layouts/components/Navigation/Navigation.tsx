import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Navigation as SwiperNavigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import productApi from '~/api/productApi'
import Button from '~/components/Button'
import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import Image from '~/components/Image'
import { Category } from '~/models/product'
import styles from './Navigation.module.scss'

const cx = classNames.bind(styles)
function Navigation() {
  const [categories, setCategories] = useState<Category[]>([])

  useEffect(() => {
    const swiperWrapper = document.querySelector(`.${cx('container')} .swiper-wrapper`)
    if (swiperWrapper != null) {
      swiperWrapper.setAttribute('style', 'display: flex')
    }
    ;(async () => {
      try {
        setCategories((await productApi.getCategories()).data)
      } catch (e) {
        console.log(e)
      }
    })()
  }, [])

  return (
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
              <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to={`/${category.id}`}>
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
