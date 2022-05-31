import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  Fragment,
  forwardRef
} from 'react'
import PropTypes from 'prop-types'
import { centerParent, getBoundings } from '@helpers/position'
import Tooltip from '@components/ui/Tooltip'
import Icon from '@components/ui/Icon'
import Ink from 'react-ink'
import { debounce, throttle } from '@helpers/events'
import { CLOSE_DROPDOWN } from '@constants/eventTypes'
import emitter from '@lib/emitter'
import { isEmpty } from '@helpers/data'
import { composeRefs } from '@helpers/ref'
import styles from './Dropdown.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

//TODO Dropdown test, mdx, jsdoc props
/**
 * Dropdown - stateless presentational component
 * @return {object} An object of children element
 */
const Dropdown = forwardRef(
  (
    {
      children,
      className,
      icon,
      tooltip,
      tooltipPlacement,
      label,
      offset,
      size,
      hasArrow,
      arrowType,
      alignment,
      dropdownPlacement,
      button,
      handleOnClick,
      handleOnOpen,
      handleOnClose,
      linkComponent,
      renderAsSmaller,
      hasInput,
      hasFullInputStyle,
      asPlaceholder,
      inModalName,
      custom,
      isOpenDisabled,
      isOnlyIcon,
      ['data-testid']: dataTestId
    },
    ref
  ) => {
    const [style, setStyle] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const containerRef = useRef(null)
    const dropdownRef = useRef(null)

    const dropdownWrapperWithTooltipStyles = useStyles({
      [styles['dropdown__wrapper']]: true,
      [styles['dropdown__wrapper--isOnlyIcon']]: isOnlyIcon
    })

    const dropdownWrapperStyles = useStyles({
      [styles['dropdown__wrapper']]: true,
      [styles[`dropdown__wrapper--${alignment}`]]: alignment
    })

    const dropdownWrapperIconStyles = useStyles({
      [styles['dropdown__wrapper']]: true,
      [styles['dropdown__wrapper__icon']]: true,
      [styles['dropdown__wrapper--isOnlyIcon']]: isOnlyIcon
    })

    const dropdownBodySizeStyles = useStyles(
      {
        [styles['dropdown']]: true,
        [styles[`dropdown--${size}`]]: size,
        [styles['dropdown--hidden']]: isEmpty(style)
      },
      className
    )

    const dropdownBodyStyles = useStyles({
      [styles['dropdown__body']]: true
    })

    const dropdownLabelStyles = useStyles({
      [styles['dropdown__label']]: true,
      [styles['dropdown__label--placeholder']]: asPlaceholder
    })

    const dropdownStyles = useStyles(
      {
        [styles['dropdown__wrapper']]: !custom,
        [styles[`dropdown__wrapper--${alignment}`]]: alignment,
        [styles['dropdown__wrapper--disabled']]: isOpenDisabled,
        [styles['dropdown__wrapper--input']]: hasInput,
        [styles['dropdown__wrapper--as-input']]: hasFullInputStyle,
        [styles['dropdown__wrapper--input--disabled']]:
          hasInput && isOpenDisabled,
        [styles['dropdown__wrapper--isOnlyIcon']]: isOnlyIcon
      },
      className
    )

    const handleShow = useCallback(
      event => {
        event.stopPropagation()

        if (isOpenDisabled) {
          return
        }

        !isOpen && handleOnOpen()

        setIsOpen(isOpen => !isOpen)
      },
      [isOpen, isOpenDisabled]
    )

    const handleClose = useCallback(
      event => {
        event.stopPropagation()

        if (
          containerRef.current &&
          !containerRef.current.contains(event.target) &&
          dropdownRef.current &&
          !dropdownRef.current.contains(event.target)
        ) {
          setIsOpen(isOpen => !isOpen)

          handleOnClose()
        }
      },
      [isOpen, containerRef, dropdownRef]
    )

    const makeClose = () => setIsOpen(false)

    const handlePosition = () => {
      const container = getBoundings(containerRef.current)
      const dropdown = getBoundings(dropdownRef.current)
      const renderAbove =
        window.innerHeight <= dropdown?.height + container?.top + offset

      if (inModalName) {
        const modal = document.getElementsByClassName(inModalName)[0]
        const modalWidth = modal?.offsetWidth || 600
        const modalHeight = modal?.offsetHeight || 600

        setStyle({
          left: container.left - (window.innerWidth - modalWidth) / 2,
          top: renderAbove
            ? container.top - dropdown.height
            : container.bottom -
              (window.innerHeight - modalHeight) / 2 +
              offset,
          width: container?.width
        })
      } else {
        if (size === 'fixed') {
          setStyle({
            left: container?.left,
            top: renderAbove
              ? container?.top - dropdown?.height
              : container?.bottom + offset,
            width: container?.width
          })
        } else if (size === 'huge') {
          setStyle({
            left:
              dropdownPlacement === 'left'
                ? (renderAsSmaller
                    ? centerParent(container?.width, 480, container?.left)
                    : centerParent(
                        container?.width,
                        dropdown?.width,
                        container?.left
                      )) - 150
                : centerParent(
                    container?.width,
                    dropdown?.width,
                    container?.left
                  ) -
                  100 +
                  dropdown?.width,
            top: renderAbove
              ? container?.top - dropdown?.height
              : container?.bottom + offset
          })
        } else {
          setStyle({
            left:
              dropdownPlacement === 'left'
                ? (renderAsSmaller
                    ? centerParent(container?.width, 240, container?.left)
                    : centerParent(
                        container?.width,
                        dropdown?.width,
                        container?.left
                      )) - 40
                : centerParent(
                    container?.width,
                    dropdown?.width,
                    container?.left
                  ) -
                  100 +
                  dropdown?.width,
            top: renderAbove
              ? container?.top - dropdown?.height
              : container?.bottom + offset
          })
        }
      }
    }

    const handleResize = () => {
      if (isOpen) {
        handlePosition()
      }
    }

    const renderDropdownWithTooltip = () => (
      <Tooltip content={tooltip} placement={tooltipPlacement}>
        <span
          ref={composeRefs(ref, containerRef)}
          onClick={handleShow}
          className={dropdownWrapperWithTooltipStyles}
          data-testid={dataTestId}
        >
          {icon && renderIcon()}

          {renderLabel()}

          <Ink />

          {hasArrow && renderArrows(isOpen, arrowType)}
        </span>
      </Tooltip>
    )

    const renderDropdown = () => (
      <span
        ref={composeRefs(ref, containerRef)}
        onClick={handleShow}
        className={dropdownStyles}
        data-testid={dataTestId}
      >
        {custom && custom}

        {icon && renderIcon()}

        {label && renderLabel()}

        {!hasInput && !custom && <Ink />}

        {hasArrow && renderArrows(isOpen, arrowType)}
      </span>
    )

    const renderDropdownWithButton = () => (
      <span className={dropdownWrapperStyles} onClick={handleOnClick}>
        {linkComponent &&
          linkComponent(
            <Fragment>
              {icon && renderIcon()}

              {label && renderLabel()}

              <Ink />
            </Fragment>
          )}

        <span
          className={dropdownWrapperIconStyles}
          ref={composeRefs(ref, containerRef)}
          onClick={handleShow}
          data-testid={dataTestId}
        >
          {hasArrow && renderArrows(isOpen, arrowType)}

          <Ink />
        </span>
      </span>
    )

    const renderDropdownBody = () => (
      <div className={dropdownBodySizeStyles} ref={dropdownRef} style={style}>
        <div className={dropdownBodyStyles}>{children}</div>
      </div>
    )

    const renderIcon = () => <Icon icon={icon} />

    const renderLabel = () => (
      <span className={dropdownLabelStyles}>{label}</span>
    )

    const renderArrows = (isOpen, arrowType) =>
      arrowType === 'caret' ? (
        isOpen ? (
          <Icon icon='icon-caret-up' />
        ) : (
          <Icon icon='icon-caret-down' />
        )
      ) : (
        <Icon icon='icon-ellipsis-v' />
      )

    useEffect(() => {
      document.addEventListener('mousedown', handleClose)
      document.addEventListener('scroll', throttle(handleClose, 500))
      document.addEventListener('resize', debounce(handleResize, 100))

      emitter.on(CLOSE_DROPDOWN, makeClose)

      return () => {
        document.removeEventListener('mousedown', handleClose)
        document.removeEventListener('scroll', handleClose)
        document.removeEventListener('resize', handleResize)

        emitter.off(CLOSE_DROPDOWN, makeClose)
      }
    }, [])

    useEffect(() => {
      if (containerRef.current && dropdownRef.current) {
        handlePosition()
      }
    }, [isOpen])

    return (
      <Fragment>
        {tooltip.length > 0
          ? renderDropdownWithTooltip()
          : button
          ? renderDropdownWithButton()
          : renderDropdown()}

        {isOpen && renderDropdownBody()}
      </Fragment>
    )
  }
)

