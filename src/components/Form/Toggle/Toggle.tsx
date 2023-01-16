import Html from '@components/Html'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, FocusEventHandler, ReactEventHandler } from 'react'

import styles from './Toggle.module.scss'

interface ToggleProps {
  name?: string
  onChange?: ReactEventHandler<HTMLInputElement>
  onBlur: FocusEventHandler<HTMLInputElement>
  label: string
  id: string
  className?: string | string[]
  checked: boolean
  disabled?: boolean
  formikKey?: string
  table?: boolean
  tableDeselect?: boolean
  'data-testid'?: string
}

const Toggle: FC<ToggleProps> = ({
  name,
  checked,
  onChange,
  onBlur = () => null,
  id,
  label = '',
  className = '',
  disabled,
  'data-testid': dataTestId
}) => {
  const wrapperStyles = useStyles(
    { [styles['toggle-container']]: true },
    className
  )

  const toggleStyles = useStyles({
    [styles.toggle]: true,
    [styles['toggle--checked']]: checked,
    [styles['toggle--checked-disabled']]: checked && disabled,
    [styles['toggle--disabled']]: !checked && disabled
  })

  return (
    <div className={wrapperStyles}>
      <label className={toggleStyles}>
        <input
          name={name}
          className={styles.toggle__checkbox}
          checked={checked}
          onChange={onChange}
          onBlur={onBlur}
          type='checkbox'
          id={id}
          disabled={disabled}
          {...(dataTestId ? { 'data-testid': dataTestId } : {})}
        />

        <span className={styles.toggle__button} />
      </label>

      {label && (
        <label htmlFor={id} className={styles.label}>
          <Html value={label} />
        </label>
      )}
    </div>
  )
}

Toggle.displayName = 'Toggle'

export default Toggle
