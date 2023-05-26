import { OrderStatus as IOrderStatus } from '~/models/order'

type OrderStatusProps = {
  status: number
  updated: string
}

export default function OrderStatus({ status, updated }: OrderStatusProps) {
  return (
    <div>
      <span className='me-2 fs-65'>{updated}</span>
      <span className='fw-semibold border rounded px-3 bg-light py-1'>
        {status === IOrderStatus.CREATED && <span>Đã tạo</span>}
        {status === IOrderStatus.PREPARING && <span>Đang chuẩn bị hàng</span>}
        {status === IOrderStatus.DELIVERING && <span>Đang giao hàng</span>}
        {status === IOrderStatus.DELIVERED && <span className='text-success'>Đã giao hàng</span>}
        {status === IOrderStatus.CANCELED && <span className='text-danger'>Đã hủy</span>}
      </span>
    </div>
  )
}
