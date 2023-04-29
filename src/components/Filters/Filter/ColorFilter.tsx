import classNames from 'classnames/bind'
import { useEffect, useRef, useState } from 'react'
import ColorPicker from '~/components/ColorPicker'
import { IFilter } from '~/models/filter'
import styles from './Filter.module.scss'

const cx = classNames.bind(styles)

function ColorFilter({ id, name, choices = [] }: IFilter) {
  const [expanded, setExpanded] = useState(false)
  const wrapperRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const wrapper = wrapperRef.current
    if (wrapper) {
      wrapper.style.height = expanded ? wrapper.scrollHeight + 'px' : '0'
    }
  }, [expanded])

  return (
    <div className={cx('wrapper')} data-filter-type={id}>
      <h3
        className={cx('heading')}
        onClick={() => {
          setExpanded(!expanded)
        }}
      >
        <div className={cx('heading-wrapper')}>
          <span className='flex-1'>{name}</span>
          <span
            className={cx('heading-icon', {
              expanded: expanded,
            })}
          ></span>
        </div>
      </h3>
      <div className={cx('content-wrapper')} ref={wrapperRef}>
        <div className={cx('content')}>
          {choices.map((filterChoice) => (
            <label
              key={filterChoice.value}
              htmlFor={'choice-' + id + '-' + filterChoice.value}
              className={cx('filter-choice-wrapper')}
            >
              <input type='checkbox' id={'choice-' + id + '-' + filterChoice.value} value={filterChoice.display} />
              <span className={cx('filter-choice')}>
                <ColorPicker large colors={[filterChoice.value]} className='border-0' />
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ColorFilter
