import classNames from 'classnames/bind'
import styles from './ColorPicker.module.scss'

type ColorPickerProps = {
  large?: boolean
  small?: boolean
  colors?: string[]
  className?: string
}
const cx = classNames.bind(styles)

function ColorPicker({
  large = false,
  small = false,
  colors = [],
  className,
}: ColorPickerProps) {
  let width = '24px',
    height = '24px',
    borderRadius = '6px'
  if (large) {
    width = height = '32px'
    borderRadius = '8px'
  } else if (small) {
    width = height = '12px'
    borderRadius = '3px'
  }
  return (
    <div
      className={`${cx('wrapper', {
        large: large,
        small: small,
      })} ${className}`}
    >
      {colors.map((color, index) => (
        <span
          key={index}
          style={{
            '--background-color': color,
            '--border-radius': borderRadius,
            '--height': height,
            '--width': width,
          }}
        ></span>
      ))}
    </div>
  )
}

export default ColorPicker
