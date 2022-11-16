import Button from '@components/Button'
import Icon from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'

import styles from './ShowPassword.module.scss'

/**
 * ShowPassword - stateful presentational component
 * @param {object} props - props
 * @param {string|array} props.className
 * @param {bool} props.setHidden
 * @param {bool} props.hasLabel
 * @param {object} props.i18n
 * @return {object} An object of children element
 */
const ShowPassword = ({ className, setHidden, hasLabel, i18n }) => {
  const [icon, setIcon] = useState('icon-eye-close')
  const [label, setLabel] = useState(i18n.show)

  /**
   * HandleIconSet - set the icon state
   */
  const handleIconSet = useCallback(() => {
    if (icon === 'icon-eye-close') {
      setIcon('icon-eye-open')
      setHidden('text')
      setLabel(i18n.hide)
    } else {
      setIcon('icon-eye-close')
      setHidden('password')
      setLabel(i18n.show)
    }
  })

  const showPasswordStyles = useStyles(
    { [styles.showpassword]: true },
    className
  )

  return (
    <span
      className={showPasswordStyles}
      onClick={handleIconSet}
      data-testid='show-pasword'
    >
      {hasLabel ? (
        <Button hasIcon size='tiny' variant='switcher-brand'>
          <Icon icon={icon} data-testid={icon} />
          {label}
        </Button>
      ) : (
        <Button variant='icon'>
          <Icon icon={icon} />
        </Button>
      )}
    </span>
  )
}

ShowPassword.displayName = 'ShowPassword'

ShowPassword.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  hasLabel: PropTypes.bool,
  setHidden: PropTypes.func,
  i18n: PropTypes.shape({
    show: PropTypes.string,
    hide: PropTypes.string
  })
}

ShowPassword.defaultProps = {
  className: '',
  hasLabel: false,
  setHidden: () => null,
  i18n: {
    show: 'word.show',
    hide: 'word.hide'
  }
}

export default ShowPassword
