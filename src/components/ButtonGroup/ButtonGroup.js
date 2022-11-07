import PropTypes from 'prop-types'
import React from 'react'

import styles from './ButtonGroup.module.scss'
import { ButtonGroupProvider } from './context'

/**
 * ButtonGroup - stateless presentational component
 * @param {children} props.children - children of the component
 * @param {string} props.initialValue - initial active id
 * @param {function} props.onChange - change state callback
 * @return {object} An object of children element
 */
const ButtonGroup = ({ children, initialValue, onChange }) => (
  <ButtonGroupProvider initialValue={initialValue} onChange={onChange}>
    <div className={styles.wrapper}>{children}</div>
  </ButtonGroupProvider>
)

ButtonGroup.displayName = 'ButtonGroup'

ButtonGroup.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string
}

ButtonGroup.defaultProps = {
  initialValue: null
}

export default ButtonGroup
