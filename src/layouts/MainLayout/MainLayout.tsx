import classNames from 'classnames/bind'
import { ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import style from './MainLayout.module.scss'

const cx = classNames.bind(style)

type MainLayoutProps = {
  children: ReactNode | JSX.Element
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className='bg-secondary'>
      <Header />
      <div className={cx('spliter')}></div>
      <Navigation />
      <main className='bg-white'>{children}</main>
      <Footer />
    </div>
  )
}

export default MainLayout
