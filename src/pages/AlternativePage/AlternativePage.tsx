import Button from '~/components/Button'
import { Link } from 'react-router-dom'

export default function AlternativePage() {
  return (
    <div className='w-100 d-flex justify-content-center py-5'>
      <div className='w-default d-flex flex-column text-center'>
        <p className='fs-4 fw-bold'>Tính năng này đang được phát triển</p>
        <div className='d-flex justify-content-center'>
          <Link to='/'>
            <Button primary large style={{ fontSize: 17 }}>
              Về trang chủ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
