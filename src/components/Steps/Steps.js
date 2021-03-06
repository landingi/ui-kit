import { stepsShape } from '@shapes'
import PropTypes from 'prop-types'
import React from 'react'
import StepNumber from '@components/StepNumber'
import styles from './Steps.module.scss'
import uuid from 'react-uuid'

/**
 * Steps - stateless presentational component
 * @param {object} props - props
 * @param {object[]} props.data - data
 * @return {object} An object of children element
 */
const Steps = ({ data }) => {
  return (
    <div className={styles.container}>
      {data.map((item, index) => {
        const step = index + 1
        const { variant, description } = item

        return (
          <div className={styles.step} key={uuid()}>
            <StepNumber step={step} variant={variant} />

            <span className={styles[`step__description--${variant}`]}>
              {description}
            </span>
          </div>
        )
      })}
    </div>
  )
}

Steps.displayName = 'Steps'

Steps.propTypes = {
  data: PropTypes.arrayOf(stepsShape).isRequired
}

export default Steps
