import React from 'react'
import PropTypes from 'prop-types'
import styles from './Textarea.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

//TODO Textarea mdx, test

/**
 * Textarea - stateless presentational component
 * @param {string | array} className - list of custom css class from out of component
 * @param {string} name - name
 * @param {string} id - id
 * @param {string} value - value
 * @param {func} onChange - on change callback
 * @param {object} i18n - props with translated string
 * @return {object} An object of children element
 */
const Textarea = ({ className, name, id, value, onChange, i18n }) => {
  const textAreaStyles = useStyles(
    {
      [styles['textarea']]: true
    },
    className
  )

  return (
    <textarea
      className={textAreaStyles}
      id={id}
      name={name}
      placeholder={i18n.placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string
  }).isRequired
}

Textarea.defaultProps = {
  className: ''
}

export default Textarea
