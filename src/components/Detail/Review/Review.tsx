import classNames from 'classnames/bind'
import { useState } from 'react'
import { Collapse } from 'react-bootstrap'
import Button from '~/components/Button'
import HTMLContent from '~/components/HTMLContent'
import { AngleDownIcon, AngleUpIcon, ClipboardIcon } from '~/components/Icon'
import styles from './Review.module.scss'

const cx = classNames.bind(styles)

type ReviewProps = {
  title: string
  shortDescription: string
  body: string
}

export default function Review({ title, shortDescription, body }: ReviewProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className='mt-4'>
      <div className='d-flex align-items-center'>
        <ClipboardIcon className='me-2' />
        <h3>Mô tả sản phẩm</h3>
      </div>
      <p className='mt-3 mb-4 px-3 border-start border-dark'>{shortDescription}</p>
      <div className={`mt-3 ${cx('body')}`}>
        <Collapse in={isExpanded}>
          <div>
            <HTMLContent html={body} />
          </div>
        </Collapse>
        <div
          onClick={() => setIsExpanded(!isExpanded)}
          aria-expanded={isExpanded}
          className='position-relative'
        >
          <div className={cx('mask')}></div>
          <Button className='w-100 rounded-3 text-blue fw-bold bg-light-gray' large>
            <>
              {isExpanded ? (
                <>
                  <AngleUpIcon className='me-1' />
                  Thu gọn
                </>
              ) : (
                <>
                  <AngleDownIcon className='me-1' />
                  Đọc thêm
                </>
              )}
            </>
          </Button>
        </div>
      </div>
    </section>
  )
}
