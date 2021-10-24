import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import { formatNumeric } from '@helpers/data'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Spreader from '@components/ui/Spreader'
import Tooltip from '@components/ui/Tooltip'
import scss from './Limit.scss'

const cssClass = styles(scss)

/**
 * Limit - stateless presentational component
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
const Limit = ({
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
        <FontAwesomeIcon icon={icon} size='lg' />
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

          {Boolean(total) && (
            <span className={cssClass('info--total')}>
              <FormattedMessage id='word.total' />:<b>{total}</b>
            </span>
          )}
        </span>

        <span className={cssClass('info--name')}>
          <FormattedMessage id={name} />

          {tooltip && (
            <Fragment>
              <Spreader spread='tiny' />

              <Tooltip content={<FormattedMessage id={tooltip} />}>
                <FontAwesomeIcon icon='exclamation-circle' />
              </Tooltip>
            </Fragment>
          )}
        </span>
      </div>
    </div>
  )
}


Limit.displayName = 'Limit'

Limit.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  icon: PropTypes.string.isRequired,
  limit: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  quantity: PropTypes.number.isRequired,
  tooltip: PropTypes.string,
  total: PropTypes.number,
  unlimited: PropTypes.bool
}

Limit.defaultProps = {
  className: 'limit',
  tooltip: '',
  total: 0,
  unlimited: false
}

export default Limit
