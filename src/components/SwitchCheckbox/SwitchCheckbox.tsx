import classNames from 'classnames/bind'
import { CSSProperties } from 'react'
import styles from './SwitchCheckbox.module.scss'

declare module 'react' {
    interface CSSProperties {
        [key: `--${string}`]: string | number
    }
}

const cx = classNames.bind(styles)

type SwitchCheckboxProps = {
    activeFill?: string
    dotFill?: string
    fill?: string
    height?: string
    inputId?: string
    value?: string
    width?: string
}

function SwitchCheckbox({
    activeFill = '#0065FE',
    dotFill = '#fff',
    fill = '#ccc',
    height = '22px',
    inputId = 'switch',
    value,
    width = '38px',
}: SwitchCheckboxProps) {
    const style: CSSProperties = {
        '--width': width,
        '--height': height,
        '--fill': fill,
        '--activeFill': activeFill,
        '--dotFill': dotFill,
    }

    return (
        <div className={cx('wrapper')} style={style}>
            <input type='checkbox' id={inputId} value={value} />
            <label htmlFor={inputId}></label>
        </div>
    )
}

export default SwitchCheckbox
