import { useState, useCallback, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'simple-flexbox'
import Button from '@components/Button'
import Icon from '@components/Icon'
import Spreader from '@components/Spreader'
import OverflowTooltip from '@components/OverflowTooltip'
import Spinner from '@components/Spinner'
import { useHover } from '@helpers/hooks/useHover'
import { useStyles } from '@helpers/hooks/useStyles'
import { useDetectOutsideClick } from '@helpers/hooks/useDetectOutsideClick'
import styles from './EditableLabel.scss'

/**
 * EditableLabel - statefull input component
 * @param {object} props - props
 * @param {string} props.initialName - init name
 * @param {string} props.placeholder - input placeholder
 * @param {function} props.onChange - callback function
 * @param {string} props.size - label size
 * @param {bool} props.isLoading - is loading
 * @param {bool} props.isDisabled - is disabled
 * @return {object} An object of children element
 */
const EditableLabel = ({
  initialName,
  placeholder,
  onChange,
  size,
  isLoading,
  isDisabled
}) => {
  const [wrapperProps, isHoveredWrapper] = useHover()
  const [isFocused, setFocused] = useState(false)
  const [lenght, setLength] = useState(20)

  const [name, setName] = useState(initialName)
  const inputRef = useRef(null)
  const labelRef = useRef(null)
  const wrapperRef = useRef(null)

  const handleChange = event => setName(event.target.value)

  const inputStyles = useStyles({
    [styles.input]: true,
    [styles[`input--${size}`]]: size
  })

  const labelStyles = useStyles({
    [styles.label]: true,
    [styles[`label--${size}`]]: size
  })

  const buttonStyles = useStyles({
    [styles.button]: true,
    [styles['button--active']]: isHoveredWrapper || isFocused
  })

  const barStyles = useStyles({
    [styles['input-bar']]: true,
    [styles['input-bar--focus']]: isFocused
  })

  const handleAccept = useCallback(() => {
    if (name.length === 0 || name === initialName) {
      setName(name)
    } else {
      onChange(name)
    }

    setFocused(false)
  }, [name, setName, onChange, inputRef, setFocused, initialName])

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Enter') {
        handleAccept()
      }
    },
    [handleAccept]
  )

  const handleFocus = useCallback(() => {
    setFocused(true)
  }, [inputRef, setFocused])

  const handeOutsideClick = useCallback(() => {
    setFocused(false)
    setName(initialName)
  }, [setFocused, name])

  useEffect(() => {
    const labelLength = size === 'small' ? 12 : 9

    const labelWidth = (labelRef.current.clientWidth / 100) * labelLength

    setLength(labelWidth)
  }, [labelRef, size])

  useDetectOutsideClick(wrapperRef, handeOutsideClick)

  return (
    <div>
      <div className={styles['wrapper']} ref={wrapperRef} {...wrapperProps}>
        <Row className={styles['input-wrapper']} vertical='center'>
          {!isFocused ? (
            <span className={labelStyles} ref={labelRef}>
              <OverflowTooltip content={name} length={lenght} placement='top' />
            </span>
          ) : (
            <input
              className={inputStyles}
              value={name}
              placeholder={placeholder}
              onChange={handleChange}
              type='text'
              onKeyDown={handleKeyDown}
              data-testid='header-input'
            />
          )}

          <span className={barStyles} />
        </Row>

        <Spreader spread='tiny' />

        {isLoading ? (
          <Spinner />
        ) : (
          !isDisabled && (
            <Button
              variant='transparent'
              className={buttonStyles}
              onClick={isFocused ? handleAccept : handleFocus}
              size={size === 'small' ? 'mini' : 'medium'}
              data-testid='header-input-button'
            >
              <Icon icon={isFocused ? 'icon-ok' : 'icon-create'} />
            </Button>
          )
        )}
      </div>
    </div>
  )
}

EditableLabel.displayName = 'EditableLabel'

EditableLabel.propTypes = {
  initialName: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  size: PropTypes.oneOfType(['small', 'medium']),
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool
}

EditableLabel.defaultProps = {
  placeholder: '',
  size: 'medium',
  isLoading: false,
  isDisabled: false
}

export default EditableLabel
