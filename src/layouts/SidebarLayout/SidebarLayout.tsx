import { ReactNode } from 'react'
import Header from '~/layouts/components/Header'
import Sidebar from '../components/Sidebar'

type SidebarLayoutProps = {
  children: ReactNode | JSX.Element
}

export default function SidebarLayout({ children }: SidebarLayoutProps) {
  return (
    <>
      <Header />
      <div className='pt-4'></div>
      <main className='bg-light mt-5'>
        <div className='wrapper containter py-4'>
          <div className='row'>
            <Sidebar />
            <div className='col-lg-8'>{children}</div>
          </div>
        </div>
      </main>
    </>
  )
}
