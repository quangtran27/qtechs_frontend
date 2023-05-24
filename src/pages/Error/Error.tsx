import { Link } from 'react-router-dom'
import images from '~/assets/images'
import Button from '~/components/Button'

type ErrorProps = {
  title?: string
  action?: string
  to?: string
}

export default function Error({
  title = 'Trang bạn yêu cầu không tồn tại',
  action = 'Về trang chủ',
  to = '/',
}: ErrorProps) {
  return (
    <div className='d-flex justify-content-center align-items-center flex-column'>
      <img src={images.page404} style={{ width: 300 }} alt='' />
      <div className='mb-3 fw-semibold fs-5'>{title}</div>
      <Link to={to} className='mb-5'>
        <Button variant='primary' size='large'>
          {action}
        </Button>
      </Link>
    </div>
  )
}
