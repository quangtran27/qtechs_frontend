import Tippy from '@tippyjs/react'
import classNames from 'classnames/bind'
import { Link, NavLink } from 'react-router-dom'
import 'tippy.js/dist/tippy.css'
import images from '~/assets/images'
import Button from '~/components/Button'
import { CartIcon, UserIcon } from '~/components/Icon'
import Search from '~/components/Search'
import styles from './Header.module.scss'

const cx = classNames.bind(styles)

function Header() {
  return (
    <header className={cx('header')}>
      <div className={cx('container')}>
        <div className='d-flex flex-1 align-items-center'>
          <Link to='/' className={`${cx('main-logo')} mx-4`}>
            <img src={images.logo} alt='QTechs' width='100%' height='100%' />
          </Link>
          <Link to='/' className={`${cx('main-logo-mobile')} mx-4`}>
            <img src={images.miniLogo} alt='QTechs' width='100%' height='100%' />
          </Link>
          <Search title='Tên sản phẩm, nhu cầu, hãng' searchResult={true} />
        </div>
        <div className='d-flex align-items-center ms-4'>
          <Tippy arrow='false' content='Giỏ hàng' delay={[300, 200]}>
            <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to='/cart'>
              <Button className='d-flex align-items-center' width='42px' height='42px' circle>
                <CartIcon className={cx('cart-icon')} />
              </Button>
            </NavLink>
          </Tippy>
          <Tippy className={cx('order')} arrow='false' content='Tài khoản' delay={[300, 200]}>
            <NavLink className={({ isActive }) => (isActive ? cx('active') : '')} to='/user'>
              <Button className='h-100 ms-3' width='42px' height='42px' circle>
                <UserIcon />
              </Button>
            </NavLink>
          </Tippy>
        </div>
      </div>
    </header>
  )
}

export default Header
