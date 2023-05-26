import { ReactNode } from 'react'
import Header from '~/layouts/components/Header'
import Sidebar from '../components/Sidebar'
import classNames from 'classnames/bind'
import styles from './SidebarLayout.module.scss'
type SidebarLayoutProps = {
  children: ReactNode | JSX.Element
}

const cx = classNames.bind(styles)

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <>
      <Header />
      <div className='pt-3'></div>
      <main className='bg-light mt-5'>
        <div className='containter py-4'>
          <div className={`row ${cx('wrapper')}`}>
            <Sidebar />
            <div className='col-lg-8'>{children}</div>
          </div>
        </div>
      </main>
    </>
  )
}
