// Bug: chưa active được thumb đầu tiên của media

import classNames from 'classnames/bind'
import { useState } from 'react'
import SwiperCore, { FreeMode, Navigation, Pagination, Thumbs } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '~/components/Button'
import { AngleLeftIcon, AngleRightIcon, CameraIcon } from '~/components/Icon'
import './Media.css'
import styles from './Media.module.scss'
const cx = classNames.bind(styles)

type MediaProps = {
  images?: string[]
}

export default function Media({ images }: MediaProps) {
  const [activeSlide, setActiveSlide] = useState<number>(0)
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore>()

  return (
    <div className='d-flex flex-column'>
      <div>
        <div className={cx('swiper-root')}>
          <Swiper
            freeMode={true}
            modules={[FreeMode, Pagination, Thumbs]}
            watchSlidesProgress={true}
            onSwiper={setThumbsSwiper}
            slidesPerView={7}
            direction={'vertical'}
            initialSlide={0}
          >
            {images?.map((image, index) => (
              <SwiperSlide key={index} className={cx('thumb-slide')}>
                <img className={cx('thumb-img')} src={process.env.REACT_APP_API_URL + image} alt='Product' />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={cx('side-right')}>
            <Swiper
              navigation={{
                nextEl: `.${cx('prev-btn')}`,
                prevEl: `.${cx('next-btn')}`,
                disabledClass: `${cx('disabled')}`,
              }}
              modules={[FreeMode, Navigation, Thumbs]}
              thumbs={{ swiper: thumbsSwiper }}
              className={`${cx('main-swiper')} h-100`}
              onActiveIndexChange={(swiper) => {
                setActiveSlide(swiper.activeIndex)
              }}
            >
              {images?.map((image, index) => (
                <SwiperSlide key={index}>
                  <img src={process.env.REACT_APP_API_URL + image} alt='Product' width={700} height={700} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
      <div className='mt-3 d-flex align-items-center justify-content-between'>
        <div className='d-flex'>
          <Button circle className={`${cx('next-btn', 'btn-control')}`}>
            <AngleLeftIcon />
          </Button>
          <Button circle className={`${cx('prev-btn', 'btn-control')}`}>
            <AngleRightIcon />
          </Button>
        </div>
        <div className={cx('swiper-progress')}>
          <div className='d-flex'>
            <CameraIcon />
            <span className='d-flex align-items-center fw-bolder ms-3'>
              {activeSlide + 1}/{images?.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
