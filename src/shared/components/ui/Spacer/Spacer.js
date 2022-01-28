import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Spacer.module.scss'

/**
 * Spacer - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `spacer`
 * @param {string} props.space - space size
 * @return {object} An object of children element
 */
const Spacer = ({ className, space }) => {
  const spacerClasses = useStyles({
    [styles[className]]: true,
    [styles[`spacer--${space}`]]: true
  })

  return <div data-testid='spacer' className={spacerClasses} />
}

Spacer.displayName = 'Spacer'

Spacer.propTypes = {
  /**
   * Classname, default `spacer`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Space
   */
  space: PropTypes.oneOf([
    'mini',
    'tiny',
    'small',
    'medium',
    'large',
    'x-large',
    'huge'
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
Spacer.defaultProps = {
  className: 'spacer',
  space: 'medium'
}

export default Spacer
