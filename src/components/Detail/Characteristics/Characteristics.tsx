import { CircleInfoIcon, CircleThreePlusIcon } from '~/components/Icon'
import { OptionSpec } from '~/models/product'

type LaptopCharacteristicsProps = {
  specs: OptionSpec[]
}

export default function Characteristics({ specs }: LaptopCharacteristicsProps) {
  return (
    <section>
      <div className='d-flex align-items-center'>
        <CircleThreePlusIcon />
        <h3 className='d-block ms-2'>Cấu hình & đặc điểm</h3>
      </div>
      <div className='mt-4'>
        <div className='grid'>
          {specs.map((spec) => (
            <div className='g-col-6 mb-1' key={spec.code}>
              <div className='d-flex flex-column ms-3'>
                <div className='d-flex align-items-center mb-2'>
                  <span className='fs-6 fw-bold me-2'>{spec.name}</span>
                  <CircleInfoIcon className='text-blue' />
                </div>
                <div className='ms-2'>{spec.value}</div>
              </div>
            </div>
          ))}
        </div>
        <div className='d-flex mt-2 pt-2'></div>
      </div>
    </section>
  )
}
