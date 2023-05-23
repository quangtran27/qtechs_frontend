import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import { useForm, useWatch } from 'react-hook-form'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { object, string } from 'yup'
import orderApi from '~/api/orderApi'
import userApi from '~/api/userApi'
import Button from '~/components/Button/Button'
import Card from '~/components/Card/Card'
import { CartItem } from '~/models/cart'
import { OrderPayment } from '~/models/order'
import { checkAuth } from '~/utils/auth'
import moneyFormatter from '~/utils/formatter'
import styles from './Checkout.module.scss'

const cx = classNames.bind(styles)

const schema = object({
  name: string().required('Vui lòng nhập họ tên'),
  phone: string().required('Vui lòng nhập số điện thoại'),
  address: string().required('Vui lòng nhập địa chỉ'),
})

interface CheckoutFormData {
  name: string
  phone: string
  address: string
  note: string
  payment: OrderPayment
}
const emptyCheckoutData: CheckoutFormData = {
  name: '',
  phone: '',
  address: '',
  note: '',
  payment: OrderPayment.COD,
}

export default function Checkout() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!checkAuth()) navigate('/login')
  }, [navigate])

  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [isProductsExpand, setIsProductsExpand] = useState(false)
  const [isCheckingOut, setIsCheckingOut] = useState(false)
  const [checkoutData, setCheckoutData] = useState(emptyCheckoutData)
  const productsRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: { ...checkoutData },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const payment = useWatch({
    name: 'payment',
    defaultValue: emptyCheckoutData.payment,
    control,
  })

  useEffect(() => {
    try {
      setCartItems(JSON.parse(localStorage.getItem('selectedCartItems') || ''))
    } catch (e) {}
    const userId = localStorage.getItem('userId')
    if (userId !== null) {
      ;(async () => {
        const user = (await userApi.getInfo(Number(userId))).data
        setCheckoutData({
          name: `${user.firstName} ${user.lastName}`,
          phone: user.phone,
          address: user.address,
          note: '',
          payment: OrderPayment.COD,
        })
        reset({
          name: `${user.firstName} ${user.lastName}`,
          phone: user.phone,
          address: user.address,
          note: '',
        })
      })()
    } else {
      navigate('/login')
    }
  }, [cartItems.length, navigate, reset])

  useEffect(() => {
    const wrapper = productsRef.current
    if (wrapper) {
      wrapper.style.height = isProductsExpand ? wrapper.scrollHeight + 'px' : '0'
    }
  }, [isProductsExpand])

  const handleCheckout = async (_checkoutData: CheckoutFormData) => {
    try {
      if (cartItems.length > 0) {
        if (window.confirm('Xác nhận đặt hàng?')) {
          const userId = Number(localStorage.getItem('userId'))
          if (!isCheckingOut) {
            setIsCheckingOut(true)
            await orderApi.addOrder(
              userId,
              _checkoutData.name,
              _checkoutData.phone,
              _checkoutData.address,
              _checkoutData.payment,
              _checkoutData.note,
              cartItems.map((item) => item.id).join(','),
            )
            setIsCheckingOut(false)
          }
          localStorage.removeItem('selectedCartItems')
          toast.success('Đặt hàng thành công', {
            position: 'top-right',
            autoClose: 5000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
          navigate('/order')
        }
      } else {
        toast.warn('Không có sản phẩm nào trong đơn hàng', {
          position: 'top-right',
          autoClose: 5000,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        })
      }
    } catch (_e) {
      toast.error('Đặt hàng không thành công, vui lòng thử lại', {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  const provisional = cartItems.reduce((acc, item) => {
    const price = item.option.onSale ? item.option.salePrice : item.option.price
    return acc + price * item.quantity
  }, 0)
  const shippingFee = provisional >= 1500000 ? 0 : 70000

  return (
    <div className={cx('wrapper')}>
      <div className='container px-0 py-3'>
        <form ref={formRef} autoComplete='none' onSubmit={handleSubmit(handleCheckout)}>
          <div className='row mx-0'>
            <div className='fw-bold fs-4 mb-3'>Đặt hàng</div>
            <Card className='col-lg-8'>
              <div className='fw-bold fs-5 pb-1 mb-2 border-bottom'>Thông tin nhận hàng</div>
              <div className='row'>
                <div className='col-lg-6'>
                  <label className='fw-semibold' htmlFor='name'>
                    Họ và tên:
                  </label>
                  <div className='qt-input-group mt-2'>
                    <input id='name' type='text' className='qt-form-control' {...register('name')} />
                  </div>
                  {<div className='ms-3 mt-1 text-danger'>{errors.name?.message}</div>}
                </div>
                <div className='col-lg-6'>
                  <label className='fw-semibold' htmlFor='phone'>
                    Số điện thoại:
                  </label>
                  <div className='qt-input-group mt-2'>
                    <input id='phone' type='text' className='qt-form-control' {...register('phone')} />
                  </div>
                  {<div className='ms-3 mt-1 text-danger'>{errors.phone?.message}</div>}
                </div>
                <div className='col-lg-12 mt-3'>
                  <label className='fw-semibold' htmlFor='address'>
                    Địa chỉ:
                  </label>
                  <div className='qt-input-group mt-2'>
                    <input id='address' type='text' className='qt-form-control' {...register('address')} />
                  </div>
                  {<div className='ms-3 mt-1 text-danger'>{errors.address?.message}</div>}
                </div>
                <div className='col-lg-12 mt-3'>
                  <label className='fw-semibold' htmlFor='note'>
                    Ghi chú:
                  </label>
                  <div className='qt-input-group mt-2'>
                    <textarea id='note' className='qt-form-control' {...register('note')} />
                  </div>
                </div>
              </div>
            </Card>
            <div className='col-lg-4 pe-0'>
              <Card>
                <div className='fw-bold fs-5 mb-1'>Tóm tắt đơn hàng</div>
                <div className='d-flex pt-3 border-top'>
                  <div className='flex-1'>Tạm tính</div>
                  <div>{moneyFormatter.format(provisional)}</div>
                </div>
                <div className='d-flex py-3'>
                  <div className='flex-1'>Phí giao hàng</div>
                  <div>{moneyFormatter.format(shippingFee)}</div>
                </div>
                <div className='d-flex border-top pt-3'>
                  <div className='flex-1'>Tổng cộng</div>
                  <div className='fw-bold text-primary fs-5'>{moneyFormatter.format(provisional + shippingFee)}</div>
                </div>
                <div className='d-flex flex-column border-top pt-3'>
                  <div className='flex-1'>Phương thức thanh toán</div>
                  <div className='ms-3'>
                    <div className='d-flex justify-content-center'>
                      <input
                        id={`payment-${OrderPayment.COD}`}
                        style={{ width: 16 }}
                        type='radio'
                        // eslint-disable-next-line eqeqeq
                        checked={payment == OrderPayment.COD}
                        {...register('payment')}
                        value={OrderPayment.COD}
                      />
                      <label htmlFor={`payment-${OrderPayment.COD}`} className='p-2 ms-2 w-100'>
                        COD
                      </label>
                    </div>
                    <div className='d-flex'>
                      <input
                        id={`payment-${OrderPayment.Banking}`}
                        style={{ width: 16 }}
                        type='radio'
                        // eslint-disable-next-line eqeqeq
                        checked={payment == OrderPayment.Banking}
                        {...register('payment')}
                        value={OrderPayment.Banking}
                      />
                      <label htmlFor={`payment-${OrderPayment.Banking}`} className='p-2 ms-2 w-100'>
                        Chuyển khoản ngân hàng
                      </label>
                    </div>
                  </div>
                </div>
                <Button variant='primary' className='w-100 mt-3' size='large' type='submit'>
                  Đặt hàng
                </Button>
              </Card>
              <Card className='mt-3'>
                <div
                  role='button'
                  className='d-flex fw-bold'
                  onClick={() => {
                    setIsProductsExpand(!isProductsExpand)
                  }}
                >
                  <h6 className='flex-1 fw-bold'>Sản phẩm trong đơn ({cartItems.length})</h6>
                  <span
                    className={cx('heading-icon', {
                      expanded: isProductsExpand,
                    })}
                  ></span>
                </div>
                <div className={cx('products')} ref={productsRef}>
                  {cartItems.map((item) => (
                    <div key={item.id} className='d-flex py-2 mt-2 border-top'>
                      <img src={process.env.REACT_APP_API_URL + item.option.images[0]} alt='' style={{ width: 72 }} />
                      <div className='d-flex flex-column ms-2'>
                        <div className='fs-6'>{item.option.name}</div>
                        <div className='fs-7 mb-2 bg-light rounded px-2 py-1'>{item.option.summary}</div>
                        <div>
                          <span className='text-primary me-2 fw-bold'>
                            {moneyFormatter.format(item.option.onSale ? item.option.salePrice : item.option.price)}
                          </span>
                          <span>x{item.quantity}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
