import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import productApi from '~/api/productApi'
import Button from '~/components/Button/Button'
import BooleanFilter from '~/components/Filter/BooleanFilter'
import ValueFilter from '~/components/Filter/ValueFilter'
import { FilterIcon } from '~/components/Icon'
import Product from '~/components/Product/Product'
import RadioChoice from '~/components/RadioChoice/RadioChoice'
import { FilterChoice } from '~/models/filter'
import { Product as ProductModel } from '~/models/product'
import { PAGE_SIZE, laptopCpuChoices, laptopPriceChoices, laptopRamChoices } from '~/utils/constant'
import styles from './Products.module.scss'
import Error from '~/components/Error'
const cx = classNames.bind(styles)

export default function Products() {
  const navigate = useNavigate()
  const { categoryId } = useParams()
  const [isErrorCategory, setIsErrorCategory] = useState(false)
  const [brandChoices, setBrandChoices] = useState<FilterChoice[]>([])
  const [currentPage, setCurrentPage] = useState(1)
  const [total, setTotal] = useState(0)
  const [products, setProducts] = useState<ProductModel[]>([])

  useEffect(() => {
    ;(async () => {
      try {
        if (categoryId !== undefined) {
          await productApi.getCategory(categoryId)
        } else {
          throw ReferenceError
        }
      } catch (e) {
        setIsErrorCategory(true)
      }
    })()
    ;(async () => {
      const brands = (await productApi.getBrands()).data
      setBrandChoices([
        ...brands.map((brand) => {
          return { display: brand.name, value: brand.id.toString() }
        }),
      ])
    })()
  }, [categoryId, navigate])

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = (
          await productApi.getAll({
            page: 1,
            pageSize: PAGE_SIZE,
            categoryId: categoryId?.toString() || '',
          })
        ).data
        setProducts(response.data)
        setTotal(response.paging.total)
        setCurrentPage(1)
      } catch (error) {}
    }
    fetchProducts()
  }, [categoryId])

  useEffect(() => {
    if (currentPage > 1) {
      const fetchMoreProducts = async () => {
        const response = (
          await productApi.getAll({
            page: currentPage,
            pageSize: PAGE_SIZE,
            categoryId: categoryId?.toString() || '',
          })
        ).data
        setProducts((prev) => [...prev, ...response.data])
      }
      fetchMoreProducts()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage])

  const handleExpand = () => {
    setCurrentPage((prev) => prev + 1)
  }

  return (
    <>
      {isErrorCategory && <Error />}
      {!isErrorCategory && (
        <div className='pb-5 bg-light'>
          <div className={cx('container')}>
            <section className='d-flex flex-column'>
              <section className={cx('content-wrapper')}>
                <div className={cx('filter-wrapper')}>
                  <div className={cx('filter-container')}>
                    <div className='mt-0 d-flex ai-center'>
                      <FilterIcon />
                      <span className='ms-2 bold'>Bộ lọc</span>
                    </div>
                    {/* Sẽ get filters của mỗi loại sản phẩm */}
                    <div className={cx('filter-main')}>
                      <ValueFilter id='price' name='Khoảng giá' choices={laptopPriceChoices} />
                      <BooleanFilter id='promotion' name='Chỉ hiển thị ưu đãi / Khuyến mại' />
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
                    {products &&
                      products.map((product) => (
                        <div key={product.id} className='g-col-4'>
                          <Product {...product} />
                        </div>
                      ))}
                  </div>
                  {products.length === 0 && (
                    <div className='w-100 h-100 d-flex justify-content-center align-items-center fs-5 fw-bold'>
                      Không có sản phẩm
                    </div>
                  )}
                  {products.length < total && (
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
      )}
    </>
  )
}
