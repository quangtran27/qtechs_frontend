import classNames from 'classnames/bind'
import { SetStateAction } from 'react'
import Button from '~/components/Button'
import { BoltLightning, BookMarkIcon, CheckIcon, StarIcon } from '~/components/Icon'
import { ProductOption } from '~/models/product'
import moneyFormatter from '~/utils/formatter'
import styles from './Aside.module.scss'

const cx = classNames.bind(styles)

type AsideProps = {
  name: string
  selectedOption: ProductOption
  options: ProductOption[]
  setSelectedOption: (value: SetStateAction<ProductOption>) => void
}

export default function Aside({ selectedOption, name, options, setSelectedOption }: AsideProps) {
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
                {selectedOption.onSale && (
                  <>
                    <span className='text-body text-primary fw-bolder' style={{ fontSize: 22 }}>
                      {moneyFormatter.format(selectedOption.salePrice)}
                    </span>
                    <div className='ms-2' style={{ fontSize: 19 }}>
                      <span className='text-linethrough'>{moneyFormatter.format(selectedOption.price)}</span>
                      <span className='text-primary ms-1'>
                        -
                        {Math.round(
                          parseFloat(
                            ((selectedOption.price - selectedOption.salePrice) / selectedOption.price).toFixed(2),
                          ) * 100,
                        )}
                        %
                      </span>
                    </div>
                  </>
                )}
                {!selectedOption.onSale && (
                  <span className='text-body text-primary fs-5 fw-bolder' style={{ fontSize: 22 }}>
                    {moneyFormatter.format(selectedOption.price)}
                  </span>
                )}
              </div>
            </div>
            {selectedOption.onSale && (
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
                      Giảm giá {moneyFormatter.format(selectedOption.price - selectedOption.salePrice)} trừ trực tiếp
                      vào giá bán
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
            {options.map((option) => (
              <div
                key={option.id}
                style={{ cursor: 'pointer' }}
                className={`g-col-6 p-1 rounded-3 border ${option.id === selectedOption.id ? 'border-blue' : ''}`}
                onClick={() => {
                  setSelectedOption(option)
                }}
              >
                <div className='p-2'>
                  <div className='d-flex'>
                    <div className='text-ui-sm fw-semibold divide-disc'>{option.summary}</div>
                  </div>

                  <div className='mt-1'>
                    {option.onSale && (
                      <>
                        <div className='fw-bold text-primary'>{moneyFormatter.format(option.salePrice)}</div>
                        <div className='text-linethrough text-ui'>{moneyFormatter.format(option.price)}</div>
                      </>
                    )}
                    {!option.onSale && (
                      <div className='fw-bold text-primary'>{moneyFormatter.format(option.price)}</div>
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
          {selectedOption.quantity > 0 && (
            <Button variant='primary' size='large' className='w-100 rounded-3' style={{ fontSize: 16 }}>
              Thêm vào giỏ hàng
            </Button>
          )}
          {selectedOption.quantity <= 0 && (
            <Button disabled variant='gray' size='large' className='w-100 rounded-3' style={{ fontSize: 16 }}>
              Hết hàng
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
