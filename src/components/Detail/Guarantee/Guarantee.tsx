import { HeadsetIcon, ShieldCheck } from '~/components/Icon'

export default function Guarantee() {
  return (
    <section className='p-4 mt-4 bg-light-gray rounded-3'>
      <div className='d-flex align-items-center'>
        <ShieldCheck width={26} height={26} />
        <h3 className='d-block ms-2'>Bảo hành, đổi trả</h3>
      </div>
      <div className='ms-3 mt-2 ps-2'>
        <ul>
          <li>
            Bảo hành <strong>12 tháng tại QTechs</strong>
          </li>
          <li>Đổi mới trong 15 ngày đầu tiên</li>
        </ul>
      </div>
      <div className='mt-2 text-ui text-blue fw-bold cursor-pointer'>
        <HeadsetIcon className='text-blue me-2' width={16} height={16} />
        <span>Câu hỏi thường gặp</span>
      </div>
    </section>
  )
}
