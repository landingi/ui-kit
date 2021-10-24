import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Indicator.scss'

const cssClass = styles(scss)

/**
 * Indicator - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.content - content
 * @param {boolean} props.isAlert - is alert
 * @param {string|array} props.className - list of class names, default: `indicator`
 * @param {function} props.onClick - click handler
 * @return {object} An object of children element
 */
const Indicator = ({ children, className, content, isAlert, onClick }) => {
  const hasAlertClass = isAlert ? 'is--alert' : undefined

  return (
    <span className={cssClass(className, hasAlertClass)} onClick={onClick}>
      <i>{content}</i>

      {children}
    </span>
  )
}

Indicator.displayName = 'Indicator'

Indicator.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  content: PropTypes.string,
  isAlert: PropTypes.bool,
  onClick: PropTypes.func
}

Indicator.defaultProps = {
  className: 'indicator',
  content: null,
  isAlert: false,
  onClick: () => {}
}

export default Indicator
