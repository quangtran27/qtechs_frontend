import { FreeMode, Navigation as SwiperNavigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import classNames from 'classnames/bind'

import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import Button from '~/components/Button'
import styles from './Navigation.module.scss'
import Image from '~/components/Image'
import { NavLink } from 'react-router-dom'

const cx = classNames.bind(styles)

function Navigation() {
  // Automatically hide navigation when scroll down
  // const [scrollDir, setScrollDir] = useState<'up' | 'down'>('down')
  // useEffect(() => {
  //   const threshold = 0
  //   let lastScrollY = window.pageYOffset
  //   let ticking = false
  //   const updateScrollDir = () => {
  //     const scrollY = window.pageYOffset
  //     if (Math.abs(scrollY - lastScrollY) < threshold) {
  //       ticking = false
  //       return
  //     }
  //     setScrollDir(scrollY > lastScrollY ? 'down' : 'up')
  //     lastScrollY = scrollY > 0 ? scrollY : 0
  //     ticking = false
  //   }
  //   const onScroll = () => {
  //     if (!ticking) {
  //       window.requestAnimationFrame(updateScrollDir)
  //       ticking = true
  //     }
  //   }
  //   window.addEventListener('scroll', onScroll)
  //   return () => window.removeEventListener('scroll', onScroll)
  // }, [scrollDir])
  // -----

  return (
    // Element in navigation is hard code
    <nav className={`main-navigation ${cx('wrapper')}`}>
      <div className={cx('container')}>
        <Swiper
          direction='horizontal'
          initialSlide={7}
          modules={[FreeMode, SwiperNavigation]}
          navigation={{
            nextEl: `.${cx('wrapper')} .${cx('prev-btn')}`,
            prevEl: `.${cx('wrapper')} .${cx('next-btn')}`,
            disabledClass: `${cx('disabled')}`,
          }}
          slidesPerView={'auto'}
          slidesPerGroup={7}
          spaceBetween={8}
        >
          <SwiperSlide className={cx('swiper-slide')} style={{ width: 'unset' }}>
            <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to='/laptop'>
              <Button>
                <Image src={require('~/assets/images/categories/laptop.png')} alt='laptop' />
                <span className='text-ui fw-bold ms-2'>Laptop</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')} style={{ width: 'unset' }}>
            <NavLink to='/sound' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/sound.png')} alt='sound' />
                <span className='text-ui fw-bold ms-2'>Âm thanh</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')} style={{ width: 'unset' }}>
            <NavLink to='/keyboard' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/keyboard.png')} alt='keyboard' />
                <span className='text-ui fw-bold ms-2'>Bàn phím</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')} style={{ width: 'unset' }}>
            <NavLink to='/table' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/table.png')} alt='table' />
                <span className='text-ui fw-bold ms-2'>Bàn nâng hạ</span>
              </Button>
            </NavLink>
          </SwiperSlide>
          <SwiperSlide className={cx('swiper-slide')} style={{ width: 'unset' }}>
            <NavLink to='/balo' className={({ isActive }) => (isActive ? cx('active') : '')}>
              <Button>
                <Image src={require('~/assets/images/categories/balo.png')} alt='balo' />
                <span className='text-ui fw-bold ms-2'>Balo, Túi</span>
              </Button>
            </NavLink>
          </SwiperSlide>
        </Swiper>
        <div className='d-flex flex-1 ai-center pl-32'>
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
