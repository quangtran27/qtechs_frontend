import { yupResolver } from '@hookform/resolvers/yup'
import { AxiosError } from 'axios'
import { useState } from 'react'
import { SubmitHandler, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { object, ref, string } from 'yup'
import userApi from '~/api/userApi'
import Button from '~/components/Button'
import Card from '~/components/Card'
import { EyeIcon, EyeSlashIcon } from '~/components/Icon'
import { ErrorResponse } from '~/models/common'

interface ChangePasswordFormData {
  oldPassword: string
  newPassword: string
  confirmPassword: string
}

const emptyFormData: ChangePasswordFormData = {
  oldPassword: '',
  newPassword: '',
  confirmPassword: '',
}

const schema = object({
  oldPassword: string().required('Vui lòng nhập mật khẩu cũ'),
  newPassword: string()
    .notOneOf([ref('oldPassword')], 'Mật khẩu mới không được trùng với mật khẩu cũ')
    .required('Vui lòng nhập mật khẩu mới'),
  confirmPassword: string()
    .oneOf([ref('newPassword')], 'Mật khẩu xác nhận phải trùng với mật khẩu mới')
    .required('Vui lòng xác nhận mật khẩu'),
})

export default function ChangePassword() {
  const [changePassword, setChangePassword] = useState(false)
  const [showOldPassword, setShowOldPassword] = useState(false)
  const [showNewPassword, setShowNewPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const {
    formState: { errors },
    handleSubmit,
    register,
    reset,
  } = useForm({
    defaultValues: emptyFormData,
    mode: 'onSubmit',
    resolver: yupResolver(schema),
  })

  const handleChangePassword: SubmitHandler<ChangePasswordFormData> = async (_formData) => {
    if (!changePassword) {
      ;(async () => {
        try {
          setChangePassword(true)
          const userId = Number(localStorage.getItem('userId'))
          await userApi.changePassword(userId, _formData.oldPassword, _formData.newPassword)
          toast.success('Cập nhật thành công!', {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
          reset(emptyFormData)
        } catch (_e) {
          console.log('into here')
          const axiosError = _e as AxiosError
          const e = axiosError.response?.data as ErrorResponse
          toast.error(e.message, {
            position: 'top-right',
            autoClose: 3000,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          })
        } finally {
          setChangePassword(false)
        }
      })()
    }
  }

  return (
    <Card>
      <h2 className='p-2'>Thay đổi mật khẩu</h2>
      <div className='px-3'>
        <form onSubmit={handleSubmit(handleChangePassword)}>
          <div className='row mt-2'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-4 text-end' htmlFor='oldPassword'>
                  Nhập mật khẩu hiện tại:
                </label>
                <div className='col-lg-8'>
                  <div className='qt-input-group align-items-center mt-2'>
                    <input
                      id='oldPassword'
                      type={showOldPassword ? 'text' : 'password'}
                      className='qt-form-control flex-1'
                      {...register('oldPassword')}
                    />
                    <span
                      role='button'
                      onClick={() => {
                        setShowOldPassword(!showOldPassword)
                      }}
                    >
                      {showOldPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-4' />
                <div className='col-lg-8'>
                  {<div className='ms-3 mt-1 text-danger'>{errors.oldPassword?.message}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-1'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-4 text-end d-block' htmlFor='newPassword'>
                  Nhập mật khẩu mới:
                </label>
                <div className='col-lg-8'>
                  <div className='qt-input-group align-items-center mt-2'>
                    <input
                      id='newPassword'
                      type={showNewPassword ? 'text' : 'password'}
                      className='qt-form-control flex-1'
                      {...register('newPassword')}
                    />
                    <span
                      role='button'
                      onClick={() => {
                        setShowNewPassword(!showNewPassword)
                      }}
                    >
                      {showNewPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-4' />
                <div className='col-lg-8'>
                  {<div className='ms-3 mt-1 text-danger'>{errors.newPassword?.message}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='row mt-1'>
            <div className='col-lg-12'>
              <div className='row align-items-center'>
                <label className='fw-semibold col-lg-4 text-end' htmlFor='confirmPassword'>
                  Xác nhận mật khẩu:
                </label>
                <div className='col-lg-8'>
                  <div className='qt-input-group align-items-center mt-2'>
                    <input
                      id='confirmPassword'
                      type={showConfirmPassword ? 'text' : 'password'}
                      className='qt-form-control flex-1'
                      {...register('confirmPassword')}
                    />
                    <span
                      role='button'
                      onClick={() => {
                        setShowConfirmPassword(!showConfirmPassword)
                      }}
                    >
                      {showConfirmPassword ? <EyeSlashIcon /> : <EyeIcon />}
                    </span>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-lg-4' />
                <div className='col-lg-8'>
                  {<div className='ms-3 mt-1 text-danger'>{errors.confirmPassword?.message}</div>}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex justify-content-end mt-3 mb-3'>
            <Button type='submit' onClick={handleSubmit(handleChangePassword)} variant='primary' style={{ height: 40 }}>
              Xác nhận
            </Button>
          </div>
        </form>
      </div>
    </Card>
  )
}
