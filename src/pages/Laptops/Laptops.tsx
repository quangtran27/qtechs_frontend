import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import laptopApi from '~/api/laptopApi'
import Button from '~/components/Button/Button'
import ValueFilter from '~/components/Filter/ValueFilter'
import { FilterIcon } from '~/components/Icon'
import Laptop from '~/components/Laptop/Laptop'
import { FilterChoice } from '~/models/filter'
import { Laptop as LaptopModel } from '~/models/laptop'
import { PAGE_SIZE, laptopCpuChoices, laptopPriceChoices, laptopRamChoices } from '~/utils/constant'
import styles from './Laptops.module.scss'
import RadioChoice from '~/components/RadioChoice/RadioChoice'
const cx = classNames.bind(styles)

export default function Laptops() {
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [laptops, setLaptops] = useState<LaptopModel[]>([])
  const [brandChoices, setBrandChoices] = useState<FilterChoice[]>([])

  useEffect(() => {
    const fetchBrands = async () => {
      const brands = (await laptopApi.getAllBrands()).data
      const choices: FilterChoice[] = brands.map((brand) => {
        return { display: brand.name, value: brand.id.toString() }
      })
      setBrandChoices(choices)
    }
    fetchBrands()
  }, [])

  useEffect(() => {
    const fetchLaptops = async () => {
      try {
        const response = (await laptopApi.getAll({ page: currentPage, pageSize: PAGE_SIZE })).data

        setLaptops((prev) => [...prev, ...response.data])
        setTotal(response.paging.total)
      } catch (error) {
        console.log('Error fetching laptops')
      }
    }

    fetchLaptops()
  }, [currentPage])

  const handleExpand = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <div className='pb-5 bg-light-gray'>
      <div className={cx('container')}>
        <section className='d-flex flex-column'>
          <section className={cx('content-wrapper')}>
            <div className={cx('filter-wrapper')}>
              <div className={cx('filter-container')}>
                <div className='mt-0 d-flex ai-center'>
                  <FilterIcon />
                  <span className='ms-2 bold'>Bộ lọc</span>
                </div>
                <div className={cx('filter-main')}>
                  <ValueFilter id='price' name='Khoảng giá' choices={laptopPriceChoices} />
                  <ValueFilter id='brand' name='Thương hiệu' choices={brandChoices} />
                  <ValueFilter id='cpu' name='CPU' choices={laptopCpuChoices}></ValueFilter>
                  <ValueFilter id='ram' name='RAM' choices={laptopRamChoices}></ValueFilter>
                </div>
              </div>
            </div>
            <div className='flex-1 pb-4'>
              <div className='d-flex mb-3'>
                <span className='me-4 fw-bold'>Sắp xếp theo:</span>
                <div className='d-flex me-4'>
                  <RadioChoice defaultChecked id='sortByDefault' name='sortBy' />
                  <label htmlFor='sortByDefault'>Nổi bật</label>
                </div>
                <div className='d-flex me-4'>
                  <RadioChoice id='sortByPriceAsc' name='sortBy' />
                  <label htmlFor='sortByPriceAsc'>Giá thấp đến cao</label>
                </div>
                <div className='d-flex me-4'>
                  <RadioChoice id='sortByPriceDesc' name='sortBy' />
                  <label htmlFor='sortByPriceDesc'>Giá cao đến thấp</label>
                </div>
              </div>
              <div className='grid'>
                {laptops &&
                  laptops.map((laptop) => (
                    <div key={laptop.id} className='g-col-4'>
                      <Laptop key={laptop.id} laptop={laptop} />
                    </div>
                  ))}
              </div>
              {laptops.length < total && (
                <div className='d-flex justify-content-center mt-4'>
                  <Button
                    onClick={() => {
                      handleExpand()
                    }}
                    variant='gray'
                    size='large'
                    width={200}
                  >
                    Xem thêm
                  </Button>
                </div>
              )}
            </div>
          </section>
        </section>
      </div>
    </div>
  )
}
