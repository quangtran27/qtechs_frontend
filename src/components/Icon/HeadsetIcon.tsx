import { IconProps } from '.'

export function HeadsetIcon({
  className,
  width = 20,
  height = 20,
  fill = 'currentColor',
}: IconProps) {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      fill={fill}
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 256 256'
    >
      <rect width='256' height='256' fill='none' />
      <path
        d='M225.5,128h-32a16,16,0,0,0-16,16v40a16,16,0,0,0,16,16h16a16,16,0,0,0,16-16V128a96,96,0,0,0-96.8-96A96,96,0,0,0,32,128v56a16,16,0,0,0,16,16H64a16,16,0,0,0,16-16V144a16,16,0,0,0-16-16H32'
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
      />
      <path
        d='M225.5,184v24a32,32,0,0,1-32,32H136'
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='24'
      />
    </svg>
  )
}
