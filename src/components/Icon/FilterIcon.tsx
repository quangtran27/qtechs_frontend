import { IconProps } from '.'

export function FilterIcon({
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
      viewBox='0 0 32 32'
    >
      <path d='M2 7h.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2H9.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2zm4-3a2 2 0 1 1-2 2 2 2 0 0 1 2-2zm24 11h-.142a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h20.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-4 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2zm4 7H19.858a3.981 3.981 0 0 0-7.716 0H2a1 1 0 0 0 0 2h10.142a3.981 3.981 0 0 0 7.716 0H30a1 1 0 0 0 0-2zm-14 3a2 2 0 1 1 2-2 2 2 0 0 1-2 2z' />
    </svg>
  )
}