Dropdown.displayName = 'Dropdown'

Dropdown.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  icon: PropTypes.string,
  tooltip: PropTypes.string,
  tooltipPlacement: PropTypes.string,
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  offset: PropTypes.number,
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
  hasArrow: PropTypes.bool,
  arrowType: PropTypes.oneOf(['caret', 'dots']),
  alignment: PropTypes.oneOf(['center', 'spaced', 'end']),
  dropdownPlacement: PropTypes.oneOf(['left', 'right']),
  button: PropTypes.bool,
  handleOnClick: PropTypes.func,
  handleOnOpen: PropTypes.func,
  handleOnClose: PropTypes.func,
  linkComponent: PropTypes.func,
  renderAsSmaller: PropTypes.bool,
  hasInput: PropTypes.bool,
  hasFullInputStyle: PropTypes.bool,
  asPlaceholder: PropTypes.bool,
  inModalName: PropTypes.string,
  custom: PropTypes.instanceOf(Object),
  isOpenDisabled: PropTypes.bool,
  isOnlyIcon: PropTypes.bool,
  ['data-testid']: PropTypes.string
}

Dropdown.defaultProps = {
  className: '',
  tooltip: '',
  tooltipPlacement: '',
  linkComponent: null,
  size: 'medium',
  arrowType: 'caret',
  alignment: 'center',
  dropdownPlacement: 'left',
  offset: 5,
  icon: null,
  label: null,
  custom: null,
  hasArrow: true,
  renderAsSmaller: false,
  hasInput: false,
  hasFullInputStyle: false,
  asPlaceholder: false,
  inModal: false,
  button: false,
  isOpenDisabled: false,
  isOnlyIcon: false,
  handleOnClick: () => null,
  handleOnOpen: () => null,
  handleOnClose: () => null,
  ['data-testid']: 'trigger-dropdown'
}

export default Dropdown
