import classNames from 'classnames/bind'
import { ReactNode } from 'react'

import Footer from '../components/Footer'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import style from './MainLayout.module.scss'

const cx = classNames.bind(style)

type MainLayoutProps = {
  children: ReactNode | JSX.Element
  hasNavigation?: boolean
}

function MainLayout({ children, hasNavigation = true }: MainLayoutProps) {
  return (
    <>
      <Header />
      <div className={cx('spliter')}></div>
      {hasNavigation && <Navigation />}
      <main className='bg-light'>{children}</main>
      <Footer />
    </>
  )
}

export default MainLayout
