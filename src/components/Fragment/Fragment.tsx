import { ReactNode } from 'react'

type FragmentProps = {
  children: ReactNode | JSX.Element
}

function Fragment({ children }: FragmentProps) {
  return <>{children ?? <></>}</>
}

export default Fragment
