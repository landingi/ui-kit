import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import StepNumber from '@components/ui/StepNumber'
import scss from './Instruction.scss'
import uuid from 'react-uuid'

const cssClass = styles(scss)

/**
 * Instruction - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - a list of class names, default: `instruction`
 * @param {array} props.data - steps data
 * @return {object} An object of children element
 */
function Instruction({ className, data }) {
  return (
    <div className={cssClass(className)}>
      {data.map(({ content }, index) => (
        <div className={cssClass('instruction__step')} key={uuid()}>
          <StepNumber absolute size='medium' step={index + 1} />

          {content}
        </div>
      ))}
    </div>
  )
}

Instruction.displayName = 'Instruction'

Instruction.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  data: PropTypes.arrayOf(
    PropTypes.shape({
      content: PropTypes.node.isRequired
    })
  ).isRequired
}

Instruction.defaultProps = {
  className: 'instruction'
}

export default Instruction
