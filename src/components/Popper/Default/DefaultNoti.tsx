import { BellIcon } from '~/components/Icon'
import Button from '~/components/Button'
import images from '~/assets/images'

export function DefaultNoti() {
  return (
    <section className='d-flex flex-column justify-content-between h-100'>
      <div className='d-flex flex-column align-items-center'>
        <button
          style={{
            backgroundColor: 'white',
            width: 50,
            height: 50,
          }}
        >
          <BellIcon width={24} height={24} fill='#fe3464' />
        </button>
        <span className='bold text-body mt-3'>Chưa có thông báo</span>
        <div className='mt-3 d-flex flex-column align-items-center'>
          <div className='text-ui text-center'>Hãy đăng nhập để tối đa hoá trải nghiệm trên QTechs.vn bạn nhé!</div>
          <Button variant='primary' className='mt-3' style={{ fontWeight: 900, width: 196 }}>
            Đăng nhập
          </Button>
        </div>
        <div className='d-flex justify-content-end mt-3 w-100'>
          <img src={images.employee} alt='Employee' />
        </div>
      </div>
    </section>
  )
}
