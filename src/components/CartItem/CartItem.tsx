import { AxiosError } from 'axios'
import { ChangeEvent, Dispatch, SetStateAction, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import cartApi from '~/api/cartApi'
import Button from '~/components/Button'
import Card from '~/components/Card'
import { CloseIcon } from '~/components/Icon'
import Image from '~/components/Image'
import { Cart, CartItem as CartItemModel } from '~/models/cart'
import { ErrorResponse } from '~/models/common'
import moneyFormatter from '~/utils/formatter'

type CartItemProps = {
  cartItem: CartItemModel
  isChecked: boolean
  setCart: Dispatch<SetStateAction<Cart>>
  setSelectedCartItem: Dispatch<SetStateAction<CartItemModel[]>>
}

export default function CartItem({ cartItem, isChecked = false, setCart, setSelectedCartItem }: CartItemProps) {
  const [quantity, setQuantity] = useState(cartItem.quantity)

  const handleSelectCartItem = (event: ChangeEvent<HTMLInputElement>) => {
    const checked = event.target.checked
    if (checked) {
      setSelectedCartItem((prev) => [...prev, cartItem])
    } else {
      setSelectedCartItem((prev) => [...prev.filter((item) => item.id !== cartItem.id)])
    }
  }

  const handleChangeQuantity = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value)
    if (!Number.isNaN(value)) {
      setQuantity(value)
    }
  }

  const handleUpdateQuantity = () => {
    if (quantity !== cartItem.quantity) {
      const updateCartItem = async () => {
        try {
          const userId = Number(localStorage.getItem('userId'))
          const response = await cartApi.updateCartItem(userId, cartItem.id, quantity)
          toast.success('Cập nhật thành công!', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
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
          setSelectedCartItem([])
        } catch (_e) {
          const axiosError = _e as AxiosError
          const e = axiosError.response?.data as ErrorResponse
          toast.error(e.message, {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
          setQuantity(cartItem.quantity)
        }
      }

      updateCartItem()
    }
  }

  const handleDeleteCartItem = () => {
    const isConfirm = window.confirm(`Bạn có thực sự muốn xóa ${cartItem.option.name} ra khỏi giỏ hàng?`)
    if (isConfirm) {
      const deleteCartItem = async () => {
        try {
          const userId = Number(localStorage.getItem('userId'))
          await cartApi.deleteCartItem(userId, cartItem.id, quantity)
          toast.success('Xoá sản phẩm khỏi giỏ hàng thành công!', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
          setCart((prevCart) => {
            const cart = { ...prevCart }
            const newCartItems = cart.cartItems.filter((item) => item.id !== cartItem.id)
            cart.cartItems = [...newCartItems]
            return cart
          })
          setSelectedCartItem([])
        } catch (e) {
          alert('Xóa không thành công!')
        }
      }
      deleteCartItem()
    }
  }

  return (
    <div className='d-flex mb-3'>
      <input
        checked={isChecked}
        type='checkbox'
        onChange={handleSelectCartItem}
        className='mx-3'
        style={{ width: 16 }}
      />
      <Card size='large' className='flex-1'>
        <div className='row'>
          <div className='col-lg-2'>
            <Image src={`${process.env.REACT_APP_API_URL}${cartItem.option.images[0]}`} height='100' width='100' />
          </div>
          <div className='col-lg-6'>
            <Link to='/laptop/1'>
              <div className='fw-bold mb-1'>{cartItem.option.name}</div>
              <div className='text-ui'>{cartItem.option.summary}</div>
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
                {cartItem.option.onSale && (
                  <>
                    <div className='text-ui text-decoration-line-through text-gray mb-1'>
                      ${moneyFormatter.format(cartItem.option.price)}
                    </div>
                    <div className='fw-bold fs-5 mb-1 text-primary'>
                      {moneyFormatter.format(cartItem.option.salePrice)}
                    </div>
                  </>
                )}
                {!cartItem.option.onSale && (
                  <div className='fw-bold fs-5 mb-1 text-primary'>{moneyFormatter.format(cartItem.option.price)}</div>
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
    </div>
  )
}
