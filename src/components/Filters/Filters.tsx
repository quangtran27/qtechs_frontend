import { FilterIcon } from '../Icon'
import classNames from 'classnames/bind'

import styles from './Filters.module.scss'
import LaptopFilter from './LaptopFilter'

type FiltersProps = {
  type: 'laptop' | 'sound' | 'keyboard' | 'table' | 'bag'
}

const cx = classNames.bind(styles)

function Filters({ type }: FiltersProps) {
  return (
    <div className={cx('wrapper')}>
      <div className={cx('container')}>
        <div className='mt-0 d-flex ai-center'>
          <FilterIcon />
          <span className='ms-2 bold'>Bộ lọc</span>
        </div>
        <div className={cx('filter')}>{type === 'laptop' && <LaptopFilter />}</div>
      </div>
    </div>
  )
}

export default Filters
