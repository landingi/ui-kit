import React, { Fragment, memo } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './DonutChart.scss'
import Label from 'shared/components/ui/Label'
import { FormattedMessage } from 'react-intl'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */

const cssClass = styles(scss)

/**
 * Donut chart - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `donutChart`
 * @param {number} props.quantity
 * @param {number} props.type
 * @param {string} props.label
 * @return {object} An object of children element
 */
const donutChart = ({
  className,
  quantity,
  type,
  label
}) => {
  const variant = cssClass({
    success: quantity >= 95,
    info: quantity >= 58 && quantity <= 94,
    warning: quantity >= 30 && quantity <= 57,
    alert: quantity >= 0 && quantity <= 29
  })

  return (
    <Fragment>
      <div className={cssClass(className, `donutChart--${variant}`)}>
        {quantity}{type === 'percent' && '%'}

        <Label>
          {<FormattedMessage id={label} /> || quantity}
        </Label>

        <div
          className={cssClass('after--chart')}
          style={{
            transform: `rotate( calc( 1deg * ( -45 + ${quantity} * 1.8 ) ) )`,
            borderColor: `rgba(0, 0, 0, 0.15) rgba(0, 0, 0, 0.15) ${variant} `
          }}
        />
      </div>

      <div className={cssClass('donutChart__label')}>
        <Label>0</Label>

        <Label>100</Label>
      </div>
    </Fragment>
  )
}

/**
 * Display name
 * @type {string}
 */
donutChart.displayName = 'DonutChart'

/**
 * The properties.
 * @type {Object}
 */

donutChart.propTypes = {
  /**
   * ClassName
   */
  className: PropTypes.string,
  /**
   * Quantity
   */
  quantity: PropTypes.number.isRequired,
  /**
   * Type
   */
  type: PropTypes.string,
  /**
   * label
   */
  label: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
donutChart.defaultProps = {
  className: 'donutChart',
  type: 'number'
}

export default memo(donutChart)
