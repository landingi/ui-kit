import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './Card.module.scss'

/**
 * Card - stateless presentational component
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - children
 * @param {string} props.variant - variant
 * @return {object} An object of children element
 */
const Card = ({ className, children, variant }) => {
  const elementClasses = useStyles(
    {
      [styles.card]: true,
      [styles[`card--${variant}`]]: variant
    },
    className
  )

  const containerClasses = useStyles({
    [styles.container]: true
  })

  return (
    <div data-testid='card' className={elementClasses}>
      <div className={containerClasses}>
        {React.Children.map(children, child => React.cloneElement(child))}
      </div>
    </div>
  )
}

Card.displayName = 'Card'

Card.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['alert', 'warning', 'success']).isRequired
}

Card.defaultProps = {
  className: ''
}

export default Card
