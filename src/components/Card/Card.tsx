import classNames from 'classnames/bind'
import { ReactNode } from 'react'
import styles from './Card.module.scss'

type PaperProps = {
  children?: ReactNode | JSX.Element
  className?: string
  style?: object
  size?: 'small' | 'medium' | 'large'
}
const cx = classNames.bind(styles)

export default function Card({ children, className = '', style = {}, size = 'medium' }: PaperProps) {
  return (
    <div className={`${cx('container', size)} ${className}`} style={{ ...style }}>
      {children}
    </div>
  )
}
