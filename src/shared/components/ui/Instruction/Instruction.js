import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Instruction.scss'
import uuid from 'react-uuid'
import StepNumber from '@components/ui/StepNumber'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Instruction - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - a list of class names, default: `instruction`
 * @param {array} props.data - steps data
 * @return {object} An object of children element
 */
function Instruction({ className, data }) {
  return <div className={cssClass(className)}>
    {data.map(({ content }, index) => (
      <div
        className={cssClass('instruction__step')}
        key={uuid()}
      >
        <StepNumber
          absolute
          size="medium"
          step={index + 1}
        />

        {content}
      </div>
    ))}
  </div>
}

/**
 * Display name
 * @type {string}
 */
Instruction.displayName = 'Instruction'

/**
 * The properties.
 * @type {Object}
 */
Instruction.propTypes = {
  /**
   * Classname, default `Instruction`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * Data
   */
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired
    })
  ).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
Instruction.defaultProps = {
  className: 'instruction'
}

export default Instruction
