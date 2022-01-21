import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { getLocationPath } from '@helpers/url'
import Button from '@components/ui/Button'
import PropTypes from 'prop-types'
import React from 'react'
import Tooltip from '@components/ui/Tooltip'
import styles from './Back.module.scss'

/**
 * Back - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: back
 * @param {string} props.url - url, default: ''
 * @param {string} props.content - content, default: ''
 * @return {object} An object of children element
 */
const Back = ({ className, url, content }) => {
  const location = getLocationPath(),
    urlMap = location.match('/payments/subscription/cancel')
      ? '/payments/subscription'
      : url

  return (
    <span data-testid='back ' className={className}>
      <a href={urlMap}>
        <Tooltip content={content} placement='bottom'>
          <Button variant='icon'>
            <FontAwesomeIcon icon='arrow-left' />
          </Button>
        </Tooltip>
      </a>
    </span>
  )
}

Back.displayName = 'Back'

Back.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  url: PropTypes.string
}

Back.defaultProps = {
  className: styles.back,
  content: '',
  url: ''
}

export default Back
