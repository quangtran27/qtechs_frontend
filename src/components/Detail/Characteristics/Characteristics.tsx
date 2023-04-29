import classNames from 'classnames/bind'
import { LaptopProps } from '~/models/product'
import styles from './Characteristics.module.scss'
import LaptopCharacteristics from './LaptopCharacteristics'

const cx = classNames.bind(styles)

type CharacteristicsProps = {
  type: string
  id: string
  props: LaptopProps
}

export default function Characteristics({ type = 'laptop', id, props }: CharacteristicsProps) {
  if (type === 'laptop') {
    return <LaptopCharacteristics id={id} props={props} />
  } else {
    return <div>another</div>
  }
}
