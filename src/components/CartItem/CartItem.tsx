import { AxiosError } from 'axios'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import cartApi from '~/api/cartApi'
import Button from '~/components/Button'
import Card from '~/components/Card'
import { CloseIcon } from '~/components/Icon'
import Image from '~/components/Image'
import { Cart } from '~/models/cart'
import { ErrorResponse } from '~/models/common'
import { ProductOption } from '~/models/product'
import moneyFormatter from '~/utils/formatter'

type CartItemProps = {
  id: number
  cartId: number
  quantity: number
  option: ProductOption
  setCart: Dispatch<SetStateAction<Cart>>
}

export default function CartItem({ id, cartId, quantity: _quantity, option, setCart }: CartItemProps) {
  const [quantity, setQuantity] = useState(_quantity)

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (!Number.isNaN(value)) {
      setQuantity(value)
    }
  }

  const handleUpdateQuantity = () => {
    if (quantity !== _quantity) {
      const updateCartItem = async () => {
        try {
          const userId = Number(localStorage.getItem('userId'))
          const response = await cartApi.updateCartItem(userId, id, quantity)
          alert('Cập nhật thành công!')
          setCart((prevCart) => {
            const cart = { ...prevCart }
            const newCartItems = cart.cartItems.map((item) => {
              if (item.id === response.data.id) {
                return { ...response.data }
              }
              return item
            })
            cart.cartItems = [...newCartItems]
            return cart
          })
        } catch (_e) {
          const axiosError = _e as AxiosError
          const e = axiosError.response?.data as ErrorResponse
          alert(e.message)
          setQuantity(_quantity)
        }
      }

      updateCartItem()
    }
  }

  const handleDeleteCartItem = () => {
    const isConfirm = window.confirm(`Bạn có thực sự muốn xóa ${option.name} ra khỏi giỏ hàng?`)
    if (isConfirm) {
      const deleteCartItem = async () => {
        try {
          const userId = Number(localStorage.getItem('userId'))
          await cartApi.deleteCartItem(userId, id, quantity)
          alert('Xóa thành công')
          setCart((prevCart) => {
            const cart = { ...prevCart }
            const newCartItems = cart.cartItems.filter((item) => item.id !== id)
            cart.cartItems = [...newCartItems]
            return cart
          })
        } catch (e) {
          alert('Xóa không thành công!')
        }
      }
      deleteCartItem()
    }
  }

  return (
    <Card size='large' className='mb-3'>
      <div className='row'>
        <div className='col-lg-2'>
          <Image src={`${process.env.REACT_APP_API_URL}${option.images[0]}`} height='100' width='100' />
        </div>
        <div className='col-lg-6'>
          <Link to='/laptop/1'>
            <div className='fw-bold mb-1'>{option.name}</div>
            <div className='text-ui'>{option.summary}</div>
          </Link>
          <div className='d-iflex border rounded mt-2'>
            <input value={quantity} onChange={handleChangeQuantity} className='text-center fw-bold rounded-start' />
            <Button
              onClick={() => {
                handleUpdateQuantity()
              }}
              className='m-0 rounded-0 border-start rounded-end fw-bold'
            >
              Cập nhật
            </Button>
          </div>
        </div>
        <div className='col-lg-4'>
          <div className='d-flex'>
            <div className='d-flex flex-column flex-1'>
              {option.onSale && (
                <>
                  <div className='text-ui text-decoration-line-through text-gray mb-1'>
                    ${moneyFormatter.format(option.price)}
                  </div>
                  <div className='fw-bold fs-5 mb-1 text-primary'>{moneyFormatter.format(option.salePrice)}</div>
                </>
              )}
              {!option.onSale && (
                <div className='fw-bold fs-5 mb-1 text-primary'>{moneyFormatter.format(option.price)}</div>
              )}
            </div>
            <Button
              onClick={() => {
                handleDeleteCartItem()
              }}
              rounded
              className='p-1'
            >
              <CloseIcon />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  )
}
