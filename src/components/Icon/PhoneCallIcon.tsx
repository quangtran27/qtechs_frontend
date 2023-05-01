import { IconProps } from '.'

export function PhoneCallIcon({
  className,
  width = 24,
  height = 24,
  fill = 'currentColor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      viewBox='0 0 1000 1000'
      enableBackground='new 0 0 1000 1000'
      xmlSpace='preserve'
    >
      <g>
        <path d='M906.6,623.6L747.9,542c-38.9-20-89.1-13.2-121.3,16.4l-18.6,17c-18,16.5-46,20.4-67.8,9.1c-54.1-27.9-97.4-71.2-125.3-125.2c-11.4-22.2-7.8-49.4,9.1-67.7l17-18.5c18.2-19.8,28.2-45.5,28.2-72.4c0-16.9-4.1-33.8-11.9-48.9L375.8,93.2C349.4,41.9,297.2,10,239.6,10c-33.9,0-66,10.8-92.8,31.3L98.5,78.2c-75.8,57.8-107,157.5-77.6,248.2C118.8,628,355.8,871.3,655.1,977.1c24.2,8.6,49.4,12.9,75.1,12.9c59.9,0,118.4-24.4,160.4-66.9l55.3-55.9c28.5-28.9,44.3-67,44.3-107.5C990,702.1,958.1,650,906.6,623.6z M880.3,802.7l-55.2,55.9c-35.5,35.9-91.6,48.9-139.4,31.9C413.2,794.2,197.4,572.7,108.3,298c-17.4-53.7,1-112.7,45.9-146.9l48.3-36.8c10.7-8.1,23.5-12.5,37-12.5c23,0,43.9,12.8,54.5,33.4l81.6,158.6c1.1,2.1,1.7,4.5,1.7,6.9c0,4.9-2.2,8.3-4.1,10.3l-17,18.5c-42.8,46.5-52.1,115.6-23.1,171.9c36.6,71.1,93.7,128.1,164.9,164.8c55.3,28.5,126.3,18.9,172-23.1l18.6-17c3-2.8,10.8-5.6,17.2-2.4l158.7,81.6c20.6,10.6,33.4,31.5,33.4,54.5C898.1,775.9,891.8,791.1,880.3,802.7z' />
      </g>
    </svg>
  )
}