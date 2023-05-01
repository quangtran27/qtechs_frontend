import classNames from 'classnames/bind'
import styles from './Search.module.scss'

import { SearchIcon } from '~/components/Icon'
import Button from '~/components/Button'
import ProductItem from '~/components/ProductItem'
import { CSSProperties } from 'react'

const cx = classNames.bind(styles)

type SearchProps = {
  border?: boolean
  searchResult?: boolean
  style?: CSSProperties
  title?: string
}

function Search({ title = 'Type to search', style, searchResult = false, border = false }: SearchProps) {
  return (
    <div
      className={cx('wrapper', {
        border: border,
      })}
      style={style}
    >
      <div className={cx('search')}>
        <button className='d-flex me-2'>
          <SearchIcon />
        </button>
        <input placeholder={title} spellCheck='false' type='search' />
        <Button className={`ms-2 text-ui fw-bold ${cx('btn')}`} variant='primary' rounded height='32'>
          Tìm kiếm
        </Button>
      </div>
      {searchResult && (
        <div className={cx('search-result-wrapper')}>
          <div className='extra-bold text-label mt-8 mb-12'>SẢN PHẨM (0)</div>
          <div className={cx('search-results')}>
            <ProductItem to='/product' title='Balo Laptop Lenovo 15.6"' price='199.000' highlight={[0]} />
            <ProductItem to='/product' title='Balo Laptop Lenovo 15.6"' price='1.999.000' highlight={[0]} />
            <ProductItem to='/product' title='Balo Acer Predator SUV' price='1.700.000' highlight={[0]} />
            <ProductItem to='/product' title='Balo Lenovo Gaming Packback' price='900.000' highlight={[0, 26]} />
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
