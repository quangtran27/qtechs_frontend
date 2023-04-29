import { IFilter } from '~/models/filter'

function PriceFilter({ name }: IFilter) {
  return <h3 className='bold mb-12'>{name}</h3>
}

export default PriceFilter
