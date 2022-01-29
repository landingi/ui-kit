import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Textarea.scss'

const cssClass = styles(scss)

//TODO Textarea css, mdx, test
/**
 * Textarea - stateless presentational component
 * @param {object} i18n- props with translated string
 */
const Textarea = ({ name, value, onChange, i18n }) => {
  return (
    <textarea
      className={cssClass('textarea')}
      name={name}
      placeholder={i18n.placeholder}
      onChange={onChange}
      value={value}
    />
  )
}

Textarea.displayName = 'Textarea'

Textarea.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    placeholder: PropTypes.string
  }).isRequired
}

export default Textarea
