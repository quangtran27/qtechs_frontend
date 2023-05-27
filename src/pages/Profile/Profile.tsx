import { yupResolver } from '@hookform/resolvers/yup'
import { ChangeEvent, useEffect, useState } from 'react'
import { Controller, SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { number, object, string } from 'yup'
import userApi from '~/api/userApi'
import Button from '~/components/Button'
import Card from '~/components/Card/Card'
import { User, emptyUser } from '~/models/user'

const genderOptions = [
  { value: 1, label: 'Nam' },
  { value: 2, label: 'Nữ' },
  { value: 3, label: 'Khác' },
]

const schema = object({
  name: string().required('Vui lòng tên'),
  phone: string().required('Vui lòng nhập số điện thoại'),
  email: string()
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Email không hợp lệ')
    .required('Vui lòng nhập email'),
  gender: number().required().oneOf([1, 2, 3]).required(),
  address: string().required('Vui lòng nhập địa chỉ'),
})

export default function Profile() {
  const [user, setUser] = useState(emptyUser)
  const [isUpdating, setIsUpdating] = useState(false)
  const [image, setImage] = useState<File | null>(null)
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(null)

  const {
    control,
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: { ...emptyUser },
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const handleChangeImage = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file) {
      setImage(file)
      const reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onloadend = () => {
        setPreviewImage(reader.result)
      }
    }
  }

  const handleUpdateInfo: SubmitHandler<User> = async (_user) => {
    if (
      user.name !== _user.name ||
      user.phone !== _user.phone ||
      user.gender !== _user.gender ||
      user.email !== _user.email ||
      user.address !== _user.address ||
      image
    ) {
      if (!isUpdating) {
        try {
          setIsUpdating(true)
          const response = await userApi.updateInfo(_user, image)
          setUser(response.data)
          if (response.data.image) {
            setPreviewImage(process.env.REACT_APP_API_URL + response.data.image)
          }
          toast.success('Cập nhật thành công!', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        } catch {
          toast.error('Đã xảy ra lỗi, vui lòng thử lại', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        } finally {
          setIsUpdating(false)
        }
      }
    }
  }

  useEffect(() => {
    ;(async () => {
      try {
        const userId = Number(localStorage.getItem('userId'))
        const _user = (await userApi.getInfo(userId)).data
        setUser(_user)
        if (_user.image) {
          setPreviewImage(process.env.REACT_APP_API_URL + _user.image)
        }
      } catch {}
    })()
  }, [])

  useEffect(() => {
    if (JSON.stringify(user) !== JSON.stringify(emptyUser)) {
      reset({ ...user })
    }
  }, [reset, user])

  return (
    <Card>
      <h2 className='p-2'>Hồ sơ của tôi</h2>
      <div className='px-3'>
        <form onSubmit={handleSubmit(handleUpdateInfo)}>
          <div className='row mt-3'>
            <div className='col-lg-12'>
              <div className='row align-items-start'>
                <label className='fw-semibold col-lg-3 text-end' htmlFor='phone'>
                  Ảnh đại diện:
                </label>
                <div className='col-lg-9 d-flex flex-column'>
                  <input onChange={handleChangeImage} type='file' name='' id='' />
                  <div className='w-100 d-flex mt-3 justify-content-center'>
                    {previewImage && (
                      <img
                        src={previewImage.toString()}
                        style={{ width: 120, height: 120, borderRadius: 999 }}
                        alt='Preview'
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-1'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-3 text-end' htmlFor='phone'>
                  Tên đăng nhập:
                </label>
                <div className='col-lg-9'>
                  <span className='text-gray ms-3'>{user.username}</span>
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-3 text-end' htmlFor='name'>
                  Họ tên:
                </label>
                <div className='col-lg-9'>
                  <div className='qt-input-group mt-2'>
                    <input id='name' type='text' className='qt-form-control' {...register('name')} />
                  </div>
                  {<div className='ms-3 mt-1 text-danger'>{errors.name?.message}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-3 text-end' htmlFor='phone'>
                  Số điện thoại:
                </label>
                <div className='col-lg-9'>
                  <div className='qt-input-group mt-2'>
                    <input id='phone' type='text' className='qt-form-control' {...register('phone')} />
                  </div>
                  {<div className='ms-3 mt-1 text-danger'>{errors.phone?.message}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-3 text-end'>Giới tính:</label>
                <div className='col-lg-9'>
                  <Controller
                    name='gender'
                    control={control}
                    render={({ field }) => (
                      <div className='d-flex mt-2 ms-3'>
                        {genderOptions.map((option) => (
                          <div key={option.value} className='d-flex me-3'>
                            <input
                              type='radio'
                              // eslint-disable-next-line eqeqeq
                              checked={field.value == option.value}
                              id={`gender-${option.value}`}
                              {...field}
                              value={option.value}
                            />
                            <label className='ms-2' htmlFor={`gender-${option.value}`}>
                              {option.label}
                            </label>
                          </div>
                        ))}
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-3 text-end' htmlFor='email'>
                  Email:
                </label>
                <div className='col-lg-9'>
                  <div className='qt-input-group mt-2'>
                    <input id='email' type='text' className='qt-form-control' {...register('email')} />
                  </div>
                  {<div className='ms-3 mt-1 text-danger'>{errors.email?.message}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-2'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-3 text-end' htmlFor='address'>
                  Địa chỉ:
                </label>
                <div className='col-lg-9'>
                  <div className='qt-input-group mt-2'>
                    <input id='address' type='text' className='qt-form-control' {...register('address')} />
                  </div>
                  {<div className='ms-3 mt-1 text-danger'>{errors.address?.message}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end mt-3 mb-3'>
            <Button type='submit' onClick={handleSubmit(handleUpdateInfo)} variant='primary' style={{ height: 40 }}>
              Cập nhật
            </Button>
          </div>
        </form>
      </div>
    </Card>
  )
}
