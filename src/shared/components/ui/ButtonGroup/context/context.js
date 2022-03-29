import { createContext, useContext, useState } from 'react'
import PropTypes from 'prop-types'
import { useUpdateEffect } from '@hooks/useUpdateEffect'

const ButtonGroupContext = createContext(null)

const useButtonGroupState = initialValue => {
  const [selected, setSelected] = useState(initialValue)

  return { selected, setSelected }
}

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
