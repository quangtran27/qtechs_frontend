import { GiftIcon } from '~/components/Icon'
import moneyFormatter from '~/utils/formatter'

type PromotionsProps = {
  discount: number
  percent: number
}

export default function Promotions({ discount, percent }: PromotionsProps) {
  return (
    <section className='p-4 mt-4 bg-tint-soft-orange rounded-3'>
      <div className='d-flex align-items-center'>
        <GiftIcon width={18} height={18} />
        <h3 className='d-block ms-2'>Ưu đãi & khuyến mại</h3>
      </div>
      <div className='py-2 fw-bold'>
        Giảm trực tiếp <span className='text-primary'>{moneyFormatter.format(discount)}</span> ({percent}%)
      </div>
    </section>
  )
}
