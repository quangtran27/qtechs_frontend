import { Navigation as SwiperNavigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'

import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import Button from '~/components/Button'
import styles from './Navigation.module.scss'
import Image from '~/components/Image'
import { NavLink } from 'react-router-dom'
import { useEffect } from 'react'

const cx = classNames.bind(styles)

function Navigation() {
  useEffect(() => {
    const swiperWrapper = document.querySelector(`.${cx('container')} .swiper-wrapper`)
    if (swiperWrapper != null) {
      swiperWrapper.setAttribute('style', 'display: flex')
    }
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
          <SwiperSlide className={cx('swiper-slide')}>
            <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to='/laptop'>
              <Button>
                <Image src={require('~/assets/images/categories/laptop.png')} alt='laptop' />
                <span className='text-ui fw-bold ms-2'>Laptop</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')}>
            <NavLink to='/sound' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/sound.png')} alt='sound' />
                <span className='text-ui fw-bold ms-2'>Âm thanh</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')}>
            <NavLink to='/keyboard' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/keyboard.png')} alt='keyboard' />
                <span className='text-ui fw-bold ms-2'>Bàn phím</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')}>
            <NavLink to='/table' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/table.png')} alt='table' />
                <span className='text-ui fw-bold ms-2'>Bàn nâng hạ</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')}>
            <NavLink to='/balo' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/balo.png')} alt='balo' />
                <span className='text-ui fw-bold ms-2'>Balo, Túi</span>
              </Button>
            </NavLink>
          </SwiperSlide>
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
