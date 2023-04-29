import { useEffect, useRef, useState } from 'react'
import classNames from 'classnames/bind'
import styles from './Filter.module.scss'
import { IFilter } from '~/models/filter'

const cx = classNames.bind(styles)

function ValueFilter({ id, name, choices = [] }: IFilter) {
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
        <div className={cx('content-1')}>
          {choices.map((choice) => (
            <label
              key={choice.value}
              htmlFor={'choice-' + id + '-' + choice.value}
              className={cx('filter-choice-wrapper')}
            >
              <input type='checkbox' id={'choice-' + id + '-' + choice.value} value={choice.display} />
              <span className={cx('filter-choice')}>{choice.display}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ValueFilter
