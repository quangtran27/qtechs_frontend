import { useEffect } from 'react'
import { IFilterChoice } from '~/models/filter'

import BooleanFilter from './Filter/BooleanFilter'
import ColorFilter from './Filter/ColorFilter'
import ValueFilter from './Filter/ValueFilter'

const laptopPriceChoices: IFilterChoice[] = [
  {
    display: 'Duới 15 triệu',
    value: '0-15',
  },
  {
    display: 'Từ 15-25 triệu',
    value: '15-25',
  },
  {
    display: 'Từ 25-35 triệu',
    value: '25-35',
  },
  {
    display: 'Trên 35 triệu',
    value: '35-999',
  },
]

export default function LaptopFilter() {
  useEffect(() => {}, [])

  return (
    <>
      <ValueFilter id='price' name='Khoảng giá' choices={laptopPriceChoices} />
      <BooleanFilter id='promotion' name='Chỉ hiển thị ưu đãi / Khuyến mại' />
      <ValueFilter id='brand' name='Thương hiệu' choices={[]} />
      <ValueFilter id='cpu' name='CPU' choices={[]} />
      <ValueFilter id='ram' name='RAM' choices={[]} />
      <ColorFilter id='color' name='Màu sắc' choices={[]} />
    </>
  )
}
