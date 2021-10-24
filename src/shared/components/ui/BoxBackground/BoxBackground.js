import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './BoxBackground.scss'

const cssClass = styles(scss)

/**
 * Box Background - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children element
 * @param {string} props.variant - variant
 * @return {object} An object of children element
 */
const BoxBackground = ({ children, variant }) => (
  <span className={cssClass('boxBackground', `boxBackground--${variant}`)}>
    {children}
  </span>
)

BoxBackground.displayName = 'BoxBackground'

BoxBackground.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.string.isRequired
}

export default BoxBackground
