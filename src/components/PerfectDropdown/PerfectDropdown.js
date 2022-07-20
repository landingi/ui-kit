import React, {
  Fragment,
  useState,
  useEffect,
  useCallback,
  useRef,
  forwardRef
} from 'react'
import { useLayer, mergeRefs } from 'react-laag'
import styles from './PerfectDropdown.module.scss'
import Icon from '@components/Icon'
import emitter from '@lib/emitter'
import { CLOSE_DROPDOWN } from '@constants/eventTypes'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import { getBoundings } from '@helpers/position'
import { debounce } from '@helpers/events'
import Ink from 'react-ink'
import Spreader from '@components/Spreader'

/**
 * PerfectDropdown - new version of dropdown using react-laag library
 * @param {object} props - props
 * @param {object} children - object of children
 * @param {string} icon - icon displayed left to label, it isn't displayed when customTrigger is given
 * @param {string} label - label text, it isn't displayed when customTrigger is given
 * @param {string} size - size
 * @param {string} arrowType - type of arrow to display right to label, it isn't displayed when customTrigger is given
 * @param {string} hasArrow - whether arrow should be displayed or not
 * @param {string} dropdownPlacement - dropdown placement
 * @param {function} handleOnOpen - function that will be called when dropdown opens
 * @param {function} handleOnClose - function that will be called when dropdown closes
 * @param {string} alignment - aligment of dropdown trigger elements (icon, label and arrow)
 * @param {string} hasInput - adds styling if dropdown is used as input
 * @param {string} hasFullInputStyle - adds some other styling if dropdown is used as input
 * @param {bool} asPlaceholder - changes color of the label so it looks like placeholder
 * @param {function} customTrigger - lets you display your custom trigger for dropdown. It uses render props,
 * so you have to pass a function there () => <YourTrigger />. It allows you to use state derived from this
 * dropdown in your custom trigger as props, for example isOpen.
 * @param {number} offset - offset between trigger and dropdown
 * @param {string} className - className of dropdown trigger, allow adjustments of position etc.
 */
const PerfectDropdown = forwardRef(
  (
    {
      children,
      icon,
      label,
      size,
      arrowType,
      hasArrow,
      dropdownPlacement,
      handleOnOpen,
      handleOnClose,
      alignment,
      hasInput,
      hasFullInputStyle,
      asPlaceholder,
      customTrigger: CustomTrigger,
      offset,
      className
    },
    ref
  ) => {
    const [isOpen, setOpen] = useState(false)

    const [style, setStyle] = useState({})

    const bodyClasses = useStyles({
      [styles['dropdown']]: true,
      [styles[`dropdown--${size}`]]: true
    })

    const labelClasses = useStyles({
      [styles['trigger__label']]: true,
      [styles['trigger__label--icon']]: icon,
      [styles['trigger__label--as-input']]: hasInput,
      [styles['trigger__label--placeholder']]: asPlaceholder
    })

    const triggerClasses = useStyles(
      {
        [styles['trigger']]: !CustomTrigger,
        [styles['trigger--spaced']]: alignment === 'spaced',
        [styles['trigger--end']]: alignment === 'end',
        [styles['trigger--input']]: hasInput,
        [styles['trigger--as-input']]: hasFullInputStyle
      },
      className
    )

    const triggerRef = useRef()

    const close = () => {
      setOpen(false)
      handleOnClose()
    }

    const { renderLayer, triggerProps, layerProps } = useLayer({
      isOpen,
      auto: true,
      snap: false,
      triggerOffset: offset,
      placement: dropdownPlacement,
      possiblePlacements: [
        'bottom-start',
        'bottom-end',
        'bottom-center',
        'top-start',
        'top-center',
        'top-end'
      ],
      onOutsideClick: close
    })

    const handleResize = () => {
      if (size !== 'fixed') {
        return
      }

      const container = getBoundings(triggerRef.current)

      setStyle({ width: container?.width })
    }

    const debouncedHandleResize = useCallback(debounce(handleResize, 50), [])

    const handleShow = useCallback(
      event => {
        event.stopPropagation()
        event.preventDefault()

        !isOpen && handleOnOpen()

        handleResize()

        setOpen(isOpen => !isOpen)
      },
      [isOpen]
    )

    useEffect(() => {
      emitter.on(CLOSE_DROPDOWN, close)
      window.addEventListener('resize', debouncedHandleResize)

      return () => {
        emitter.off(CLOSE_DROPDOWN, close)
        window.removeEventListener('resize', debouncedHandleResize)
      }
    }, [])

    const renderArrow =
      arrowType === 'caret' ? (
        isOpen ? (
          <Icon icon='icon-caret-up' />
        ) : (
          <Icon icon='icon-caret-down' />
        )
      ) : (
        <Icon icon='icon-ellipsis-v' />
      )

    const renderIcon = (
      <Fragment>
        <Icon color='color-3' icon={icon} className={styles['dropdown-icon']} />

        {label && hasArrow && <Spreader spread='tiny' />}
      </Fragment>
    )

    const renderLabel = <span className={labelClasses}>{label}</span>

    const renderTriggerContent = () =>
      CustomTrigger ? (
        <CustomTrigger isOpen={isOpen} />
      ) : (
        <Fragment>
          {icon && renderIcon}

          {label && renderLabel}

          {hasArrow && renderArrow}

          {!hasInput && <Ink />}
        </Fragment>
      )

    return (
      <Fragment>
        <span
          {...triggerProps}
          className={triggerClasses}
          onClick={handleShow}
          ref={mergeRefs(triggerProps?.ref, triggerRef, ref)}
          data-testid='dropdown'
        >
          {renderTriggerContent()}
        </span>

        {isOpen &&
          renderLayer(
            <span
              {...layerProps}
              className={bodyClasses}
              style={{ ...layerProps?.style, ...style }}
            >
              {children}
            </span>
          )}
      </Fragment>
    )
  }
)

PerfectDropdown.propTypes = {
  hasArrow: PropTypes.bool,
  arrowType: PropTypes.oneOf(['caret', 'dots']),
  size: PropTypes.oneOf([
    'mini',
    'small',
    'medium',
    'big',
    'large',
    'huge',
    'extra-huge',
    'auto',
    'fixed'
  ]),
  dropdownPlacement: PropTypes.string,
  handleOnOpen: PropTypes.func,
  handleOnClose: PropTypes.func,
  alignment: PropTypes.oneOf(['center', 'spaced', 'end']),
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  hasInput: PropTypes.bool,
  hasFullInputStyle: PropTypes.bool,
  asPlaceholder: PropTypes.bool,
  customTrigger: PropTypes.func,
  className: PropTypes.string,
  offset: PropTypes.number
}

PerfectDropdown.defaultProps = {
  hasArrow: true,
  arrowType: 'caret',
  size: 'medium',
  dropdownPlacement: 'bottom-end',
  handleOnOpen: () => null,
  handleOnClose: () => null,
  alignment: 'center',
  icon: null,
  label: null,
  hasInput: false,
  hasFullInputStyle: false,
  asPlaceholder: false,
  customTrigger: null,
  className: '',
  offset: 5
}

PerfectDropdown.displayName = 'PerfectDropdown'

export default PerfectDropdown
