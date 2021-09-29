import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/ui/Button'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import scss from './ShowPassword.scss'

const cssClass = styles(scss),
  /**
   * ShowPassword - statefull presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: showpassword
   * @param {bool} props.setHidden - callback to parent element
   * @param {bool} props.hasLabel - has label
   * @return {object} An object of children element
   */
  showPassword = ({ className, setHidden, hasLabel }) => {
    const [icon, setIcon] = useState('eye'),
      [label, setLabel] = useState('word.show'),
      /**
       * HandleIconSet - set the icon state
       */
      handleIconSet = useCallback(() => {
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
        onClick={handleIconSet}
      >
        {hasLabel ? (
          <Button
            hasIcon
            size='tiny'
            variant='switcher-brand'
          >
            <FontAwesomeIcon icon={icon} />

            <FormattedMessage id={label} />
          </Button>
        ) : (
          <Button variant='icon'>
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
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * SetHidden, callback to parent element(react-formik)
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
