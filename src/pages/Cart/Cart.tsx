import classNames from 'classnames/bind'
import { ChangeEvent, useEffect, useState } from 'react'
import { useNavigate } from 'react-router'
import cartApi from '~/api/cartApi'
import Button from '~/components/Button'
import Card from '~/components/Card'
import CartItem from '~/components/CartItem'
import { CartItem as CartItemModel, Cart as CartModel, emptyCart } from '~/models/cart'
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
  const [selectedCartItems, setSelectedCartItems] = useState<CartItemModel[]>([])
  useEffect(() => {
    const fetchCart = async () => {
      try {
        const userId = Number(localStorage.getItem('userId'))
        const response = await cartApi.getCart(userId)
        setCart(response.data)
      } catch (e) {}
    }

    fetchCart()
  }, [])

  const handleSelectAll = (event: ChangeEvent<HTMLInputElement>) => {
    setSelectedCartItems(event.target.checked ? [...cart.cartItems] : [])
  }

  const handleCheckout = () => {
    localStorage.removeItem('selectedCartItems')
    localStorage.setItem('selectedCartItems', JSON.stringify(selectedCartItems))
    navigate('/checkout')
  }

  return (
    <div className={cx('wrapper')}>
      <div className='container px-0 py-4'>
        <div className='row'>
          <div className='fw-bold fs-4 mb-3'>Giỏ hàng</div>
          <div className='d-flex align-items-center mb-3'>
            <input
              type='checkbox'
              checked={cart.cartItems.length === selectedCartItems.length}
              onChange={handleSelectAll}
              id='cbSelectedAll'
              className='me-3'
              style={{ width: 20, height: 20 }}
            />
            <label htmlFor='cbSelectedAll' className='fs-5'>
              Chọn tất cả
            </label>
          </div>
          <div className='col-lg-8'>
            {cart.cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.id}
                cartItem={cartItem}
                setCart={setCart}
                isChecked={selectedCartItems.some((item) => item.id === cartItem.id)}
                setSelectedCartItem={setSelectedCartItems}
              />
            ))}
          </div>
          <div className='col-lg-4'>
            <Card size='large'>
              <div className='fw-bold fs-5 mb-3'>Tóm tắt đơn hàng</div>
              <div className='d-flex fs-6 mb-2'>
                <div className='flex-1'>Tạm tính</div>
                <div className='fw-bold text-body'>
                  {moneyFormatter.format(
                    selectedCartItems.reduce((acc, item) => acc + item.option.price * item.quantity, 0),
                  )}
                </div>
              </div>
              <div className='d-flex fs-6 mb-2'>
                <div className='flex-1'>Giảm giá</div>
                <div className='text-decoration-line-through text-gray text-ui'>
                  {moneyFormatter.format(
                    selectedCartItems.reduce((acc, item) => {
                      const discount = item.option.onSale ? item.option.price - item.option.salePrice : 0
                      return acc + discount * item.quantity
                    }, 0),
                  )}
                </div>
              </div>
              <div className='border-top mb-3'></div>
              <div className='d-flex fs-6 mb-2'>
                <div className='flex-1'>Tổng cộng</div>
                <div className='text-primary fs-5 fw-bolder'>
                  {moneyFormatter.format(
                    selectedCartItems.reduce((acc, item) => {
                      const price = item.option.onSale ? item.option.salePrice : item.option.price
                      return acc + price * item.quantity
                    }, 0),
                  )}
                </div>
              </div>
              <Button
                onClick={() => {
                  handleCheckout()
                }}
                size='large'
                variant='primary'
                className='w-100 mt-4'
                disabled={cart.cartItems.length === 0 || selectedCartItems.length === 0}
              >
                Mua hàng
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
