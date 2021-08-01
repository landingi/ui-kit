import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Limit.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import { formatNumeric } from 'shared/helpers/data'
import Tooltip from '@components/ui/Tooltip'
import Spreader from '@components/ui/Spreader'

const cssClass = styles(scss)

/**
 * limit - stateless presentational component
 * @param {object} props - props
 * @param {string} props.className - className, default 'limit'
 * @param {string} props.icon - icon
 * @param {number} props.quantity - quantity
 * @param {number} props.limit - limit
 * @param {string} props.name - name of the limit type
 * @param {number} props.total - show total number
 * @param {bool} props.unlimited - hide '/limit'
 * @param {string} props.tooltip - info tooltip
 * @return {object} An object of children element
 */
const limit = ({
  className,
  total,
  icon,
  limit,
  quantity,
  name,
  unlimited,
  tooltip
}) => {
  return (
    <div className={cssClass(className)}>
      <div className={cssClass('limit--icon')}>
        <FontAwesomeIcon icon={icon}
size="lg" />
      </div>

      <div className={cssClass('limit--info')}>
        <span className={cssClass('info')}>
          <span className={cssClass('info--quantity')}>
            {formatNumeric(quantity)}
          </span>

          <span className={cssClass('info--limit')}>
            {unlimited ? (
              <span> / &#8734;</span>
            ) : (
              ` / ${formatNumeric(limit)}`
            )}
          </span>

          {!!total && (
            <span className={cssClass('info--total')}>
              <FormattedMessage id="word.total" />:
              <b>{total}</b>
            </span>
          )}
        </span>

        <span className={cssClass('info--name')}>
          <FormattedMessage id={name} />

          {tooltip && (
            <>
              <Spreader spread="tiny" />

              <Tooltip
                content={<FormattedMessage id={tooltip} />}
              >
                <FontAwesomeIcon icon="exclamation-circle" />
              </Tooltip>
            </>
          )}
        </span>
      </div>
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
limit.displayName = 'Limit'

/**
 * The properties.
 * @type {Object}
 */
limit.propTypes = {
  /**
   * className, default 'limit'
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Icon
   */
  icon: PropTypes.string.isRequired,
  /**
   * Quantity
   */
  quantity: PropTypes.number.isRequired,
  /**
   * Limit
   */
  limit: PropTypes.number.isRequired,
  /**
   * Name
   */
  name: PropTypes.string.isRequired,
  /**
   * Total
   */
  total: PropTypes.number,
  /**
   * Unlimited
   */
  unlimited: PropTypes.bool,
  /**
   * Tooltip
   */
  tooltip: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
limit.defaultProps = {
  className: 'limit',
  total: 0,
  unlimited: false,
  tooltip: ''
}

export default limit
