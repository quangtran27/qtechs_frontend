import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'

import {
  AngleRightIcon,
  CircleInfoIcon,
  CircleThreePlusIcon,
  CodeCompareIcon,
  LaptopMonitorIcon,
  LayerGroupIcon,
  MemoryIcon,
  MicrochipIcon,
  SDCardIcon,
} from '~/components/Icon'
import { LaptopProps } from '~/models/product'

import styles from './LaptopCharacteristics.module.scss'
const cx = classNames.bind(styles)

type LaptopCharacteristicsProps = {
  id: string
  props: LaptopProps
}

export default function LaptopCharacteristics({ id, props }: LaptopCharacteristicsProps) {
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
                <div>
                  {props.cpu.name}, {props.cpu.numOfCores} nhân, {props.cpu.numOfThreads} luồng
                </div>
              </div>
            </div>
            <div className='d-flex w-50 ms-3'>
              <MemoryIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>RAM</span>
                  <CircleInfoIcon className='text-blue' />
                </div>
                <div>
                  {props.ram.capacity}GB, {props.ram.standard}, {props.ram.speed}MHz
                </div>
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
                <div>
                  {props.screen.size + '"'}
                  {`, ${props.screen.resolution}px`}
                  {props.screen.panel && `, ${props.screen.detail}`}
                </div>
              </div>
            </div>
            <div className='d-flex w-50 ms-3'>
              <SDCardIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>Card đồ họa (GPU)</span>
                  <CircleInfoIcon className='text-blue' />
                </div>
                <div>
                  {props.gpu.internal.name}
                  {props.gpu.external.exist && `${props.gpu.external.name}`}
                </div>
              </div>
            </div>
          </div>
          <div className='d-flex pt-3 pb-1 mt-2 border-top'>
            <div className='d-flex w-50'>
              <CodeCompareIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>Cổng kết nối</span>
                  <CircleInfoIcon className='fill-blue' />
                </div>
                <div>{props.connections}</div>
              </div>
            </div>
            <div className='d-flex w-50 ms-3'>
              <LayerGroupIcon />
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='text-ui fw-bold me-2'>Trọng lượng</span>
                  <CircleInfoIcon className='text-blue' />
                </div>
                <div>{props.weight}</div>
              </div>
            </div>
          </div>
          <div className='d-flex pt-3 pb-1 mt-2 border-top'>
            <Link to={`/${id}/detail`} className='d-flex align-items-center text-blue'>
              <div className='text-ui me-2'>Xem cấu hình chi tiết</div>
              <AngleRightIcon width={14} height={14} />
            </Link>
          </div>
        </div>
        <div className='d-flex mt-2 pt-2'></div>
      </div>
    </section>
  )
}
