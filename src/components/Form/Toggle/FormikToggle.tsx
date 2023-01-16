import Error from '@components/Form/Error'
import { useStyles } from '@helpers/hooks/useStyles'
import { ChangeEventHandler, FC, FocusEventHandler } from 'react'

import styles from './Toggle.module.scss'

interface FormikCheckboxProps {
  className?: string | string[]
  field: {
    name: string
    value: boolean
    onChange: ChangeEventHandler<HTMLInputElement>
    onBlur: FocusEventHandler<HTMLInputElement>
  }
  form: {
    errors: {
      [key: string]: string
    }
    touched: {
      [key: string]: boolean
    }
  }
  id: string
  label: string
  type?: 'text' | 'number' | 'password'
}

/**
 * Formik toggle - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className
 * @param {string} props.type
 * @param {object} props.field
 * @param {object} props.form
 * @param {string} props.id
 * @param {string} props.label
 * @return {object} An object of children element
 */
const FormikToggle: FC<FormikCheckboxProps> = ({
  field: { name, value, onChange, onBlur = () => null },
  form: { errors, touched },
  id,
  label,
  className,
  type
}) => {
  const wrapperStyles = useStyles(
    { [styles['toggle-container']]: true },
    className
  )

  const labelStyles = useStyles({
    [styles.toggle]: true,
    [styles['toggle--checked']]: value
  })

  return (
    <div className={wrapperStyles}>
      <label className={labelStyles}>
        <input
          name={name}
          className={styles.toggle__checkbox}
          checked={value}
          onChange={onChange}
          onBlur={onBlur}
          type={type}
          id={id}
        />

        <span className={styles.toggle__button} />
      </label>

      {label && (
        <label htmlFor={id} className={styles.toggle__label}>
          {label}

          {touched[name] && <Error error={errors[name]} />}
        </label>
      )}
    </div>
  )
}

FormikToggle.displayName = 'FormikToggle'

export default FormikToggle
