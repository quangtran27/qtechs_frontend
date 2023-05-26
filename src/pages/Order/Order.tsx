import { useEffect, useState } from 'react'
import orderApi from '~/api/orderApi'
import Card from '~/components/Card'
import OrderStatus from '~/components/OrderStatus'
import { Order as OrderModel } from '~/models/order'
import moneyFormatter from '~/utils/formatter'

export default function Order() {
  const [orders, setOrders] = useState<OrderModel[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        const userId = Number(localStorage.getItem('userId'))
        const _orders = (await orderApi.getByUser(userId, { page: 1, pageSize: 6 })).data
        setOrders(_orders.data)
      } catch {}
    })()
  }, [])

  return (
    <div className='h-100'>
      {orders.map((order) => (
        <Card key={order.id} className='border-bottom mb-2'>
          <div className='d-flex justify-content-between align-items-center py-2'>
            <span className='fw-bold'>Đơn hàng #{order.id}</span>
            <OrderStatus status={Number(order.status)} updated={order.updated} />
          </div>
          <div>
            {order.items.map((item, index) => (
              <div key={index} className='d-flex py-2 mt-2 border-bottom align-items-center'>
                <img
                  src={process.env.REACT_APP_API_URL + item.option.images[0]}
                  alt=''
                  style={{ width: 52, height: 52 }}
                />
                <div className='flex-1 d-flex flex-column ms-3'>
                  <div className='fs-65'>{item.option.name}</div>
                  <div className='fs-7 mb-2 bg-light rounded px-2 py-1'>{item.option.summary}</div>
                </div>
                <div>
                  <span className='fs-65 me-2 fw-bold'>
                    {moneyFormatter.format(item.option.onSale ? item.option.salePrice : item.option.price)}
                  </span>
                  <span>x{item.quantity}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='d-flex mt-3 justify-content-between align-items-center'>
            <div className='fs-65'>
              <span>Thời gian đặt hàng:</span> <span className='fw-semibold'>{order.created}</span>
            </div>
            <div>
              Thành tiền: <span className='text-primary fw-bold fs-5 ms-2'>{moneyFormatter.format(order.total)}</span>
            </div>
          </div>
        </Card>
      ))}
      {orders.length === 0 && (
        <div className='w-100 h-100 d-flex justify-content-center align-items-center'>
          <span>Chưa có đơn hàng</span>
        </div>
      )}
    </div>
  )
}
