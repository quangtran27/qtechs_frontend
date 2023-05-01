import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import Button from '~/components/Button'
import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import { ProductImage } from '~/models/product'
import moneyFormatter from '~/utils/formatter'
import './Product.css'
import styles from './Product.module.scss'

type ProductProps = {
  id: number
  name: string
  price: number
  onSale: boolean
  salePrice: number
  images: ProductImage[]
  url: string
}

const cx = classNames.bind(styles)

export default function Product({ id, name, onSale, price, salePrice, images, url }: ProductProps) {
  return (
    <Link to={url} className={cx('product') + ' h-100'}>
      <div className='flex-1 product'>
        <div className={cx('images')}>
          <Swiper
            className={cx('images-swiper')}
            modules={[Navigation, Pagination]}
            navigation={{
              nextEl: `.${cx('prev-btn')}.no${id}`,
              prevEl: `.${cx('next-btn')}.no${id}`,
              disabledClass: `${cx('disabled')}`,
            }}
            loop={true}
            pagination={{
              bulletClass: `swiper-pagination-bullet ${cx('my-swiper-pagination-bullet')}`,
              bulletActiveClass: cx('active'),
              dynamicBullets: true,
            }}
            slidesPerView={1}
          >
            {images.map((image, index) => (
              <SwiperSlide key={index} className={cx('image-slide')}>
                <img src={process.env.REACT_APP_API_URL + image.image} alt={name} />
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
                <span className='bold ms-1'>
                  -{Math.round(parseFloat(((price - salePrice) / price).toFixed(2)) * 100)}%
                </span>
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
      </div>
    </Link>
  )
}
