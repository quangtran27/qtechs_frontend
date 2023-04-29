import { object, string, number, ref } from 'yup'
import { useForm, useWatch } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import classNames from 'classnames/bind'

import { User } from '~/models/user'
import Button from '~/components/Button'
import styles from './Auth.module.scss'

const cx = classNames.bind(styles)
const genderOptions = [
  { value: 1, label: 'Nam' },
  { value: 2, label: 'Nữ' },
  { value: 3, label: 'Khác' },
]

const schema = object({
  address: string().required('Vui lòng nhập địa chỉ'),
  confirmPassword: string().oneOf([ref('password')], 'Mật khẩu không khớp'),
  email: string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email không hợp lệ')
    .required('Vui lòng nhập email'),
  gender: number().required().oneOf([1, 2, 3]).required(),
  name: string().required('Vui lòng nhập tên'),
  password: string().min(8, 'Mật khẩu phải có ít nhất 8 ký tự').required('Vui lòng nhập mật khẩu'),
  phone: string()
    .matches(/^(03|05|07|08|09)+([0-9]{8})\b/, 'Số điện thoại không hợp lệ')
    .required('Vui lòng nhập số điện thoại'),
})

type SignUpFormProps = {
  onSubmit: (user: User) => void
}

const emptyUser = {
  id: 0,
  name: '',
  phone: '',
  gender: 1, // 1: Male, 2: Female, 3: Others
  password: '',
  confirmPassword: '',
  email: '',
  address: '',
}

function RegisterForm({ onSubmit }: SignUpFormProps) {
  const { control, formState, handleSubmit, register, reset } = useForm({
    defaultValues: { ...emptyUser, confirmPassword: '' },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })
  const { errors } = formState

  const gender = useWatch({
    name: 'gender',
    defaultValue: emptyUser.gender,
    control,
  })

  const handleSignUp = (data: User) => {
    reset()
    onSubmit({
      id: 0,
      name: data.name,
      gender: data.gender, // 1: Male, 2: Female, 3: Others
      phone: data.phone,
      password: data.password,
      email: data.email,
      address: data.address,
    })
  }

  return (
    <form autoComplete='none' className='' onSubmit={handleSubmit(handleSignUp)}>
      <div>
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='text'
            placeholder='Tên'
            className='qt-form-control'
            {...register('name')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.name?.message}</div>}
        <div className='d-flex mt-3 ms-3'>
          {genderOptions.map((option) => (
            <div key={option.value} className='d-flex me-3'>
              <input
                type='radio'
                // eslint-disable-next-line eqeqeq
                checked={gender == option.value}
                {...register('gender')}
                value={option.value}
              />
              <span className='ms-2'>{option.label}</span>
            </div>
          ))}
        </div>
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='tel'
            placeholder='Số điện thoại'
            className='qt-form-control'
            {...register('phone')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.phone?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='password'
            placeholder='Mật khẩu'
            className='qt-form-control'
            {...register('password')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.password?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='password'
            placeholder='Nhập lại mật khẩu'
            className='qt-form-control'
            {...register('confirmPassword')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.confirmPassword?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='email'
            placeholder='Email'
            className='qt-form-control'
            {...register('email')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.address?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input
            autoComplete='new-password'
            type='text'
            placeholder='Địa chỉ'
            className='qt-form-control'
            {...register('address')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.address?.message}</div>}
      </div>
      <div className='d-flex justify-content-center mt-3 mb-3'>
        <Button primary style={{ width: '100%', height: 40 }} type='submit'>
          Đăng ký
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
