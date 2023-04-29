import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import ColorPicker from '~/components/ColorPicker'
import { BoltLightning, BookMarkIcon, CheckIcon } from '~/components/Icon'
import { StarIcon } from '~/components/Icon'
import { Product, ProductDetail, ProductRelate } from '~/models/product'
import moneyFormatter from '~/utils/formatter'
import styles from './Aside.module.scss'

const cx = classNames.bind(styles)

type AsideProps = Pick<Product, 'id' | 'name' | 'onSale' | 'price' | 'salePrice' | 'quantity'> & {
  relates: ProductRelate[]
} & Pick<ProductDetail, 'brand'>

export default function Aside({ id, name, brand, onSale, price, salePrice, quantity, relates }: AsideProps) {
  return (
    <div className={cx('container')}>
      <div className={cx('scrollbar')}>
        <div className='d-flex flex-column'>
          <div className='bg-tint-green rounded-3 px-2 py-1'>
            <CheckIcon />
            <span className='text-ui-sm ms-2 text-dark'>Sản phẩm chính hãng</span>
          </div>
          <div className='d-flex flex-column mt-3'>
            <div className='d-flex align-items-center pb-1'>
              <div className='d-flex align-items-center me-2 cursor-pointer'>
                <StarIcon fill='#ffac0b' mode='solid' />
                <span className='text-blue ms-2'>Đánh giá sản phẩm</span>
              </div>
              <div style={{ width: 1, height: 16 }} className='border border-gray-30 me-3'></div>
              <div className='d-flex align-items-center cursor-pointer'>
                <span className='me-2'>Lưu</span>
                <BookMarkIcon width={20} height={20} />
              </div>
            </div>
            <div className='d-flex flex-column pb-1 mt-2'>
              <h2 className='fw-bolder'>{name}</h2>
              <div className='text-ui text-gray-20 mt-1'>Mã SP: {id}</div>
              <div className='mt-1 d-flex align-items-center'>
                {onSale && (
                  <>
                    <span className='text-body text-primary fw-bolder' style={{ fontSize: 22 }}>
                      {moneyFormatter.format(salePrice)}
                    </span>
                    <div className='ms-2' style={{ fontSize: 19 }}>
                      <span className='text-linethrough'>{moneyFormatter.format(price)}</span>
                      <span className='text-primary ms-1'>
                        -{parseFloat(((price - salePrice) / price).toFixed(2)) * 100}%
                      </span>
                    </div>
                  </>
                )}
                {!onSale && (
                  <span className='text-body text-primary fs-5 fw-bolder' style={{ fontSize: 22 }}>
                    {moneyFormatter.format(price)}
                  </span>
                )}
              </div>
            </div>
            <div className='bg-tint-soft-orange rounded mt-2 p-3'>
              <ul>
                {onSale && (
                  <li className='d-flex align-items-center'>
                    <div
                      className='d-flex justify-content-center align-items-center rounded-circle bg-primary-hover'
                      style={{ width: 16, height: 16 }}
                    >
                      <BoltLightning fill='#fff' width={12} height={12} />
                    </div>
                    <div className='text-ui ms-2'>
                      Giảm giá {moneyFormatter.format(price - salePrice)} trừ trực tiếp vào giá bán
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <section className='mt-3'>
          <div className='fw-bolder'>Cấu hình</div>
          <div className='mt-2 grid' style={{ '--bs-gap': '0.75rem' }}>
            {relates.map((relate) => (
              <Link
                key={relate.id}
                className={`g-col-6 p-1 rounded-3 border ${relate.id === id ? 'border-blue' : ''}`}
                to={`/${relate.id}`}
              >
                <div className='p-2'>
                  <div className='d-flex'>
                    <div className='text-ui-sm fw-semibold divide-disc'>
                      {relate.props.slice(0, relate.props.length - 1).map((prop, index) => (
                        <span key={index}>{prop}</span>
                      ))}
                    </div>
                    <ColorPicker
                      small
                      colors={[relate.props.slice(-1)[0]]}
                      className='d-inline-flex align-items-center border-start ps-2 m-0 p-0'
                    />
                  </div>

                  <div className='mt-1'>
                    {relate.onSale && (
                      <>
                        <div className='fw-bold text-primary'>{moneyFormatter.format(relate.salePrice)}</div>
                        <div className='text-linethrough text-ui'>{moneyFormatter.format(relate.price)}</div>
                      </>
                    )}
                    {!relate.onSale && (
                      <div className='fw-bold text-primary'>{moneyFormatter.format(relate.salePrice)}</div>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>
      <div className='shadow-sm p-3'>
        <div>
          <div className='text-ui-sm'>
            <span className='text-linethrough '>{moneyFormatter.format(price)}</span>
            <span className='bold ms-1 text-primary'>
              -{parseFloat(((price - salePrice) / price).toFixed(2)) * 100}%
            </span>
          </div>
          <div>
            <span className='text-body fs-5 fw-bolder'>{moneyFormatter.format(salePrice)}</span>
          </div>
        </div>
        <div className='mt-3'>
          {quantity > 0 && (
            <Button primary large className='w-100 rounded-3' style={{ fontSize: 16 }}>
              Thêm vào giỏ hàng
            </Button>
          )}
          {quantity <= 0 && (
            <Button disabled large className='w-100 rounded-3' style={{ fontSize: 16 }}>
              Hết hàng
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
