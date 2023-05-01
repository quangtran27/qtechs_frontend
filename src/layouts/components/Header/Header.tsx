import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import Tippy from '@tippyjs/react'
import 'tippy.js/dist/tippy.css'
import { CartIcon, TruckIcon } from '~/components/Icon'
import images from '~/assets/images'
import styles from './Header.module.scss'
import Button from '~/components/Button'
import Notification from '~/layouts/components/Notification'
import Search from '~/components/Search'
import Account from '../Account'

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
            <Link className={cx('cart')} to='/cart'>
              <Button className='d-flex align-items-center' height='42px' rounded>
                <>
                  <CartIcon className={cx('cart-icon')} />
                  <span className='ms-1 text-body'>0</span>
                </>
              </Button>
            </Link>
          </Tippy>
          <Tippy className={cx('order')} arrow='false' content='Đang vận chuyển' delay={[300, 200]}>
            <Link className={cx('order')} to='/order'>
              <Button className='h-100 ms-3' width='42px' height='42px' circle>
                <TruckIcon />
              </Button>
            </Link>
          </Tippy>
          <Notification />
          <Account />
        </div>
      </div>
    </header>
  )
}

export default Header
