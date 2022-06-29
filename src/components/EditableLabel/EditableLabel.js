import React, { useState, useCallback, useRef } from 'react'
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
import styles from './EditableLabel.module.scss'

/**
 * EditableLabel - statefull input component
 * @param {object} props - props
 * @param {string} props.initialName - init name
 * @param {string} props.placeholder - input placeholder
 * @param {string} props.size - label size
 * @param {function} props.onChange - callback function
 * @param {bool} props.isLoading - is loading
 * @param {bool} props.isDisabled - is disabled
 * @param {bool} props.isClickable - is clickable
 * @return {object} An object of children element
 */
const EditableLabel = ({
  initialName,
  placeholder,
  size,
  onChange,
  isLoading,
  isDisabled,
  isClickable
}) => {
  const [wrapperProps, isHoveredWrapper] = useHover()
  const [isFocused, setFocused] = useState(false)

  const [name, setName] = useState(initialName)
  const labelRef = useRef(null)
  const wrapperRef = useRef(null)

  const handleChange = event => setName(event.target.value)

  const wrapperStyles = useStyles({
    [styles.wrapper]: true,
    [styles[`wrapper--${size}`]]: size
  })

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
  }, [name, setName, onChange, setFocused, initialName])

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
  }, [setFocused])

  const handeOutsideClick = useCallback(() => {
    setFocused(false)
    setName(initialName)
  }, [setFocused, name])

  useDetectOutsideClick(wrapperRef, handeOutsideClick)

  return (
    <div>
      <div className={wrapperStyles} ref={wrapperRef} {...wrapperProps}>
        <Row className={styles['input-wrapper']} vertical='center'>
          {!isFocused ? (
            <span
              className={labelStyles}
              ref={labelRef}
              onClick={isClickable ? handleFocus : () => null}
              data-testid='editable-label'
            >
              <OverflowTooltip
                content={name}
                length={size === 'small' ? 21 : 44}
                placement='top'
              />
            </span>
          ) : (
            <input
              className={inputStyles}
              value={name}
              placeholder={placeholder}
              onChange={handleChange}
              type='text'
              onKeyDown={handleKeyDown}
              data-testid='editable-label-input'
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
              variant='icon-transparent'
              className={buttonStyles}
              onClick={isFocused ? handleAccept : handleFocus}
              size={size === 'small' ? 'mini' : 'medium'}
              data-testid='editable-label-button'
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
  size: PropTypes.oneOf(['small', 'big']),
  onChange: PropTypes.func,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isClickable: PropTypes.bool
}

EditableLabel.defaultProps = {
  placeholder: '',
  size: 'big',
  isLoading: false,
  isDisabled: false,
  isClickable: false
}

export default EditableLabel
