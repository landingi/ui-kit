import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './ColorLine.module.scss'

/**
 * Color line - stateless presentational component
 * @param {object} props - props
 * @param {string} props.variant - variant
 * @param {string} props.alignment - alignment
 * @return {object} An object of children element
 */
const ColorLine = ({ variant, alignment }) => {
  const elementClasses = useStyles({
    [styles['color-line']]: true,
    [styles[`color-line--${variant}`]]: variant,
    [styles[`color-line--${alignment}`]]: alignment
  })

  return <span className={elementClasses} />
}

ColorLine.displayName = 'ColorLine'

ColorLine.propTypes = {
  alignment: PropTypes.oneOf(['vertical', 'horizontal']),
  variant: PropTypes.oneOf(['alert', 'warning', 'success', 'info']).isRequired
}

ColorLine.defaultProps = {
  alignment: 'vertical'
}

export default ColorLine
