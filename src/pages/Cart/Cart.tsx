import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import cartApi from '~/api/cartApi'
import Button from '~/components/Button'
import Card from '~/components/Card/Card'
import CartItem from '~/components/CartItem'
import { Cart as CartModel, emptyCart } from '~/models/cart'
import { checkAuth } from '~/utils/auth'
import moneyFormatter from '~/utils/formatter'
import styles from './Cart.module.scss'

const cx = classNames.bind(styles)

export default function Cart() {
  const navigate = useNavigate()
  useEffect(() => {
    if (!checkAuth()) navigate('/login')
  }, [navigate])

  const [cart, setCart] = useState<CartModel>(emptyCart)
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = Number(localStorage.getItem('userId'))
        const response = await cartApi.getCart(userId)
        setCart(response.data)
      } catch (e) {
        console.log(e)
      }
    }

    fetchCart()
  }, [])

  let provisional = 0
  let discount = 0
  let total = 0
  const bindingCartProvisional = () => {
    cart.cartItems.forEach((cartItem) => {
      provisional += cartItem.option.price * cartItem.quantity
      if (cartItem.option.onSale) {
        discount += -(cartItem.option.price - cartItem.option.salePrice) * cartItem.quantity
      }
    })
    total = provisional + discount
  }

  bindingCartProvisional()

  return (
    <div className={cx('wrapper')}>
      <div className='container px-0 py-4'>
        <div className='row'>
          <div className='fw-bold fs-4 mb-3'>Giỏ hàng</div>
          <div className='col-lg-8'>
            {cart.cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                id={cartItem.id}
                cartId={cartItem.cartId}
                quantity={cartItem.quantity}
                option={cartItem.option}
                setCart={setCart}
              />
            ))}
          </div>
          <div className='col-lg-4'>
            <Card size='large'>
              <div className='fw-bold fs-5 mb-3'>Tóm tắt đơn hàng</div>
              <div className='d-flex fs-6 mb-2'>
                <div className='flex-1'>Tạm tính</div>
                <div className='fw-bold text-body'>{moneyFormatter.format(total)}</div>
              </div>
              <div className='d-flex fs-6 mb-2'>
                <div className='flex-1'>Giảm giá</div>
                <div className='text-decoration-line-through text-gray text-ui'>{moneyFormatter.format(discount)}</div>
              </div>
              <div className='border-top mb-3'></div>
              <div className='d-flex fs-6 mb-2'>
                <div className='flex-1'>Tổng cộng</div>
                <div className='text-primary fs-5 fw-bolder'>{moneyFormatter.format(total)}</div>
              </div>
              <Button size='large' variant='primary' className='w-100 mt-4'>
                Mua hàng
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
