import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import Spreader from '@components/ui/Spreader'
import scss from './Check.scss'

const cssClass = styles(scss)

/**
 * Check - stateless presentational component
 * @param {object} props - props
 * @param {bool} positive - positive
 * @param {object} children - children
 * @return {object} An object of children element
 */
const Check = ({ children, positive }) => (
  <span className={cssClass('check', positive && 'check--positive')}>
    <FontAwesomeIcon icon={positive ? 'check' : 'times'} />

    <Spreader spread='tiny' />

    {children}
  </span>
)


Check.displayName = 'Check'

Check.propTypes = {
  positive: PropTypes.bool
}

Check.defaultProps = {
  positive: false
}

export default Check
