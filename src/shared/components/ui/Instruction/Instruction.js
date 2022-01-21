import PropTypes from 'prop-types'
import React from 'react'
import StepNumber from '@components/ui/StepNumber'
import styles from './Instruction.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'
import uuid from 'react-uuid'

/**
 * Instruction - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - a list of class names, default: `instruction`
 * @param {array} props.data - steps data
 * @return {object} An object of children element
 */
function Instruction({ className, data }) {
  const instructionStyles = useStyles(
    {
      [styles.instruction]: true
    },
    className
  )

  return (
    <div className={instructionStyles}>
      {data.map(({ content }, index) => (
        <div className={styles.instruction__step} key={uuid()}>
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
  className: ''
}

export default Instruction
