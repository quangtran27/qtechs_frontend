import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './Path.module.scss'

const cx = classNames.bind(styles)

type PathProps = {
  elements: {
    display: string
    link: string
  }[]
}

export default function Path({ elements }: PathProps) {
  elements.unshift({
    display: 'Trang chủ',
    link: process.env.REACT_APP_ROOT_URL || '/',
  })

  return (
    <ul className={cx('container')}>
      {elements.map((e, index) => (
        <li key={index}>
          <Link to={e.link}>{e.display}</Link>
        </li>
      ))}
    </ul>
  )
}
