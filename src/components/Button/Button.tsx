import classNames from 'classnames/bind'
import { MouseEvent } from 'react'
import styles from './Button.module.scss'

const cx = classNames.bind(styles)

type ButtonProps = {
  active?: boolean
  children?: JSX.Element | JSX.Element[] | string
  border?: boolean
  circle?: boolean
  className?: string
  disabled?: boolean
  fill?: string
  height?: string | number
  lightActive?: boolean
  rounded?: boolean
  style?: object
  size?: 'small' | 'medium' | 'large'
  type?: 'button' | 'submit' | 'reset'
  variant?: 'primary' | 'secondary' | 'gray' | ''
  width?: string | number
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void
}

function Button({
  active,
  border,
  children,
  circle,
  className = '',
  disabled,
  fill,
  height,
  lightActive,
  rounded,
  style,
  size,
  type = 'button',
  variant = '',
  width,
  onClick,
}: ButtonProps) {
  if (disabled) {
    if (onClick) {
      onClick = undefined
    }
  }

  const classes = cx('wrapper', variant, size, {
    active,
    border,
    circle,
    disabled,
    lightActive,
    rounded,
    [className]: className,
  })

  return (
    <button
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: fill,
        width: width,
        height: height,
        ...style,
      }}
      className={classes}
    >
      {children}
    </button>
  )
}
export default Button
