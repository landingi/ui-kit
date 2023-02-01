import { FC } from 'react'

interface OptionProps {
  className?: string
  value?: string | number
  label: string
}

const Option: FC<OptionProps> = ({ className, value, label }) => (
  <option className={className} value={value}>
    {label}
  </option>
)

Option.displayName = 'SelectOption'

export default Option
