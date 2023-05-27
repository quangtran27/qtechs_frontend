import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userApi from '~/api/userApi'
import Button from '~/components/Button'
import { User } from '~/models/user'
import styles from './Auth.module.scss'
import RegisterForm from './RegisterForm'
import { checkAuth } from '~/utils/auth'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

export default function RegisterPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (checkAuth()) navigate('/')
  }, [navigate])

  const [error, setError] = useState('')
  const handleSubmit = async (user: User) => {
    try {
      const response = await userApi.register(user)
      toast.success('Đăng ký thành công!', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      navigate('/login', {
        state: { user: response.data },
      })
    } catch (error) {
      setError('Đăng ký không thành công...')
    }
  }

  return (
    <div className='position-fixed bg-light w-100 h-100'>
      <div className={cx('wrapper')} style={{ height: '90%', marginTop: '2%' }}>
        <div className={`flex-1 ${cx('scroll')}`}>
          <div>
            <h2 className='text-cyan fw-bolder fs-5 mb-4'>
              Đăng ký để trở thành thành viên của{' '}
              <Link to='/' className='text-cyan'>
                QTechs
              </Link>
              !
            </h2>
            <RegisterForm onSubmit={handleSubmit} />
            <div className='text-danger'>{error}</div>
            <div className='my-3'>
              <div className='text-center'>
                Đã có tài khoản?{' '}
                <Link to='/login' className='text-blue text-ui fw-bold text-underline'>
                  Đăng nhập
                </Link>{' '}
                ngay
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <div>Hoặc truy cập với: </div>
              <div className='d-flex ms-2'>
                <Link to={'/signin-facebook'}>
                  <Button className='p-2' rounded>
                    <img
                      style={{ width: 26, height: 26 }}
                      src={require('~/assets/images/facebook-logo-blue-circle-transparent.png')}
                      alt=''
                    />
                  </Button>
                </Link>
                <Link to={'/signin-google'}>
                  <Button className='p-2' rounded>
                    <img
                      style={{ width: 26, height: 26 }}
                      src={require('~/assets/images/google-logo-transparent.png')}
                      alt=''
                    />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
