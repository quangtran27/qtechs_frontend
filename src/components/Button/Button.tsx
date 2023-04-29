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
  large?: boolean
  lightActive?: boolean
  primary?: boolean
  rounded?: boolean
  small?: boolean
  style?: object
  type?: 'button' | 'submit' | 'reset'
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
  large,
  lightActive,
  primary,
  rounded,
  small,
  style,
  type = 'button',
  width,
  onClick,
}: ButtonProps) {
  if (disabled) {
    if (onClick) {
      onClick = undefined
    }
  }

  const classes = cx('wrapper', {
    active,
    border,
    circle,
    disabled,
    large,
    lightActive,
    primary,
    small,
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
