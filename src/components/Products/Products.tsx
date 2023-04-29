import Search from '../Search'

type ProductsProps = {
  type: string
}

function Products({ type = 'laptop' }: ProductsProps) {
  return (
    <div className='flex-1 pb-4 ms-3'>
      <Search
        border
        style={{
          width: 412,
        }}
        title='Tìm kiếm trong Laptop'
      />
      {/* <div className='mt-3'>
        <div className='grid'>
          {response &&
            response?.data.products.map((product) => (
              <div key={product.id} className='g-col-4'>
                <Product
                  id={product.id}
                  name={product.name}
                  onSale={product.onSale}
                  price={product.price}
                  salePrice={product.salePrice}
                  versions={product.versions}
                  quantity={product.quantity}
                  colors={product.colors}
                  images={product.images}
                />
              </div>
            ))}
        </div>
      </div> */}
    </div>
  )
}

export default Products
