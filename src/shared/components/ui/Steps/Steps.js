import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Steps.scss'
import { stepsShape } from 'shared/shapes'
import { FormattedMessage } from 'react-intl'
import uuid from 'react-uuid'
import StepNumber from 'shared/components/ui/StepNumber'

const cssClass = styles(scss)

/**
 * Steps - stateless presentational component
 * @param {object} props - props
 * @param {object[]} props.data - data
 * @return {object} An object of children element
 */
const Steps = ({ data }) => (
  <div className={cssClass('container')}>
    {data.map((item, index) => {
      const step = index + 1
      const { variant, description } = item

      return (
        <div
          className={scss.step}
          key={uuid()}>
          <StepNumber
            step={step}
            variant={variant} />

          <span
            className={cssClass('step__description', `step__description--${variant}`)}>
            <FormattedMessage id={description} />
          </span>
        </div>
      )
    })}
  </div>
)

/**
 * Display name
 * @type {string}
 */
Steps.displayName = 'Steps'

/**
 * The properties.
 * @type {Object}
 */
Steps.propTypes = {
  /**
   * Data
   */
  data: PropTypes.arrayOf(stepsShape).isRequired
}

export default Steps
