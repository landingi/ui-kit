import React from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Card.module.scss'

/**
 * Card - stateless presentational component
 * @param {object} props.children - children
 * @param {string} props.variant - variant
 * @return {object} An object of children element
 */
const Card = ({ children, variant }) => {
  const elementClasses = useStyles({
    [styles['card']]: true,
    [styles[`card--${variant}`]]: variant
  })

  const containerClasses = useStyles({
    [styles['container']]: true
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
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['alert', 'warning', 'success']).isRequired
}

export default Card
