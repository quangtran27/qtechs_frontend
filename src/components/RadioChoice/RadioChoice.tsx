import classNames from 'classnames/bind'
import styles from './RadioChoice.module.scss'

const cx = classNames.bind(styles)

type RadioChoiceProps = {
    defaultChecked?: boolean
    id?: string
    inputClass?: string
    labelClass?: string
    name?: string
    radioMarkClass?: string
    title?: string
    value?: string
    wrapperClass?: string
}

function RadioChoice({
    defaultChecked,
    id,
    inputClass,
    labelClass,
    name = 'choice',
    radioMarkClass,
    title,
    value,
    wrapperClass,
}: RadioChoiceProps) {
    return (
        <label className={cx('wrapper') + ' ' + wrapperClass} htmlFor={id}>
            <input
                className={inputClass}
                defaultChecked={defaultChecked}
                id={id}
                name={name}
                type='radio'
                value={value}
            />
            <div className={radioMarkClass}>
                <div></div>
            </div>
            <span className={labelClass}>{title}</span>
        </label>
    )
}

export default RadioChoice
