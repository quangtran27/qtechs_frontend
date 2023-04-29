import { PlusIcon, TruckIcon } from '~/components/Icon'

export default function EstimatedShipping() {
  return (
    <section className='p-4 mt-4 bg-light-gray rounded-3'>
      <div className='d-flex align-items-center'>
        <TruckIcon width={26} height={26} />
        <h3 className='d-block ms-2'>Dự kiến vận chuyển</h3>
      </div>
      <div className='mt-2'>
        <div>Hãy chọn địa chỉ để xem dự tính thời gian và chi phí nhận hàng</div>
      </div>
      <div className='mt-2 text-ui text-blue fw-bold cursor-pointer'>
        <PlusIcon className='me-2' width={14} height={14} />
        <span>Chọn địa chỉ</span>
      </div>
    </section>
  )
}
