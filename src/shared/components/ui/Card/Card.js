import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Card.scss'

const cssClass = styles(scss)

/**
 * Card - stateless presentational component
 * @param {object} props.children - children
 * @param {string} props.variant - variant
 * @return {object} An object of children element
 */
const Card = ({ children, variant }) => (
  <div className={cssClass('card', `card--${variant}`)}>
    <div className={cssClass('container')}>
      {React.Children.map(children, child => React.cloneElement(child))}
    </div>
  </div>
)

Card.displayName = 'Card'

Card.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(['alert', 'warning', 'success']).isRequired
}

export default Card
