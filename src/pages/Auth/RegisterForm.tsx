import { yupResolver } from '@hookform/resolvers/yup'
import { useForm, useWatch } from 'react-hook-form'
import { number, object, ref, string } from 'yup'
import Button from '~/components/Button'
import { User, emptyUser } from '~/models/user'

const genderOptions = [
  { value: 1, label: 'Nam' },
  { value: 2, label: 'Nữ' },
  { value: 3, label: 'Khác' },
]

const schema = object({
  username: string().required('Vui lòng nhập tên tài khoản'),
  password: string().required('Vui lòng nhập mật khẩu'),
  confirmPassword: string().oneOf([ref('password')], 'Mật khẩu không khớp'),
  firstName: string().required('Vui lòng nhập họ'),
  lastName: string().required('Vui lòng nhập tên'),
  email: string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email không hợp lệ')
    .required('Vui lòng nhập email'),
  gender: number().required().oneOf([1, 2, 3]).required(),
  address: string().required('Vui lòng nhập địa chỉ'),
})

type SignUpFormProps = {
  onSubmit: (user: User) => void
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
      username: data.username,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      gender: data.gender, // 1: Male, 2: Female, 3: Others
      phone: data.phone,
      email: data.email,
      address: data.address,
    })
  }

  return (
    <form autoComplete='none' className='' onSubmit={handleSubmit(handleSignUp)}>
      <div>
        <div className='qt-input-group mt-3'>
          <input type='text' placeholder='Họ' className='qt-form-control' {...register('firstName')} />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.firstName?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input type='text' placeholder='Tên' className='qt-form-control' {...register('lastName')} />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.lastName?.message}</div>}
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
          <input type='text' placeholder='Tên tài khoản' className='qt-form-control' {...register('username')} />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.username?.message}</div>}
        {<div className='ms-3 mt-1 text-danger'>{errors.phone?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input type='password' placeholder='Mật khẩu' className='qt-form-control' {...register('password')} />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.password?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input
            type='password'
            placeholder='Nhập lại mật khẩu'
            className='qt-form-control'
            {...register('confirmPassword')}
          />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.confirmPassword?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input type='tel' placeholder='Số điện thoại' className='qt-form-control' {...register('phone')} />
        </div>
        <div className='qt-input-group mt-3'>
          <input type='email' placeholder='Email' className='qt-form-control' {...register('email')} />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.address?.message}</div>}
        <div className='qt-input-group mt-3'>
          <input type='text' placeholder='Địa chỉ' className='qt-form-control' {...register('address')} />
        </div>
        {<div className='ms-3 mt-1 text-danger'>{errors.address?.message}</div>}
      </div>
      <div className='d-flex justify-content-center mt-3 mb-3'>
        <Button variant='primary' style={{ width: '100%', height: 40 }} type='submit'>
          Đăng ký
        </Button>
      </div>
    </form>
  )
}

export default RegisterForm
