import { IconProps } from '.'

export function LogoutIcon({
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
      viewBox='0 0 512 512'
      xmlSpace='preserve'
    >
      <g>
        <path
          d='M332.8,153.6v-51.2c0-42.4-34.4-76.8-76.8-76.8H76.8C34.4,25.6,0,60,0,102.4v307.2c0,42.4,34.4,76.8,76.8,76.8H256
       c42.4,0,76.8-34.4,76.8-76.8v-51.2c0-14.1-11.5-25.6-25.6-25.6s-25.6,11.5-25.6,25.6v51.2c0,14.1-11.5,25.6-25.6,25.6H76.8
       c-14.1,0-25.6-11.5-25.6-25.6V102.4c0-14.1,11.5-25.6,25.6-25.6H256c14.1,0,25.6,11.5,25.6,25.6v51.2c0,14.1,11.5,25.6,25.6,25.6
       S332.8,167.7,332.8,153.6z'
        />
        <path
          d='M128,281.6h358.4c10.4,0,19.7-6.2,23.7-15.8c4-9.6,1.8-20.6-5.5-27.9l-76.8-76.8c-10-10-26.2-10-36.2,0
       c-10,10-10,26.2,0,36.2l33.1,33.1l-296.6,0c-14.1,0-25.6,11.5-25.6,25.6C102.4,270.1,113.9,281.6,128,281.6L128,281.6z
        M427.7,350.9l76.8-76.8c10-10,10-26.2,0-36.2s-26.2-10-36.2,0l-76.8,76.8c-10,10-10,26.2,0,36.2
       C401.5,360.9,417.7,360.9,427.7,350.9z'
        />
      </g>
    </svg>
  )
}
