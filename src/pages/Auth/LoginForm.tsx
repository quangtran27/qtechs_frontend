import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Button from '~/components/Button'
import { object, string } from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'
import { UserLogin } from '~/models/user'

const schema = object({
  username: string().required('Vui lòng nhập tên tài khoản'),
  password: string().required('Vui lòng nhập mật khẩu'),
})

type LoginFormProps = {
  userLogin: UserLogin
  onSubmit: (_userLogin: UserLogin) => void
}

export default function LoginForm({ userLogin, onSubmit }: LoginFormProps) {
  const { formState, handleSubmit, register } = useForm({
    defaultValues: { ...userLogin },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })
  const { errors } = formState

  const handleSignIn = (_userLogin: UserLogin) => {
    onSubmit(_userLogin)
  }

  return (
    <form autoComplete='none' onSubmit={handleSubmit(handleSignIn)}>
      <div>
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='text'
            className='qt-form-control'
            placeholder='Tên tài khoản'
            {...register('username')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.username?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='password'
            className='qt-form-control'
            placeholder='Mật khẩu'
            {...register('password')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.password?.message}</div>}
      </div>
      <div className='ms-3 mb-4'>
        <Link to='/forgot-password' className='text-blue text-ui fw-bold text-underline'>
          Quên mật khẩu?
        </Link>
      </div>
      <div className='d-flex justify-content-center'>
        <Button variant='primary' style={{ width: '100%', height: 40 }} type='submit'>
          Đăng nhập
        </Button>
      </div>
    </form>
  )
}
