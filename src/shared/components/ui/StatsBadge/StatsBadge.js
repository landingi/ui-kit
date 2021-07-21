import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './StatsBadge.scss'
import Heading from 'shared/components/ui/Heading'
import { FormattedMessage } from 'react-intl'

const cssClass = styles(scss)

/**
 * StatsBadge - stateless presentational component
 * @param {object} props - props
 * @param {string} props.color - badge color
 * @param {number} props.quantity - quantity
 * @param {string} props.description - description
 * @return {object} An object of children element
 */
const statsBadge = ({ color, quantity, description }) => {
  return (
    <div className={cssClass('container', `container--${color}`)}>
      <div className={cssClass('container--description')}>
        <Heading
          level={2}
          margin='none'>{quantity}</Heading>

        <Heading level={5}>
          <FormattedMessage id={description} />
        </Heading>
      </div>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
statsBadge.displayName = 'Stats Badge'

/**
 * The properties.
 * @type {Object}
 */
statsBadge.propTypes = {
  /**
   * Badge color
   */
  color: PropTypes.oneOf(['green', 'yellow', 'pink']),
  /**
   * Quantity
   */
  quantity: PropTypes.number,
  /**
   * Description
   */
  description: PropTypes.string.isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
statsBadge.defaultProps = {
  color: 'green',
  quantity: 0
}

export default statsBadge
