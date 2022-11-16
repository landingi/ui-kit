import createDOMPurify from 'dompurify'
import PropTypes from 'prop-types'
import React from 'react'

const isBrowser = typeof window !== 'undefined'

const DOMPurify = isBrowser && createDOMPurify(window)

const Html = ({ value }) => (
  <span
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
