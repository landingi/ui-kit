import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Button from 'shared/components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import { styles } from 'shared/helpers/css'
import scss from './ShowPassword.scss'

const cssClass = styles(scss)

/**
 * ShowPassword - statefull presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: showpassword
 * @param {bool} props.setHidden - callback to parent element
 * @param {bool} props.hasLabel - has label
 * @return {object} An object of children element
 */
const showPassword = ({ className, setHidden, hasLabel }) => {
  const [icon, setIcon] = useState('eye')
  const [label, setLabel] = useState('word.show')

  /**
   * handleIconSet - set the icon state
   */
  const handleIconSet = useCallback(() => {
    if (icon === 'eye') {
      setIcon('eye-slash')
      setHidden('text')
      setLabel('word.hide')
    } else {
      setIcon('eye')
      setHidden('password')
      setLabel('word.show')
    }
  })

  return (
    <span
className={cssClass(className)}
onClick={handleIconSet}>
      {hasLabel ? (
        <Button
variant="switcher-brand"
size="tiny"
hasIcon>
          <FontAwesomeIcon icon={icon} />

          <FormattedMessage id={label} />
        </Button>
      ) : (
        <Button variant="icon">
          <FontAwesomeIcon icon={icon} />
        </Button>
      )}
    </span>
  )
}

/**
 * Display name
 * @type {string}
 */
showPassword.displayName = 'ShowPassword'

/**
 * The properties.
 * @type {Object}
 */
showPassword.propTypes = {
  /**
   * Classname, default `showpassword`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * setHidden, callback to parent element(react-formik)
   */
  setHidden: PropTypes.func,
  /**
   * Label
   */
  hasLabel: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
showPassword.defaultProps = {
  className: 'showpassword',
  setHidden: () => null,
  hasLabel: false
}

export default showPassword
