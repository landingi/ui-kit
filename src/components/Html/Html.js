import PropTypes from 'prop-types'
import React from 'react'
import createDOMPurify from 'dompurify'

const isBrowser = typeof window !== 'undefined'

const DOMPurify = isBrowser && createDOMPurify(window)

//TODO Html mdx, test
const Html = ({ value }) => (
  <span
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(value)
    }}
  />
)

Html.displayName = 'HTML'

Html.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default Html
