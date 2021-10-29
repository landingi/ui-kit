import React, {
  useRef,
  useState,
  useCallback,
  useEffect,
  Fragment,
  forwardRef
} from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Dropdown.scss'
import { centerParent, getBoundings } from 'shared/helpers/position'
import Tooltip from 'shared/components/ui/Tooltip'
import Ink from 'react-ink'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { debounce, throttle } from 'shared/helpers/events'
import { CLOSE_DROPDOWN } from 'shared/constants/eventTypes'
import emitter from 'shared/lib/emitter'
import { isEmpty } from 'shared/helpers/data'
import { composeRefs } from '@helpers/ref'

const cssClass = styles(scss)

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
      link,
      renderAsSmaller,
      hasInput,
      hasFullInputStyle,
      asPlaceholder,
      inModal
    },
    ref
  ) => {
    const [style, setStyle] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const containerRef = useRef(null)
    const dropdownRef = useRef(null)

    const handleShow = useCallback(
      event => {
        event.stopPropagation()

        !isOpen && handleOnOpen()

        setIsOpen(isOpen => !isOpen)
      },
      [isOpen]
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

    const makeClose = () => {
      setIsOpen(false)
    }

    const handlePosition = () => {
      const container = getBoundings(containerRef.current)
      const dropdown = getBoundings(dropdownRef.current)
      const renderAbove =
        window.innerHeight <= dropdown?.height + container?.top + offset

      if (inModal) {
        setStyle({
          marginTop: 10,
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
      if (isOpen) handlePosition()
    }

    const renderDropdownWithTooltip = () => {
      return (
        <Tooltip content={tooltip} placement={tooltipPlacement}>
          <span
            ref={composeRefs(ref, containerRef)}
            onClick={handleShow}
            className={cssClass('dropdown__wrapper')}
          >
            {icon && renderIcon()}

            {renderLabel()}

            <Ink />

            {hasArrow && renderArrows(isOpen, arrowType)}
          </span>
        </Tooltip>
      )
    }

    const renderDropdown = () => {
      const alignmentClasses = cssClass({
        'dropdown__wrapper--center': alignment === 'center',
        'dropdown__wrapper--spaced': alignment === 'spaced',
        'dropdown__wrapper--end': alignment === 'end'
      })
      return (
        <span
          ref={composeRefs(ref, containerRef)}
          onClick={handleShow}
          className={cssClass(
            'dropdown__wrapper',
            alignmentClasses,
            hasInput && 'dropdown__wrapper--input',
            hasFullInputStyle && 'dropdown__wrapper--as-input'
          )}
        >
          {icon && renderIcon()}

          {label && renderLabel()}

          {!hasInput && <Ink />}

          {hasArrow && renderArrows(isOpen, arrowType)}
        </span>
      )
    }

    const renderDropdownWithButton = () => (
      <span
        className={cssClass(
          'dropdown__wrapper',
          alignment === 'spaced'
            ? 'dropdown__wrapper--spaced'
            : 'dropdown__wrapper--center'
        )}
        onClick={handleOnClick}
      >
        <NavLink to={link} activeClassName='groups--selected'>
          {icon && renderIcon()}

          {label && renderLabel()}

          <Ink />
        </NavLink>

        <span
          className={cssClass('dropdown__wrapper', 'dropdown__wrapper__icon')}
          ref={composeRefs(ref, containerRef)}
          onClick={handleShow}
        >
          {hasArrow && renderArrows(isOpen, arrowType)}

          <Ink />
        </span>
      </span>
    )

    const renderDropdownBody = () => {
      const elementClasses = cssClass({
        'dropdown--mini': size === 'mini',
        'dropdown--small': size === 'small',
        'dropdown--medium': size === 'medium',
        'dropdown--large': size === 'large',
        'dropdown--huge': size === 'huge',
        'dropdown--extra-huge': size === 'extra-huge',
        'dropdown--auto': size === 'auto',
        'dropdown--hidden': isEmpty(style)
      })

      return (
        <div
          className={cssClass(className, elementClasses)}
          ref={dropdownRef}
          style={style}
        >
          <div className={cssClass('dropdown__body')}>{children}</div>
        </div>
      )
    }

    const renderIcon = () => <FontAwesomeIcon icon={icon} />

    const renderLabel = () => (
      <span
        className={cssClass(
          'dropdown__label',
          asPlaceholder && 'dropdown__label--placeholder'
        )}
      >
        {label}
      </span>
    )

    const renderArrows = (isOpen, arrowType) =>
      arrowType === 'caret' ? (
        isOpen ? (
          <FontAwesomeIcon icon='caret-up' />
        ) : (
          <FontAwesomeIcon icon='caret-down' />
        )
      ) : (
        <FontAwesomeIcon icon='ellipsis-v' />
      )

    useEffect(() => {
      window.addEventListener('mousedown', handleClose)
      window.addEventListener('scroll', throttle(handleClose, 500))
      window.addEventListener('resize', debounce(handleResize, 100))
      emitter.on(CLOSE_DROPDOWN, makeClose)

      return () => {
        window.removeEventListener('mousedown', handleClose)
        window.removeEventListener('scroll', handleClose)
        window.removeEventListener('resize', handleResize)

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
  alignment: PropTypes.oneOf(['center', 'spaced']),
  dropdownPlacement: PropTypes.oneOf(['left', 'right']),
  button: PropTypes.bool,
  handleOnClick: PropTypes.func,
  handleOnOpen: PropTypes.func,
  handleOnClose: PropTypes.func,
  link: PropTypes.string,
  /**
   * Render as smaller - when dropdown is too wide, it's left edge is off screen,
   * with this prop it will be render like a 240px width
   * default: false
   */
  renderAsSmaller: PropTypes.bool,
  hasInput: PropTypes.bool,
  /**
   * Has Input full Input style
   * default: false
   * when its enabled dropdown looks like select in forms
   */
  hasFullInputStyle: PropTypes.bool,
  /**
   * as Placeholder
   * default: false
   * label is styled as input placeholder
   */
  asPlaceholder: PropTypes.bool,
  inModal: PropTypes.bool
}

Dropdown.defaultProps = {
  offset: 5,
  className: 'dropdown',
  icon: null,
  label: null,
  tooltip: '',
  tooltipPlacement: '',
  size: 'medium',
  hasArrow: true,
  arrowType: 'caret',
  alignment: 'center',
  dropdownPlacement: 'left',
  handleOnClick: () => null,
  handleOnOpen: () => null,
  handleOnClose: () => null,
  link: '',
  renderAsSmaller: false,
  hasInput: false,
  hasFullInputStyle: false,
  asPlaceholder: false,
  inModal: false,
  button: false
}

export default Dropdown
