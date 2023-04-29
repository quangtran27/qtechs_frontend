import { IconProps } from '.'

export function CircleThreePlusIcon({
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
      viewBox='0 0 256 256'
    >
      <path d='M74,28a46,46,0,1,0,46,46A46.05239,46.05239,0,0,0,74,28Zm0,68A22,22,0,1,1,96,74,22.02489,22.02489,0,0,1,74,96Zm108,24a46,46,0,1,0-46-46A46.05239,46.05239,0,0,0,182,120Zm0-68a22,22,0,1,1-22,22A22.02489,22.02489,0,0,1,182,52ZM74,136a46,46,0,1,0,46,46A46.05239,46.05239,0,0,0,74,136Zm0,68a22,22,0,1,1,22-22A22.02489,22.02489,0,0,1,74,204Zm146-22a12.00028,12.00028,0,0,1-12,12H194v14a12,12,0,0,1-24,0V194H156a12,12,0,0,1,0-24h14V156a12,12,0,0,1,24,0v14h14A12.00028,12.00028,0,0,1,220,182Z' />
    </svg>
  )
}
