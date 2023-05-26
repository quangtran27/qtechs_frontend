import classNames from 'classnames/bind'
import { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Button from '~/components/Button'
import Card from '~/components/Card'
import { LogoutIcon, ShieldCheck, TruckIcon, UserIcon } from '~/components/Icon'
import { checkAuth, logout } from '~/utils/auth'
import styles from './Sidebar.module.scss'

const cx = classNames.bind(styles)

export default function Sidebar() {
  const navigate = useNavigate()

  useEffect(() => {
    if (!checkAuth()) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <Card className={`col-lg-4`}>
      <ul className={cx('sidebar-menu')}>
        <li className={cx('sidebar-menu-item')}>
          <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to='/user/order'>
            <Button size='large' className='fw-normal w-100 align-items-center justify-content-start my-2 '>
              <TruckIcon className='me-3' />
              <span>Thông tin đơn hàng</span>
            </Button>
          </NavLink>
        </li>
        <li className={cx('sidebar-menu-item')}>
          <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to='/user/profile'>
            <Button size='large' className='fw-normal w-100 align-items-center justify-content-start my-2 '>
              <UserIcon className='me-3' />
              <span>Thông tin cá nhân</span>
            </Button>
          </NavLink>
        </li>
        <li className={cx('sidebar-menu-item')}>
          <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to='/user/change-password'>
            <Button size='large' className='fw-normal w-100 align-items-center justify-content-start my-2 '>
              <ShieldCheck className='me-3' />
              <span>Mật khẩu</span>
            </Button>
          </NavLink>
        </li>
        <div className='border-bottom'></div>
        <li className={cx('sidebar-menu-item')}>
          <Button
            size='large'
            className='fw-normal w-100 align-items-center justify-content-start mt-2 text-danger fw-bold'
            onClick={() => {
              if (window.confirm('Bạn có muốn đăng xuất?')) {
                logout()
                navigate('/login')
              }
            }}
          >
            <LogoutIcon className='me-3 ' />
            <span className=''>Đăng xuất</span>
          </Button>
        </li>
      </ul>
    </Card>
  )
}
