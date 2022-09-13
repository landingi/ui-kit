import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Label from '@components/Label'
import Spacer from '@components/Spacer'
import styles from './Textarea.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Textarea - stateless presentational component
 * @param {string | array} className - list of custom css class from out of component
 * @param {string} name - name
 * @param {string} id - id
 * @param {string} value - value
 * @param {func} onChange - on change callback
 * @param {string} variant - variant
 * @param {string} size - size
 * @param {object} i18n - props with translated string
 * @param {bool} hasResize - is rezise
 * @param {number} maxHeight - max height
 * @return {object} An object of children element
 */
const Textarea = ({
  className,
  name,
  id,
  value,
  onChange,
  variant,
  size,
  i18n,
  hasResize,
  maxHeight
}) => {
  const textAreaStyles = useStyles(
    {
      [styles['textarea']]: true,
      [styles[`textarea--${variant}`]]: variant,
      [styles[`textarea--${size}`]]: size,
      [styles['textarea--resize']]: hasResize
    },
    className
  )

  return (
    <Fragment>
      {i18n?.label && (
        <Fragment>
          <Label id={id} padding='none'>
            {i18n.label}
          </Label>

          <Spacer space='tiny' />
        </Fragment>
      )}

      <textarea
        className={textAreaStyles}
        id={id}
        name={name}
        placeholder={i18n.placeholder}
        onChange={onChange}
        value={value}
        style={{ maxHeight: maxHeight }}
      />
    </Fragment>
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
    placeholder: PropTypes.string,
    label: PropTypes.string
  }).isRequired,
  variant: PropTypes.oneOf(['default', 'codearea']),
  size: PropTypes.oneOf(['tiny', 'small', 'medium']),
  hasResize: PropTypes.bool,
  maxHeight: PropTypes.number
}

Textarea.defaultProps = {
  className: '',
  size: 'medium',
  variant: 'default',
  hasResize: false,
  maxHeight: null
}

export default Textarea
