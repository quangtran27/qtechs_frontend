import classNames from 'classnames/bind'

import {
  CircleInfoIcon,
  CircleThreePlusIcon,
  LaptopMonitorIcon,
  MemoryIcon,
  MicrochipIcon,
  SDCardIcon,
} from '~/components/Icon'

import styles from './LaptopCharacteristics.module.scss'
import { LaptopConfig } from '~/models/laptop'
const cx = classNames.bind(styles)

type LaptopCharacteristicsProps = {
  config: LaptopConfig
}

export default function LaptopCharacteristics({ config }: LaptopCharacteristicsProps) {
  return (
    <section className={cx('wrapper')}>
      <div className='d-flex align-items-center'>
        <CircleThreePlusIcon />
        <h3 className='d-block ms-2'>Cấu hình & đặc điểm</h3>
      </div>
      <div className='mt-5'>
        <div className='d-flex flex-column'>
          <div className='d-flex pb-1'>
            <div className='d-flex w-50'>
              <MicrochipIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>Vi xử lý (CPU)</span>
                  <CircleInfoIcon className='fill-blue' />
                </div>
                <div>{config.cpu}</div>
              </div>
            </div>
            <div className='d-flex w-50 ms-3'>
              <MemoryIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>RAM</span>
                  <CircleInfoIcon className='text-blue' />
                </div>
                <div>{config.ram}GB</div>
              </div>
            </div>
          </div>
          <div className='d-flex pt-3 pb-1 mt-2 border-top'>
            <div className='d-flex w-50'>
              <LaptopMonitorIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>Màn hình</span>
                  <CircleInfoIcon className='fill-blue' />
                </div>
                <div>{config.screen}</div>
              </div>
            </div>
            <div className='d-flex w-50 ms-3'>
              <SDCardIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>Card đồ họa (GPU)</span>
                  <CircleInfoIcon className='text-blue' />
                </div>
                <div>{config.gpu}</div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex mt-2 pt-2'></div>
      </div>
    </section>
  )
}
