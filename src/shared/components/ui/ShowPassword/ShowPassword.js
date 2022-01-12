import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/ui/Button'
import Icon from '@components/ui/Icon'
import styles from './ShowPassword.module.scss'

/**
 * ShowPassword - stateful presentational component
 * @param {object} props - props
 * @param {string|array} props.className
 * @param {bool} props.setHidden
 * @param {bool} props.hasLabel
 * @return {object} An object of children element
 */
const ShowPassword = ({ className, setHidden, hasLabel, i18n }) => {
  const [icon, setIcon] = useState('icon-eye-close')
  const [label, setLabel] = useState('word.show')

  /**
   * HandleIconSet - set the icon state
   */
  const handleIconSet = useCallback(() => {
    if (icon === 'eye') {
      setIcon('icon-eye-close')
      setHidden('text')
      setLabel(i18n.hide)
    } else {
      setIcon('icon-eye-open')
      setHidden('password')
      setLabel(i18n.show)
    }
  })

  return (
    <span className={className} onClick={handleIconSet}>
      {hasLabel ? (
        <Button hasIcon size='tiny' variant='switcher-brand'>
          <Icon icon={icon} />
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
  className: styles.showpassword,
  hasLabel: false,
  setHidden: () => null,
  i18n: {
    show: 'word.show',
    hide: 'word.hide'
  }
}

export default ShowPassword
