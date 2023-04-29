import classNames from 'classnames/bind'
import SwitchCheckbox from '~/components/SwitchCheckbox'
import { IFilter } from '~/models/filter'
import styles from './Filter.module.scss'

const cx = classNames.bind(styles)

function BooleanFilter({ id, name }: IFilter) {
  return (
    <label htmlFor={'filter-' + id} className={`${cx('wrapper')} d-flex align-items-center`} data-filter-type={id}>
      <h3 className={`${cx('heading')} me-5`}>
        <div className={cx('heading-wrapper')}>
          <span className='flex-1'>{name}</span>
        </div>
      </h3>
      <div>
        <SwitchCheckbox inputId={'filter-' + id} />
      </div>
    </label>
  )
}

export default BooleanFilter
