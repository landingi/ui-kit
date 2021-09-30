import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import Heading from '@components/ui/Heading'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './StatsBadge.scss'

const cssClass = styles(scss),
  /**
   * StatsBadge - stateless presentational component
   * @param {object} props - props
   * @param {string} props.color - badge color
   * @param {number} props.quantity - quantity
   * @param {string} props.description - description
   * @return {object} An object of children element
   */
  statsBadge = ({ color, quantity, description }) => {
    return (
      <div
        className={cssClass(
          'container',
          `container--${color}`
        )}
      >
        <div className={cssClass('container--description')}>
          <Heading level={2} margin='none'>
            {quantity}
          </Heading>

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
   * Description
   */
  description: PropTypes.string.isRequired,

  /**
   * Quantity
   */
  quantity: PropTypes.number
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
