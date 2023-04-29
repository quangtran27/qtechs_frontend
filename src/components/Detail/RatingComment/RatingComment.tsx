import classNames from 'classnames/bind'
import { StarIcon } from '~/components/Icon'
import { CommentDots } from '~/components/Icon/CommentDots'
import Button from '~/components/Button'

import styles from './RatingComment.module.scss'

const cx = classNames.bind(styles)

export default function RatingComment() {
  return (
    <section className='p-4 mt-4 bg-light-gray rounded-3 border-top border-gray-30'>
      <div className='d-flex align-items-center'>
        <CommentDots className='me-2' />
        <h3>Đánh giá, nhận xét</h3>
      </div>
      <div className='d-flex flex-column align-items-center mt-3'>
        <div className='d-flex flex-column align-items-center'>
          <span>Chưa có đánh giá và nhận xét</span>
          <span>Nên mua hay không? Hãy giúp anh em bạn nhé</span>
        </div>
        <Button
          large
          className='bg-light-blue hover-light-blue text-white rounded-3 mt-3 fw-semibold w-50'
        >
          <div className='d-flex'>
            <StarIcon />
            <span className='ms-2'>Đánh giá</span>
          </div>
        </Button>
      </div>
    </section>
  )
}
