import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import Button from '~/components/Button'
import styles from './MenuItem.module.scss'

const cx = classNames.bind(styles)

type MenuItemProps = {
  content?: string
  className?: string
  digit?: number | string
  disabled?: boolean
  iconLeft?: JSX.Element
  iconRight?: JSX.Element
  to?: string
  vertical?: boolean
  content2?: string
}

// Default is horizontal
function MenuItem({
  className = '',
  content,
  content2,
  digit,
  disabled = false,
  iconLeft,
  iconRight,
  to = '',
  vertical,
}: MenuItemProps) {
  const wrapper = vertical ? 'wrapper-vertical' : 'wrapper'
  const classes = cx(wrapper, {
    [className]: className,
    disabled,
  })
  return (
    <>
      {!vertical && (
        <div className={classes}>
          <Button disabled={disabled}>
            <Link to={to} className='d-flex flex-1'>
              <div className='d-flex flex-1'>
                {iconLeft}
                <span className='ms-2 text-body fw-bold'>{content}</span>
              </div>
              <span className='me-2 text-body fw-bold'>{digit}</span>
              {iconRight}
            </Link>
          </Button>
        </div>
      )}
      {vertical && (
        <div className={classes}>
          <Button disabled={disabled}>
            <Link to='/order'>
              <div className='d-flex flex-column align-items-center'>
                {iconLeft}
                <div className='d-flex flex-column mt-1 text-ui text-center'>
                  {content}
                  <span className='fw-bold'>{content2}</span>
                </div>
              </div>
            </Link>
          </Button>
        </div>
      )}
    </>
  )
}

export default MenuItem
