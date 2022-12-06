import { useUpdateEffect } from '@helpers/hooks/useUpdateEffect'
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useState
} from 'react'

interface ButtonGroupContextValue {
  selected: string | null
  setSelected: Dispatch<SetStateAction<string | null>>
}

const ButtonGroupContext = createContext<ButtonGroupContextValue | null>(null)

const useButtonGroupState = (initialValue: string | null) => {
  const [selected, setSelected] = useState(initialValue)

  return { selected, setSelected }
}

interface ButtonGroupProviderProps {
  children: ReactNode
  initialValue?: string | null
  onChange: (value: string | null) => void
}

export const ButtonGroupProvider: FC<ButtonGroupProviderProps> = ({
  children,
  onChange,
  initialValue = null
}) => {
  const value = useButtonGroupState(initialValue)

  const { selected } = value

  useUpdateEffect(() => onChange(selected), [value])

  return (
    <ButtonGroupContext.Provider value={value}>
      {children}
    </ButtonGroupContext.Provider>
  )
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
