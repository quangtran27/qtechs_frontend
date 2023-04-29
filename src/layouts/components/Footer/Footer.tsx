import classNames from 'classnames/bind'
import { Link } from 'react-router-dom'
import Button from '~/components/Button'
import {
  ArrowRightIcon,
  BoxIcon,
  CircleInfoIcon,
  FacebookIcon,
  HandWavingIcon,
  InstagramIcon,
  MapIcon,
  NotebookIcon,
  PhoneCallIcon,
  RepeatIcon,
  ShieldCheck,
  TiktokIcon,
  YoutubeIcon,
} from '~/components/Icon'
import Image from '~/components/Image'
import styles from './Footer.module.scss'
const cx = classNames.bind(styles)
export default function Footer() {
  return (
    <footer className='py-4 mt-3'>
      <div className={cx('wrapper')}>
        <div className='row'>
          <div className='d-flex bg-white shadow-sm'>
            <div className='p-4 m-2 col-lg-8'>
              <div className='border-bottom pb-4'>
                <p className='fs-3 fw-bolder'>Tự tin mua sắm cùng QTechs</p>
                <div className='d-flex mt-3'>
                  <section>
                    <div className='d-flex align-items-center'>
                      <div className='fs-5 fw-bold my-2 me-1'>Chế độ bảo hành tận tâm</div>
                      <ShieldCheck width={28} height={28} />
                    </div>
                    <p>
                      Tất cả các sản phẩm do QTechs bán ra đều được tuân thủ điều kiện bảo hành của nhà cung cấp, hãng
                      sản xuất. Nếu có vấn đề về chất lượng sản phẩm, QTechs xin cam kết sẽ hỗ trợ Quý khách tới cùng.
                    </p>
                  </section>
                  <section className='ms-4'>
                    <div className='d-flex align-items-center'>
                      <div className='fs-5 fw-bold my-2 me-1'>Hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100%</div>
                      <RepeatIcon width={28} height={28} />
                    </div>
                    <p>
                      Trong thời gian 15 ngày đầu, Quý khách sẽ được hỗ trợ đổi trả 1-1 hoặc hoàn tiền 100% nếu phát
                      sinh lỗi do nhà sản xuất.
                    </p>
                  </section>
                </div>
                <Link to='' className='d-flex w-100 justify-content-center align-items-center fw-bold fs-6 text-blue'>
                  <div className='me-1'>Chi tiết</div>
                  <ArrowRightIcon width={16} height={16} />
                </Link>
              </div>
              <section className='pt-3 pb-4 border-bottom'>
                <div className='d-flex align-items-center fw-bolder fs-5 my-3'>
                  <CircleInfoIcon width={18} height={18} className='me-2' />
                  <div>Thông tin hữu ích</div>
                </div>
                <div className='grid'>
                  <div className='g-col-6 d-flex align-items-center'>
                    <a href='tel:1900633579' className='d-block w-100'>
                      <Button className='p-4 w-100 justify-content-start rounded-4 bg-light-gray'>
                        <PhoneCallIcon width={20} className='text-blue' />
                        <div className='fw-bold fs-6 ms-2'>Hotline: 1900.63.3579</div>
                      </Button>
                    </a>
                  </div>
                  <div className='g-col-6 d-flex align-items-center'>
                    <Link to='/policies/transport' className='w-100'>
                      <Button className='p-4 w-100 justify-content-start rounded-4 bg-light-gray'>
                        <BoxIcon width={20} className='text-blue' />
                        <div className='fw-bold fs-6 ms-2'>Vận chuyển, thanh toán</div>
                      </Button>
                    </Link>
                  </div>
                  <div className='g-col-6 d-flex align-items-center'>
                    <a href='https://www.facebook.com/groups/ThinkCare' className='d-block w-100'>
                      <Button className='p-4 w-100 justify-content-start rounded-4 bg-light-gray'>
                        <FacebookIcon width={20} className='text-blue' />
                        <div className='fw-bold fs-6 ms-2'>Group trao đổi và hỗ trợ</div>
                      </Button>
                    </a>
                  </div>
                  <div className='g-col-6 d-flex align-items-center'>
                    <Link to='/guarantee' className='w-100'>
                      <Button className='p-4 w-100 justify-content-start rounded-4 bg-light-gray'>
                        <ShieldCheck width={20} className='text-blue' />
                        <div className='fw-bold fs-6 ms-2'>Tra cứu bảo hành</div>
                      </Button>
                    </Link>
                  </div>
                  <div className='g-col-6 d-flex align-items-center'>
                    <Link to='/stores' className='w-100'>
                      <Button className='p-4 w-100 justify-content-start rounded-4 bg-light-gray'>
                        <MapIcon width={20} className='text-blue' />
                        <div className='fw-bold fs-6 ms-2'>Hệ thống cửa hàng</div>
                      </Button>
                    </Link>
                  </div>
                  <div className='g-col-6 d-flex align-items-center'>
                    <Link to='/policies/services' className='w-100'>
                      <Button className='p-4 w-100 justify-content-start rounded-4 bg-light-gray'>
                        <NotebookIcon width={20} className='text-blue' />
                        <div className='fw-bold fs-6 ms-2'>Bảng giá dịch vụ</div>
                      </Button>
                    </Link>
                  </div>
                </div>
              </section>
              <section className='pt-3 bp-4'>
                <div className='d-flex align-items-center fw-bolder fs-5 my-3'>
                  <HandWavingIcon className='me-2' />
                  <div>QTechs trên Social Network</div>
                </div>
                <div className='grid'>
                  <a className='d-block fs-6 fw-semibold grid-col-3' href='https://www.facebook.com/vquggg/'>
                    <Button className='p-4' border>
                      <FacebookIcon mode='solid' />
                      <span className='ms-2'>Facebook</span>
                    </Button>
                  </a>
                  <a className='d-block fs-6 fw-semibold grid-col-3' href='https://www.youtube.com'>
                    <Button className='p-4' border>
                      <YoutubeIcon mode='solid' />
                      <span className='ms-2'>Youtube</span>
                    </Button>
                  </a>
                  <a className='d-block fs-6 fw-semibold grid-col-3' href='https://www.facebook.com/vquggg/'>
                    <Button className='p-4' border>
                      <TiktokIcon mode='solid' />
                      <span className='ms-2'>Tiktok</span>
                    </Button>
                  </a>
                  <a className='d-block fs-6 fw-semibold grid-col-3' href='https://www.facebook.com/vquggg/'>
                    <Button className='p-4' border>
                      <InstagramIcon mode='solid' />
                      <span className='ms-2'>Instagram</span>
                    </Button>
                  </a>
                </div>
              </section>
              <div className='mt-5 mx-3'>
                <div className='d-flex justify-content-between'>
                  <Link to=''>
                    <Button className='fw-bold p-3'>Về chúng tôi</Button>
                  </Link>
                  <Link to=''>
                    <Button className='fw-bold p-3'>Vì khách hàng</Button>
                  </Link>
                  <Link to=''>
                    <Button className='fw-bold p-3'>Đội ngũ</Button>
                  </Link>
                  <Link to=''>
                    <Button className='fw-bold p-3'>Tin tức</Button>
                  </Link>
                  <Link to=''>
                    <Button className='fw-bold p-3'>Khuyến mại</Button>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col-lg-4 overflow-hidden'>
              <Image src={require('~/assets/images/footer.png')} width='100%' height='100%' className='rounded-end' />
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
