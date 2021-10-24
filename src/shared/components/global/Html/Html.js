import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import createDOMPurify from 'dompurify'
import scss from './Html.scss'

const isBrowser = typeof window !== 'undefined'

const DOMPurify = isBrowser && createDOMPurify(window)

const cssClass = styles(scss)

const Html = ({ className, value }) => (
  <span
    className={cssClass(className)}
    // eslint-disable-next-line react/no-danger
    dangerouslySetInnerHTML={{
      __html: DOMPurify.sanitize(value)
    }}
  />
)

Html.displayName = 'HTML element'

Html.defaultProps = {
  className: 'html'
}

Html.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired
}

export default Html
