import { IconProps } from '.'

type FacebookIconProps = IconProps & { mode?: 'regular' | 'solid' }

export function FacebookIcon({
  className,
  width = 24,
  height = 24,
  fill = 'currentColor',
  mode = 'regular',
}: FacebookIconProps) {
  if (mode === 'regular') {
    return (
      <svg
        className={className}
        width={width}
        height={height}
        fill={fill}
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
        viewBox='0 0 24 24'
      >
        <g>
          <path fill='none' d='M0 0h24v24H0z' />
          <path d='M13 19.938A8.001 8.001 0 0 0 12 4a8 8 0 0 0-1 15.938V14H9v-2h2v-1.654c0-1.337.14-1.822.4-2.311A2.726 2.726 0 0 1 12.536 6.9c.382-.205.857-.328 1.687-.381.329-.021.755.005 1.278.08v1.9H15c-.917 0-1.296.043-1.522.164a.727.727 0 0 0-.314.314c-.12.226-.164.45-.164 1.368V12h2.5l-.5 2h-2v5.938zM12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z' />
        </g>
      </svg>
    )
  } else {
    fill = 'blue'
    return (
      <svg
        className={className}
        width={width}
        height={height}
        fill={fill}
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 512 512'
      >
        <path d='M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z' />
      </svg>
    )
  }
}
