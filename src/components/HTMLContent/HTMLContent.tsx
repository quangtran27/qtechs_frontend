import React from 'react'
import DOMPurify from 'dompurify'
interface Props {
  html: string
}

const MyComponent: React.FC<Props> = ({ html }) => {
  const sanitizedHtml = DOMPurify.sanitize(html)
  return <div dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />
}

export default MyComponent
