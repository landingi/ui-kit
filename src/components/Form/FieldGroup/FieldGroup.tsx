import Error from '@components/Form/Error'
import { Label } from '@components/Label'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './FieldGroup.module.scss'

interface FieldGroupProps {
  children: ReactNode
  name: string
  label?: string
  errors?: {
    [key: string]: string
  }
  touched?: {
    [key: string]: boolean
  }
}

export const FieldGroup: FC<FieldGroupProps> = ({
  errors = {},
  touched = {},
  label = '',
  name,
  children
}) => {
  const labelStyles = useStyles({
    [styles['field-group--has-error']]: touched[name]
  })

  return (
    <div className={styles['field-group']}>
      {label && <Label className={labelStyles}>{label}</Label>}

      {children}

      {touched[name] && <Error error={errors[name]} />}
    </div>
  )
}

FieldGroup.displayName = 'FieldGroup'
