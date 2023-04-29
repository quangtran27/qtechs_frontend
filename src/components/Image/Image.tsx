import { forwardRef, useState } from 'react'
import classNames from 'classnames/bind'

import images from '~/assets/images'
import styles from './Image.module.scss'

const cx = classNames.bind(styles)

type ImageProps = {
  src?: string
  alt?: string
  className?: string
  width?: string
  height?: string
  fallback?: () => string
}

const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt = 'image',
      className,
      width = '80',
      height = '80',
      fallback: customFallBack = images.defaultImage,
    },
    ref,
  ) => {
    const [fallback, setFallback] = useState()

    const handleError = () => {
      setFallback(customFallBack)
    }

    return (
      <img
        alt={alt}
        className={`wrapper ${cx(className)}`}
        height={height}
        src={fallback || src}
        ref={ref}
        width={width}
        onError={handleError}
      />
    )
  },
)

export default Image
