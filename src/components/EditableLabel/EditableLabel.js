/* eslint-disable react/react-in-jsx-scope */
import { useState, useCallback, useRef, useEffect } from 'react'
import PropTypes from 'prop-types'
import { Row } from 'simple-flexbox'
import Button from '@components/Button'
import Icon from '@components/Icon'
import Spreader from '@components/Spreader'
import OverflowTooltip from '@components/OverflowTooltip'
import { useHover } from '@helpers/hooks/useHover'
import { useStyles } from '@helpers/hooks/useStyles'
import { useDetectOutsideClick } from '@helpers/hooks/useDetectOutsideClick'
import styles from './EditableLabel.module.scss'

/**
 * HeaderInput - statefull input component
 * @param {object} props - props
 * @param {string} props.initialName - init name
 * @param {function} props.onChange - callback function
 * @return {object} An object of children element
 */
const HeaderInput = ({ initialName, onChange, size }) => {
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
    // [styles['input-bar--hover']]: isHoveredWrapper,
    [styles['input-bar--focus']]: isFocused
  })

  const handleAccept = useCallback(() => {
    if (name.length === 0 || name === initialName) {
      setName(initialName)
    } else {
      onChange(name)
    }

    // inputRef.current.blur()
    setFocused(false)
  }, [name, setName, onChange, inputRef, setFocused])

  const handleKeyDown = useCallback(
    event => {
      if (event.key === 'Enter') {
        handleAccept()
      }
    },
    [handleAccept]
  )

  const handleFocus = useCallback(() => {
    // inputRef.current.focus()
    setFocused(true)
  }, [inputRef, setFocused])

  const handeOutsideClick = useCallback(() => {
    setFocused(false)
    setName(initialName)
  }, [setFocused, name])

  useEffect(() => {
    console.log(labelRef.current.clientWidth)

    const labelWidth = (labelRef.current.clientWidth / 100) * 7
    setLength(labelWidth)
    console.log(labelWidth)
  }, [labelRef])

  useDetectOutsideClick(wrapperRef, handeOutsideClick)

  return (
    <div ref={wrapperRef}>
      <Row className={styles['input-wrapper']} {...wrapperProps}>
        {!isFocused ? (
          <span className={labelStyles} ref={labelRef}>
            <OverflowTooltip
              content={name}
              length={isHoveredWrapper ? lenght - 3 : lenght}
              placement='top'
            />
          </span>
        ) : (
          <input
            className={inputStyles}
            value={name}
            onChange={handleChange}
            type='text'
            onKeyDown={handleKeyDown}
            // ref={inputRef}
            // onFocus={handleFocus}
            data-testid='header-input'
          />
        )}

        <span className={barStyles} />

        <Spreader spread='tiny' />

        <Button
          variant='icon-transparent'
          className={buttonStyles}
          onClick={isFocused ? handleAccept : handleFocus}
          size={size === 'small' ? 'mini' : 'medium'}
          data-testid='header-input-button'
        >
          <Icon icon={isFocused ? 'icon-ok' : 'icon-create'} />
        </Button>
      </Row>
    </div>
  )
}

HeaderInput.displayName = 'HeaderInput'

HeaderInput.propTypes = {
  initialName: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  size: PropTypes.oneOfType(['small', 'medium'])
}

HeaderInput.defaultProps = {
  size: 'medium'
}

export default HeaderInput
