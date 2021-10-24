import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './ColorLine.scss'

const cssClass = styles(scss)

/**
 * Color line - stateless presentational component
 * @param {object} props - props
 * @param {string} props.variant - variant
 * @param {string} props.alignment - alignment
 * @return {object} An object of children element
 */
const ColorLine = ({ variant, alignment }) => (
  <span
    className={cssClass(
      'color-line',
      `color-line--${variant}`,
      `color-line--${alignment}`
    )}
  />
)

ColorLine.displayName = 'ColorLine'

ColorLine.propTypes = {
  alignment: PropTypes.oneOf(['vertical', 'horizontal']),
  variant: PropTypes.oneOf(['alert', 'warning', 'success', 'info']).isRequired
}

colorLine.defaultProps = {
  alignment: 'vertical'
}

export default colorLine
