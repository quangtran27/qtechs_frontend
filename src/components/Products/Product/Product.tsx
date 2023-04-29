import { Link } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import classNames from 'classnames/bind'
import Button from '~/components/Button'
import ColorPicker from '~/components/ColorPicker'
import moneyFormatter from '~/utils/formatter'

import './Product.css'
import styles from './Product.module.scss'
import { Product } from '~/models/product'

const cx = classNames.bind(styles)

function Product({ id, name, onSale, price, salePrice, versions, quantity, colors, images }: Product) {
  return (
    <Link to={`/product/${id.toString()}`} className={cx('product') + ' h-100'}>
      <div className='flex-1 product'>
        <div className={cx('images')}>
          <Swiper
            centeredSlides={true}
            className={cx('images-swiper')}
            direction='horizontal'
            loop={true}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: `.${cx('prev-btn')}.no${id}`,
              prevEl: `.${cx('next-btn')}.no${id}`,
              disabledClass: `${cx('disabled')}`,
            }}
            pagination={{
              bulletClass: `swiper-pagination-bullet ${cx('my-swiper-pagination-bullet')}`,
              bulletActiveClass: cx('active'),
              dynamicBullets: true,
            }}
            slidesPerView={1}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={cx('image-slide')}>
                <img src={process.env.REACT_APP_ROOT_URL + image} alt={name} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={cx('images-controls')}>
            <div className='d-flex align-items-center ps-4'>
              <Button circle className={`${cx('next-btn', 'btn-control')} no${id}`}>
                <AngleLeftIcon />
              </Button>
              <Button circle className={`${cx('prev-btn', 'btn-control')} no${id}`}>
                <AngleRightIcon />
              </Button>
            </div>
          </div>
        </div>
        <h3 className='mt-1 text-body bold'>{name}</h3>
        <div className='mt-1'>
          {onSale && (
            <>
              <div>
                <span className='text-label text-gray'>Từ</span>
                <span className='text-body bold text-primary ms-1'>{moneyFormatter.format(salePrice)}</span>
              </div>
              <div className='text-ui'>
                <span className='text-linethrough'>{moneyFormatter.format(price)}</span>
                <span className='bold ms-1'>-{parseFloat(((price - salePrice) / price).toFixed(2)) * 100}%</span>
              </div>
            </>
          )}
          {!onSale && (
            <div>
              <span className='text-label text-gray'>Từ</span>
              <span className='text-body bold text-primary ms-1'>{moneyFormatter.format(price)}</span>
            </div>
          )}
        </div>
        <div className='my-2 d-flex align-items-center'>
          <div className='d-flex align-items-center'>
            <span className='text-gray text-label bold'>Màu</span>
            <div>
              <ColorPicker small colors={colors} />
            </div>
          </div>
          <span className='pl-8 bold text-gray text-ui-sm'>{versions} phiên bản</span>
        </div>
      </div>
      {/* <div className={cx('promotions')}>
        <HeadlessTippy
          arrow='false'
          placement='top-start'
          trigger='mouseenter'
          offset={[-60, 20]}
          render={() => (
            <div className='bg-tint-yellow shadow rounded-3' style={{ width: 332 }}>
              <img
                src={require('~/assets/images/popover-promo-banner.png')}
                alt=''
                width={'100%'}
              />
              <div className='mt-2 px-3 pb-3'>
                <div>
                  <span className='text-body bold'>Bão KM Dell XPS</span>
                  <p className='text-ui d-block mt-2'>
                    Giảm giá 6.000.000đ trừ trực tiếp vào giá bán sản phẩm
                  </p>
                </div>
                <div>
                  <hr style={{ opacity: 0.1 }} className='border border-dark' />
                  <span className='text-body bold'>Bão KM Dell XPS</span>
                  <p className='text-ui d-block mt-2'>
                    Tặng kèm chuột không dây Bluetooth Rapoo
                  </p>
                </div>
              </div>
            </div>
          )}
        >
          <div className='d-flex align-items-center'>
            <GiftIcon width={12} height={12} className='fill-purple' />
            <span className='text-ui-sm ms-1'>
              Giảm giá & nhiều quà tặng đi kèm
            </span>
          </div>
        </HeadlessTippy>
      </div> */}
    </Link>
  )
}

export default Product
