import { FormattedMessage } from 'react-intl'
import { stepsShape } from '@shapes'
import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import StepNumber from '@components/ui/StepNumber'
import scss from './Steps.scss'
import uuid from 'react-uuid'

const cssClass = styles(scss)

/**
 * Steps - stateless presentational component
 * @param {object} props - props
 * @param {object[]} props.data - data
 * @return {object} An object of children element
 */
function Steps({ data }) {
  return (
    <div className={cssClass('container')}>
      {data.map((item, index) => {
        const step = index + 1,
          { variant, description } = item

        return (
          <div className={scss.step} key={uuid()}>
            <StepNumber step={step} variant={variant} />

            <span
              className={cssClass(
                'step__description',
                `step__description--${variant}`
              )}
            >
              <FormattedMessage id={description} />
            </span>
          </div>
        )
      })}
    </div>
  )
}


Steps.displayName = 'Steps'


Steps.propTypes = {
  /**
   * Data
   */
  data: PropTypes.arrayOf(stepsShape).isRequired
}

export default Steps
