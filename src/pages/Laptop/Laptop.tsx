import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import { Brand } from '~/models/product'
import Filters from '~/components/Filters'
import OutstandingBrands from '~/components/OutstandingBrands'
import Products from '~/components/Products'
import styles from './Laptop.module.scss'

const cx = classNames.bind(styles)

function Laptop() {
  // Fetch API get Banners and Brands list
  const [brands, setBrands] = useState<Brand[]>([])
  useEffect(() => {
    const getBrands = async () => {
      // let response: IAllBrandsResponse = JSON.parse(JSON.stringify(await brandApi.getAll()))
      // setBrands(response.data ?? [])
    }
    getBrands()
  }, [])

  return (
    <>
      <div className='pt-4 pb-5 bg-white'>
        <div className={cx('container')}>
          <OutstandingBrands brands={brands} heading='Thương hiệu nổi bật' />
        </div>
      </div>
      <div className='pb-5 bg-light-gray'>
        <div className={cx('container')}>
          <section className='d-flex flex-column'>
            <div className='f-flex flex-start'>
              <h1>Tất cả Laptop</h1>
            </div>
            <section className={cx('content-wrapper')}>
              <Filters type='laptop' />
              <Products type='laptop' />
            </section>
          </section>
        </div>
      </div>
    </>
  )
}

export default Laptop
