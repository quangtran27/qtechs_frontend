import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import { BoltLightning, BookMarkIcon, CheckIcon, StarIcon } from '~/components/Icon'
import moneyFormatter from '~/utils/formatter'
import styles from './Aside.module.scss'
import { LaptopConfig } from '~/models/laptop'
import { SetStateAction } from 'react'

const cx = classNames.bind(styles)

type AsideProps = {
  name: string
  selected: LaptopConfig
  configs: LaptopConfig[]
  setSelectedConfig: (value: SetStateAction<LaptopConfig>) => void
}

export default function LaptopAside({ selected, name, configs, setSelectedConfig }: AsideProps) {
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
              <div className='mt-1 d-flex align-items-center'>
                {selected.onSale && (
                  <>
                    <span className='text-body text-primary fw-bolder' style={{ fontSize: 22 }}>
                      {moneyFormatter.format(selected.salePrice)}
                    </span>
                    <div className='ms-2' style={{ fontSize: 19 }}>
                      <span className='text-linethrough'>{moneyFormatter.format(selected.price)}</span>
                      <span className='text-primary ms-1'>
                        -
                        {Math.round(
                          parseFloat(((selected.price - selected.salePrice) / selected.price).toFixed(2)) * 100,
                        )}
                        %
                      </span>
                    </div>
                  </>
                )}
                {!selected.onSale && (
                  <span className='text-body text-primary fs-5 fw-bolder' style={{ fontSize: 22 }}>
                    {moneyFormatter.format(selected.price)}
                  </span>
                )}
              </div>
            </div>
            {selected.onSale && (
              <div className='bg-tint-soft-orange rounded mt-2 p-3'>
                <ul>
                  <li className='d-flex align-items-center'>
                    <div
                      className='d-flex justify-content-center align-items-center rounded-circle bg-primary-hover'
                      style={{ width: 16, height: 16 }}
                    >
                      <BoltLightning fill='#fff' width={12} height={12} />
                    </div>
                    <div className='text-ui ms-2'>
                      Giảm giá {moneyFormatter.format(selected.price - selected.salePrice)} trừ trực tiếp vào giá bán
                    </div>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
        <section className='mt-3'>
          <div className='fw-bolder'></div>
          <div className='mt-2 grid' style={{ '--bs-gap': '0.75rem' }}>
            {configs.map((config) => (
              <div
                key={config.id}
                style={{ cursor: 'pointer' }}
                className={`g-col-6 p-1 rounded-3 border ${config.id === selected.id ? 'border-blue' : ''}`}
                onClick={() => {
                  setSelectedConfig(config)
                }}
              >
                <div className='p-2'>
                  <div className='d-flex'>
                    <div className='text-ui-sm fw-semibold divide-disc'>{config.summary}</div>
                  </div>

                  <div className='mt-1'>
                    {config.onSale && (
                      <>
                        <div className='fw-bold text-primary'>{moneyFormatter.format(config.salePrice)}</div>
                        <div className='text-linethrough text-ui'>{moneyFormatter.format(config.price)}</div>
                      </>
                    )}
                    {!config.onSale && (
                      <div className='fw-bold text-primary'>{moneyFormatter.format(config.price)}</div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className='shadow-sm p-3'>
        <div className='mt-3'>
          {selected.quantity > 0 && (
            <Button variant='primary' size='large' className='w-100 rounded-3' style={{ fontSize: 16 }}>
              Thêm vào giỏ hàng
            </Button>
          )}
          {selected.quantity <= 0 && (
            <Button disabled size='large' className='w-100 rounded-3' style={{ fontSize: 16 }}>
              Hết hàng
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
