import React from 'react'
import PropTypes from 'prop-types'
import Error from '@components/Form/Error'
import Label from '@components/Label'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './FieldGroup.module.scss'

/**
 * Field Group  - stateless presentational component
 * @param {object} props - props
 * @param {object} props.errors
 * @param {object} props.touched
 * @param {string} props.label
 * @param {string} props.name
 * @param {object} props.children
 * @return {object} An object of children element
 */
const FieldGroup = ({ errors, touched, label, name, children }) => {
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

FieldGroup.propTypes = {
  children: PropTypes.node.isRequired,
  touched: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  errors: PropTypes.object
}

FieldGroup.defaultProps = {
  label: '',
  errors: {},
  touched: {}
}

export default FieldGroup
