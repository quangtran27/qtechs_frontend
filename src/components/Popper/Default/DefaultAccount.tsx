import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import images from '~/assets/images'
import Button from '~/components/Button'
import styles from './Default.module.scss'

const cx = classNames.bind(styles)

export function DefaultAccount() {
  return (
    <section className={cx('wrapper')}>
      <img src={images.personLaptop} width={108} height={172} alt='person_laptop' />
      <div className='d-flex flex-1 flex-column ms-2 align-items-start'>
        <span className='bold text-cyan text-ui'>QTechs xin chào!</span>
        <span className='text-ui mt-1'>Hãy đăng nhập để theo dõi đơn hàng và bảo hành dễ dàng nhé</span>
        <Link to='/login' className='d-flex w-100 mt-3'>
          <Button className='w-100' variant='primary'>
            Đăng nhập
          </Button>
        </Link>
        <Link to='/register' className='mt-2 mb-3 hover-blue'>
          <span className='text-ui'>
            Chưa có tài khoản? <span className='text-blue text-ui fw-bold text-underline'>Đăng ký</span>
          </span>
        </Link>
      </div>
    </section>
  )
}
