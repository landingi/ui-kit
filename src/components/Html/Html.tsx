import createDOMPurify from 'dompurify'
import { FC } from 'react'

const isBrowser = typeof window !== 'undefined'

const DOMPurify = isBrowser && createDOMPurify(window)

interface HTMLProps {
  value: string | Node
}

const Html: FC<HTMLProps> = ({ value }) => (
  <span
    {...(DOMPurify && {
      dangerouslySetInnerHTML: {
        __html: DOMPurify.sanitize(value)
      }
    })}
  />
)

Html.displayName = 'HTML'

export default Html
