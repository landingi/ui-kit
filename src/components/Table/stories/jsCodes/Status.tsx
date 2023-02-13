import Toggle from '@components/Form/Toggle/Toggle'
import { FC, useState } from 'react'

interface StatusProps {
  enabled: boolean
  jsCodeIdentifier: number
}

export const Status: FC<StatusProps> = ({ enabled, jsCodeIdentifier }) => {
  const [checked, setChecked] = useState(enabled)

  const handleToggle = () => {
    setChecked(prev => !prev)
  }

  return (
    <Toggle
      checked={checked}
      onChange={handleToggle}
      name={String(jsCodeIdentifier)}
      id={String(jsCodeIdentifier)}
    />
  )
}

Status.displayName = 'Status'
