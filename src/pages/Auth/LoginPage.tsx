import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import userApi from '~/api/userApi'
import Button from '~/components/Button'
import { LoginResponse, UserLogin, emptyUserLogin } from '~/models/user'
import styles from './Auth.module.scss'
import LoginForm from './LoginForm'
import { checkAuth } from '~/utils/auth'
import { toast } from 'react-toastify'

const cx = classNames.bind(styles)

export default function LoginPage() {
  const navigate = useNavigate()
  useEffect(() => {
    if (checkAuth()) navigate('/')
  }, [navigate])

  const { state } = useLocation()
  const [error, setError] = useState('')

  const handleSubmit = async (_userLogin: UserLogin) => {
    try {
      setError('')
      const response: LoginResponse = (await userApi.login(_userLogin)).data
      localStorage.setItem('accessToken', response.accessToken)
      localStorage.setItem('userId', response.userId.toString())
      toast.success('Đăng nhâp thành công!', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
      navigate('/')
    } catch (error) {
      toast.error('Đăng nhập không thành công, tài khoản hoặc mật khẩu chưa chính xác', {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      })
    }
  }

  return (
    <div className='position-fixed bg-light w-100 h-100'>
      <div className={cx('wrapper')}>
        <div className={`flex-1 ${cx('scroll')}`}>
          <div>
            <h2 className='text-cyan fw-bolder fs-5 mb-4'>
              Đăng nhập vào{' '}
              <Link to='/' className='text-cyan'>
                QTechs
              </Link>{' '}
            </h2>
            <LoginForm userLogin={state?.user ? state.user : emptyUserLogin} onSubmit={handleSubmit} />
            {error && <div className='text-danger mt-3 text-center px-5'>{error}</div>}
            <div className='mt-3 mb-2'>
              <div className='text-center'>
                Chưa có tài khoản?
                <Link to='/register' className='text-blue text-ui fw-bold text-underline'>
                  {' '}
                  Đăng ký
                </Link>{' '}
                ngay
              </div>
            </div>
            <div className='d-flex align-items-center justify-content-center'>
              <div>Hoặc truy cập với: </div>
              <div className='d-flex ms-2'>
                <Link to={'/signin-facebook'}>
                  <Button width={48} rounded>
                    <img
                      style={{ width: 26, height: 26 }}
                      src={require('~/assets/images/facebook-logo-blue-circle-transparent.png')}
                      alt=''
                    />
                  </Button>
                </Link>
                <Link to={'/default'}>
                  <Button width={48} rounded>
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
