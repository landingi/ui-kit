import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
 * @param {date} props.i18n - object of translations
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
  tooltip,
  i18n
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
            {unlimited ? <span> / &#8734;</span> : ` / ${formatNumeric(limit)}`}
          </span>

          {Boolean(total) && (
            <span className={cssClass('info--total')}>
              {i18n.total}:<b>{total}</b>
            </span>
          )}
        </span>

        <span className={cssClass('info--name')}>
          {name}

          {tooltip && (
            <Fragment>
              <Spreader spread='tiny' />

              <Tooltip content={tooltip}>
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
  unlimited: PropTypes.bool,
  i18n: PropTypes.shape({
    total: PropTypes.string
  })
}

Limit.defaultProps = {
  className: 'limit',
  tooltip: '',
  total: 0,
  unlimited: false,
  i18n: {}
}

export default Limit
