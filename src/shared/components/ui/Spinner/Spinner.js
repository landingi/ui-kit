import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Spinner.scss'

const cssClass = styles(scss),
  /**
   * Spinner - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: `spinner__spin`
   * @return {object} An object of children element
   */
  spinner = ({ className }) => (
    <div className={cssClass(className)}>
      <FontAwesomeIcon icon='spinner' spin />
    </div>
  )

spinner.displayName = 'Spinner'

spinner.propTypes = {
  /**
   * Classname, default `spinner__spin`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

/**
 * The default properties.
 * @type {Object}
 */
spinner.defaultProps = {
  className: 'spinner__spin'
}

export default spinner
