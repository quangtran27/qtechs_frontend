import classNames from 'classnames/bind'
import SwitchCheckbox from '~/components/SwitchCheckbox'
import { Filter } from '~/models/filter'
import styles from './Filter.module.scss'

const cx = classNames.bind(styles)

function BooleanFilter({ id, name }: Filter) {
  return (
    <label htmlFor={'filter-' + id} className={`${cx('wrapper')} d-flex align-items-center`} data-filter-type={id}>
      <div className={`${cx('heading')} me-5`}>
        <div className={cx('heading-wrapper')}>
          <span className='flex-1'>{name}</span>
        </div>
      </div>
      <div>
        <SwitchCheckbox inputId={'filter-' + id} />
      </div>
    </label>
  )
}

export default BooleanFilter
