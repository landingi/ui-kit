import { Icon } from '@components/Icon'
import { CLOSE_DROPDOWN, CLOSE_INNER_DROPDOWN } from '@constants/eventTypes'
import { debounce } from '@helpers/events'
import { useStyles } from '@helpers/hooks/useStyles'
import { getBoundings } from '@helpers/position'
import emitter from '@lib/emitter'
import {
  FC,
  forwardRef,
  Fragment,
  MouseEvent,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import Ink from 'react-ink'
import { mergeRefs, useLayer } from 'react-laag'

import styles from './PerfectDropdown.module.scss'

interface PerfectDropdownProps {
  hasArrow?: boolean
  arrowType?: 'caret' | 'dots'
  size?:
    | 'mini'
    | 'small'
    | 'medium'
    | 'big'
    | 'large'
    | 'huge'
    | 'extra-huge'
    | 'auto'
    | 'fixed'
  dropdownPlacement?:
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom-center'
    | 'top-start'
    | 'top-center'
    | 'top-end'
  fontColor?: 'color-1' | 'color-3'
  fontWeight?: 400 | 600
  hasHoverLabel?: boolean
  handleOnOpen?: () => void
  handleOnClose?: () => void
  alignment?: 'center' | 'spaced' | 'end'
  children: ReactNode
  icon?: string
  label?: ReactNode
  hasInput?: boolean
  hasFullInputStyle?: boolean
  asPlaceholder?: boolean
  customTrigger?: FC<{ isOpen: boolean }>
  className?: string | string[]
  offset?: number
  padding?: 'none'
  ['data-testid']?: string
  isOpenDisabled?: boolean
  initialState?: boolean
  innerDropdown?: boolean
}

type PerfectDropdownRef = HTMLSpanElement

export const PerfectDropdown = forwardRef<
  PerfectDropdownRef,
  PerfectDropdownProps
>(
  (
    {
      children,
      icon,
      label,
      size = 'medium',
      fontColor = 'color-1',
      fontWeight = 400,
      hasHoverLabel = false,
      arrowType = 'caret',
      hasArrow = true,
      dropdownPlacement = 'bottom-end',
      handleOnOpen,
      handleOnClose,
      alignment = 'center',
      hasInput = false,
      hasFullInputStyle = false,
      asPlaceholder = false,
      customTrigger: CustomTrigger,
      offset = 5,
      className = '',
      padding,
      isOpenDisabled = false,
      'data-testid': dataTestId = 'trigger-dropdown',
      initialState = false,
      innerDropdown = false
    },
    ref
  ) => {
    const [isOpen, setOpen] = useState(initialState)

    const [style, setStyle] = useState({})

    const bodyClasses = useStyles({
      [styles.dropdown]: true,
      [styles[`dropdown--${size}`]]: true,
      [styles[`dropdown--padding-${padding}`]]: padding
    })

    const labelClasses = useStyles({
      [styles.trigger__label]: true,
      [styles['trigger__label--icon']]: icon,
      [styles[`trigger__label--${fontColor}`]]: fontColor,
      [styles[`trigger__label--${fontWeight}`]]: fontWeight,
      [styles['trigger__label--as-input']]: hasInput,
      [styles['trigger__label--placeholder']]: asPlaceholder,
      [styles['trigger__label--disabled']]: isOpenDisabled
    })

    const triggerClasses = useStyles(
      {
        [styles.trigger]: !CustomTrigger,
        [styles['trigger--spaced']]: alignment === 'spaced',
        [styles['trigger--end']]: alignment === 'end',
        [styles['trigger--input']]: hasInput,
        [styles['trigger--hover-label']]: hasHoverLabel,
        [styles['trigger--as-input']]: hasFullInputStyle,
        [styles['trigger--disabled']]: isOpenDisabled
      },
      className
    )

    const triggerRef = useRef<HTMLSpanElement>(null!)

    const close = useCallback(() => {
      handleOnClose?.()
      setOpen(false)
    }, [handleOnClose])

    const closeInnerDropdown = () => {
      if (innerDropdown) {
        close()
      }
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
      (event: MouseEvent<HTMLSpanElement>) => {
        event.stopPropagation()
        event.preventDefault()

        if (isOpenDisabled) {
          return
        }

        !isOpen && handleOnOpen?.()

        handleResize()

        setOpen(isOpen => !isOpen)
      },
      [isOpen, isOpenDisabled]
    )

    useEffect(() => {
      emitter.on(CLOSE_DROPDOWN, close)
      emitter.on(CLOSE_INNER_DROPDOWN, closeInnerDropdown)
      window.addEventListener('resize', debouncedHandleResize as EventListener)

      return () => {
        emitter.off(CLOSE_DROPDOWN, close)
        emitter.off(CLOSE_INNER_DROPDOWN, closeInnerDropdown)
        window.removeEventListener(
          'resize',
          debouncedHandleResize as EventListener
        )
      }
    }, [])

    const renderArrow = () => {
      switch (arrowType) {
        case 'caret':
          return isOpen ? (
            <Icon icon='icon-caret-up' color={fontColor} />
          ) : (
            <Icon icon='icon-caret-down' color={fontColor} />
          )
        default:
          return <Icon icon='icon-ellipsis-v' />
      }
    }

    const renderIcon = () => (
      <Icon color='color-3' icon={icon!} className={styles['dropdown-icon']} />
    )

    const renderLabel = <span className={labelClasses}>{label}</span>

    const renderTriggerContent = () =>
      CustomTrigger ? (
        <CustomTrigger isOpen={isOpen} />
      ) : (
        <Fragment>
          {icon && renderIcon()}

          {label && renderLabel}

          {hasArrow && renderArrow()}

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
          data-testid={dataTestId}
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

PerfectDropdown.displayName = 'PerfectDropdown'
