import React, { useState, useCallback, useRef, useMemo } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'simple-flexbox'
import Button from '@components/Button'
import Icon from '@components/Icon'
import Spreader from '@components/Spreader'
import Spinner from '@components/Spinner'
import Tooltip from '@components/Tooltip'
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
  const containerRef = useRef(null)

  const handleChange = event => setName(event.target.value)

  const labelWidth = {
    small: 190,
    big: 490
  }

  const containerStyles = useStyles({
    [styles.container]: true,
    [styles[`container--${size}`]]: size
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

  useDetectOutsideClick(containerRef, handeOutsideClick)

  useMemo(() => setName(initialName), [initialName])

  console.log(initialName)

  return (
    <div className={containerStyles} ref={containerRef} {...wrapperProps}>
      <Row className={styles.wrapper} vertical='center'>
        {!isFocused ? (
          <Tooltip
            content={name}
            placement='top'
            align='center'
            className={labelStyles}
            disabled={labelRef?.current?.offsetWidth < labelWidth[size]}
          >
            <span
              ref={labelRef}
              onClick={isClickable ? handleFocus : () => null}
              data-testid='editable-label'
            >
              {name}
            </span>
          </Tooltip>
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
