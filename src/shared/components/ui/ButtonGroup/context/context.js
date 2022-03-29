import React, { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useUpdateEffect } from '@helpers/hooks/useUpdateEffect'

const ButtonGroupContext = createContext(null)

const useButtonGroupState = initialValue => {
  const [selected, setSelected] = useState(initialValue)

  return { selected, setSelected }
}

/**
 * ButtonGroupProvider - statefull provider component
 * @param {children} props.children - children of the component
 * @param {string} props.initialValue - initial active id
 * @param {function} props.onChange - change state callback
 * @return {object} An object of children element
 */
export const ButtonGroupProvider = ({ children, initialValue, onChange }) => {
  const value = useButtonGroupState(initialValue)

  const { selected } = value

  useUpdateEffect(() => onChange(selected), [value])

  return (
    <ButtonGroupContext.Provider value={value}>
      {children}
    </ButtonGroupContext.Provider>
  )
}

ButtonGroupProvider.propTypes = {
  children: PropTypes.node.isRequired,
  onChange: PropTypes.func.isRequired,
  initialValue: PropTypes.string
}

ButtonGroupProvider.defaultProps = {
  initialValue: null
}

export const useButtonGroupContext = () => {
  const buttonGroup = useContext(ButtonGroupContext)

  if (!buttonGroup) {
    throw new Error(
      'useButtonGroupContext must be used inside ButtonGroupProvider'
    )
  }

  return buttonGroup
}
