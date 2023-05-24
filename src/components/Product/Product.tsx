import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Navigation, Pagination } from 'swiper'
import 'swiper/css'
import { Swiper, SwiperSlide } from 'swiper/react'
import productApi from '~/api/productApi'
import Button from '~/components/Button'
import { AngleLeftIcon, AngleRightIcon } from '~/components/Icon'
import { Category, Product as ProductModel, emptyOption } from '~/models/product'
import moneyFormatter from '~/utils/formatter'
import './Product.css'
import styles from './Product.module.scss'

const cx = classNames.bind(styles)

export default function Product({ id, name, categoryId, options }: ProductModel) {
  const [category, setCategory] = useState<Category>()
  useEffect(() => {
    const getCategory = async () => {
      setCategory((await productApi.getCategory(categoryId)).data)
    }
    getCategory()
  }, [categoryId])

  let minOption = emptyOption
  if (options.length > 0) {
    minOption = options[0]
    let minPrice = minOption.onSale ? minOption.salePrice : minOption.price
    options.forEach((config) => {
      if (config.onSale && config.salePrice < minPrice) {
        minOption = config
        minPrice = config.salePrice
      } else if (!config.onSale && config.price < minPrice) {
        minOption = config
        minPrice = config.price
      }
    })
  }
  return (
    <Link to={`/${category?.id}/${id}`} className={cx('product') + ' h-100'}>
      <div className='flex-1 product'>
        <div className={cx('images')}>
          <Swiper
            className={cx('images-swiper')}
            loop
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
            {minOption.images.map((image, index) => (
              <SwiperSlide key={index} className={cx('image-slide')}>
                <img src={process.env.REACT_APP_API_URL + image} alt={name} />
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
          {minOption.onSale && (
            <>
              <div>
                <span className='text-label text-gray'>Từ</span>
                <span className='text-body bold text-primary ms-1'>{moneyFormatter.format(minOption.salePrice)}</span>
              </div>
              <div className='text-ui'>
                <span className='text-linethrough'>{moneyFormatter.format(minOption.price)}</span>
                <span className='bold ms-1'>
                  -
                  {Math.round(parseFloat(((minOption.price - minOption.salePrice) / minOption.price).toFixed(2)) * 100)}
                  %
                </span>
              </div>
            </>
          )}
          {!minOption.onSale && (
            <div>
              <span className='text-label text-gray'>Từ</span>
              <span className='text-body bold text-primary ms-1'>{moneyFormatter.format(minOption.price)}</span>
            </div>
          )}
        </div>
      </div>
    </Link>
  )
}
