import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import PropTypes from 'prop-types'
import React, { useCallback, useState } from 'react'
import scss from './ShowPassword.scss'

const cssClass = styles(scss)
/**
 * ShowPassword - stateful presentational component
 * @param {object} props - props
 * @param {string|array} props.className
 * @param {bool} props.setHidden
 * @param {bool} props.hasLabel
 * @return {object} An object of children element
 */
const ShowPassword = ({ className, setHidden, hasLabel }) => {
  const [icon, setIcon] = useState('eye')
  const [label, setLabel] = useState('word.show')

  /**
   * HandleIconSet - set the icon state
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
    <span className={cssClass(className)} onClick={handleIconSet}>
      {hasLabel ? (
        <Button hasIcon size='tiny' variant='switcher-brand'>
          <FontAwesomeIcon icon={icon} />
          {label}
        </Button>
      ) : (
        <Button variant='icon'>
          <FontAwesomeIcon icon={icon} />
        </Button>
      )}
    </span>
  )
}

ShowPassword.displayName = 'ShowPassword'

ShowPassword.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  hasLabel: PropTypes.bool,
  setHidden: PropTypes.func
}

ShowPassword.defaultProps = {
  className: 'showpassword',
  hasLabel: false,
  setHidden: () => null
}

export default ShowPassword
