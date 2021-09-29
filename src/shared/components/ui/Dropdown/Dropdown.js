import React, { Fragment, PureComponent } from 'react'
import PropTypes from 'prop-types'
import {
  centerParent,
  getBoundings
} from '@helpers/position'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Tooltip from '@components/ui/Tooltip'
import { FormattedMessage } from 'react-intl'
/**
 * Add the Material Design ripple effect to React component
 * @see {@link https://github.com/vigetlabs/react-ink} for further information.
 */
import Ink from 'react-ink'
import { debounce, throttle } from '@helpers/events'
import { styles } from '@helpers/css'
import scss from './Dropdown.scss'
import { NavLink } from 'react-router-dom'
import emitter from '@lib/emitter'
import { CLOSE_DROPDOWN } from '@constants/eventTypes'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Dropdown - stateful presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `dropdown`
 * @param {string} props.icon - Icon
 * @param {string} props.label - Label
 * @param {string} props.tooltip - Tooltip
 * @param {string} props.tooltipPlacement - Tooltip placement
 * @param {number} props.offset - Offset
 * @param {string} props.size - Size
 * @param {bool} props.hasArrow - Has arrow
 * @param {string} props.arrowType - Arrow type
 * @param {string} props.dropdownPlacement - Dropdown placment
 * @param {bool} props.button - button, default: `false`
 * @param {function} props.handleOnClick - handleOnClick function, when button is `true`
 * @param {function} props.handleOnOpen - on click event
 * @param {string} props.link - navlink
 * @param {string} props.alignment - Alignment, default `center`
 * @param {function} props.handleOnClose - on click event
 * @param {bool} props.renderAsSmaller - when dropdown is too wide, it's left edge is off screen, default: false
 * @param {bool} props.hasInput - Has Input style, default: false
 * @param {bool} props.hasFullInputStyle - Has Input full Input style, default: false
 * @param {bool} props.asPlaceholder - as Placeholder, default: false
 * @param {bool} props.inModal - in Modal, default: false
 * @return {object} An object of children element
 */
class Dropdown extends PureComponent {
  /**
   * Display name
   * @type {string}
   */
  displayName = 'Dropdown'

  /**
   * Ref container
   * @type {function}
   * @return {object}
   */
  containerRef = React.createRef()

  /**
   * Ref dropdown
   * @type {function}
   * @return {object}
   */
  dropdownRef = React.createRef()

  /**
   * The default properties.
   * @type {Object}
   */
  static defaultProps = {
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
    button: false,
    handleOnClick: () => null,
    handleOnOpen: () => null,
    handleOnClose: () => null,
    link: '',
    renderAsSmaller: false,
    hasInput: false,
    hasFullInputStyle: false,
    asPlaceholder: false,
    inModal: false
  }

  /**
   * The properties.
   * @type {Object}
   */
  static propTypes = {
    children: PropTypes.node.isRequired,
    /**
     * Classname, default `dropdown`
     */
    className: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array
    ]),
    /**
     * Icon
     */
    icon: PropTypes.string,
    /**
     * Tooltip
     */
    tooltip: PropTypes.string,
    /**
     * Tooltip placement
     */
    tooltipPlacement: PropTypes.string,
    /**
     * Label
     */
    label: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
    ]),
    /**
     * Offset, default `5`
     */
    offset: PropTypes.number,
    /**
     * Size
     */
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
    /**
     * Has arrow, default `false`
     */
    hasArrow: PropTypes.bool,
    /**
     * Arrow type, default `caret`
     */
    arrowType: PropTypes.oneOf(['caret', 'dots']),
    /**
     * Alignment, default `center`
     */
    alignment: PropTypes.oneOf(['center', 'spaced']),
    /**
     * Dropdown placement, default `left`
     */
    dropdownPlacement: PropTypes.oneOf(['left', 'right']),
    /**
     * Button, default `false`
     */
    button: PropTypes.bool,
    /**
     * Handle on click
     */
    handleOnClick: PropTypes.func,
    /**
     * HandleOnOpen
     */
    handleOnOpen: PropTypes.func,
    /**
     * OnClose callback
     */
    handleOnClose: PropTypes.func,
    /**
     * Navlink
     */
    link: PropTypes.string,
    /**
     * Render as smaller - when dropdown is too wide, it's left edge is off screen,
     * with this prop it will be render like a 240px width
     * default: false
     */
    renderAsSmaller: PropTypes.bool,
    /**
     * Has Input style
     * default: false
     */
    hasInput: PropTypes.bool,
    /**
     * Has Input full Input style
     * default: false
     * when its enabled dropdown looks like select in forms
     */
    hasFullInputStyle: PropTypes.bool,
    /**
     * As Placeholder
     * default: false
     * label is styled as input placeholder
     */
    asPlaceholder: PropTypes.bool,
    /**
     * In Modal
     * default: false
     */
    inModal: PropTypes.bool
  }

  /**
   * State
   * @type {object}
   * @return {object}
   */
  state = {
    isOpen: false,
    style: {}
  }

  /**
   * Called on show
   *
   * Toggles the isOpen state of the dropdown
   * @param {MouseEvent} event
   * @type {function}
   */
  handleShow = event => {
    const { handleOnOpen } = this.props,
      { isOpen } = this.state

    event.stopPropagation()

    !isOpen && handleOnOpen()

    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }))
  }

  /**
   * Called on close
   *
   * Toggles the isOpen state of the dropdown
   * @param {MouseEvent} event
   * @type {function}
   */
  handleClose = event => {
    const { handleOnClose } = this.props
    event.stopPropagation()

    if (
      this.containerRef.current &&
      !this.containerRef.current.contains(event.target) &&
      this.dropdownRef.current &&
      !this.dropdownRef.current.contains(event.target)
    ) {
      this.setState(prevState => ({
        isOpen: !prevState.isOpen
      }))
      handleOnClose()
    }
  }

  /**
   * Called to trigger close on event
   *
   * @type {function}
   */
  makeClose = () => {
    this.setState(() => ({
      isOpen: false
    }))
  }

  /**
   * Handles the position of the dropdown
   *
   * Set offset left & top
   * @type {function}
   */
  handlePosition = () => {
    const {
        offset,
        dropdownPlacement,
        renderAsSmaller,
        size,
        inModal
      } = this.props,
      container = getBoundings(this.containerRef.current),
      dropdown = getBoundings(this.dropdownRef.current),
      renderAbove =
        window.innerHeight <=
        dropdown?.height + container?.top + offset

    if (inModal) {
      this.setState({
        style: {
          marginTop: 10,
          width: container?.width
        }
      })
    } else if (size === 'fixed') {
      this.setState({
        style: {
          left: container?.left,
          top: renderAbove
            ? container?.top - dropdown?.height
            : container?.bottom + offset,
          width: container?.width
        }
      })
    } else if (size === 'huge') {
      this.setState({
        style: {
          left:
            dropdownPlacement === 'left'
              ? (renderAsSmaller
                  ? centerParent(
                      container?.width,
                      480,
                      container?.left
                    )
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
        }
      })
    } else {
      this.setState({
        style: {
          left:
            dropdownPlacement === 'left'
              ? (renderAsSmaller
                  ? centerParent(
                      container?.width,
                      240,
                      container?.left
                    )
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
        }
      })
    }
  }

  /**
   * Called while resizing.
   *
   * Toggles the collapse state of the sidebar
   * @type {function}
   */
  handleResize = () => {
    const { isOpen } = this.state

    if (isOpen) this.handlePosition()
  }

  /**
   * Render dropdown with tooltip
   * @type {function}
   */
  renderDropdownWithTooltip = () => {
    const {
        icon,
        tooltip,
        tooltipPlacement,
        hasArrow,
        arrowType
      } = this.props,
      { isOpen } = this.state

    return (
      <Tooltip
        content={<FormattedMessage id={`${tooltip}`} />}
        placement={tooltipPlacement}
      >
        <span
          className={cssClass('dropdown__wrapper')}
          onClick={this.handleShow}
          ref={this.containerRef}
        >
          {icon && this.renderIcon()}

          {this.renderLabel()}

          <Ink />

          {hasArrow && this.renderArrows(isOpen, arrowType)}
        </span>
      </Tooltip>
    )
  }

  /**
   * Render dropdown
   * @type {function}
   */
  renderDropdown = () => {
    const {
        label,
        icon,
        hasArrow,
        arrowType,
        alignment,
        hasInput,
        hasFullInputStyle
      } = this.props,
      { isOpen } = this.state

    return (
      <span
        className={cssClass(
          'dropdown__wrapper',
          alignment === 'spaced'
            ? 'dropdown__wrapper--spaced'
            : 'dropdown__wrapper--center',
          hasInput && 'dropdown__wrapper--input',
          hasFullInputStyle && 'dropdown__wrapper--as-input'
        )}
        onClick={this.handleShow}
        ref={this.containerRef}
      >
        {icon && this.renderIcon()}

        {label && this.renderLabel()}

        {!hasInput && <Ink />}

        {hasArrow && this.renderArrows(isOpen, arrowType)}
      </span>
    )
  }

  /**
   * Render dropdown with button and react-router <NavLink/>
   * @type {function}
   */
  renderDropdownWithButton = () => {
    const {
        label,
        icon,
        hasArrow,
        arrowType,
        alignment,
        handleOnClick,
        link
      } = this.props,
      { isOpen } = this.state

    return (
      <span
        className={cssClass(
          'dropdown__wrapper',
          alignment === 'spaced'
            ? 'dropdown__wrapper--spaced'
            : 'dropdown__wrapper--center'
        )}
        onClick={handleOnClick}
      >
        <NavLink
          activeClassName='groups--selected'
          to={link}
        >
          {icon && this.renderIcon()}

          {label && this.renderLabel()}

          <Ink />
        </NavLink>

        <span
          className={cssClass(
            'dropdown__wrapper',
            'dropdown__wrapper__icon'
          )}
          onClick={this.handleShow}
          ref={this.containerRef}
        >
          {hasArrow && this.renderArrows(isOpen, arrowType)}

          <Ink />
        </span>
      </span>
    )
  }

  /**
   * Render dropdown body
   * @type {function}
   */
  renderDropdownBody = () => {
    const { children, className, size } = this.props,
      { style } = this.state,
      elementClasses = cssClass({
        'dropdown--mini': size === 'mini',
        'dropdown--small': size === 'small',
        'dropdown--medium': size === 'medium',
        'dropdown--large': size === 'large',
        'dropdown--huge': size === 'huge',
        'dropdown--extra-huge': size === 'extra-huge',
        'dropdown--auto': size === 'auto'
      })

    return (
      <div
        className={cssClass(className, elementClasses)}
        ref={this.dropdownRef}
        style={style}
      >
        <div className={cssClass('dropdown__body')}>
          {children}
        </div>
      </div>
    )
  }

  /**
   * Render icon
   * @type {function}
   */
  renderIcon = () => {
    const { icon } = this.props

    return <FontAwesomeIcon icon={icon} />
  }

  /**
   * Render label
   * @type {function}
   */
  renderLabel = () => {
    const { label, asPlaceholder } = this.props

    return (
      <span
        className={cssClass(
          'dropdown__label',
          asPlaceholder && 'dropdown__label--placeholder'
        )}
      >
        {label}
      </span>
    )
  }

  /**
   * Render arrows
   * @type {function}
   */
  renderArrows = (isOpen, arrowType) =>
    arrowType === 'caret' ? (
      isOpen ? (
        <FontAwesomeIcon icon='caret-up' />
      ) : (
        <FontAwesomeIcon icon='caret-down' />
      )
    ) : (
      <FontAwesomeIcon icon='ellipsis-v' />
    )

  /**
   * A react lifecycle method called when the component did update.
   * It handles the position
   * @type {function}
   */
  componentDidUpdate(prevProps, prevState) {
    const { isOpen } = this.state

    if (
      prevState.isOpen !== isOpen &&
      this.containerRef.current &&
      this.dropdownRef.current
    ) {
      this.handlePosition()
    }
  }

  /**
   * A react lifecycle method called when the component did mount.
   * It adds event listeners on resize and DOMContentLoaded after mounting.
   * @type {function}
   */
  componentDidMount() {
    window.addEventListener('mousedown', this.handleClose)
    window.addEventListener(
      'scroll',
      throttle(this.handleClose, 500)
    )
    window.addEventListener(
      'resize',
      debounce(this.handleResize, 100)
    )

    emitter.on(CLOSE_DROPDOWN, this.makeClose)
  }

  /**
   * A react lifecycle method called when the component will unmount.
   * Removes event listeners on resize and mousedown after unmount.
   * @type {function}
   */
  componentWillUnmount() {
    window.removeEventListener(
      'mousedown',
      this.handleClose
    )
    window.removeEventListener('scroll', this.handleClose)
    window.removeEventListener('resize', this.handleResize)

    emitter.off(CLOSE_DROPDOWN, this.makeClose)
  }

  /**
   * The render function
   * @type {function}
   */
  render() {
    const { tooltip, button } = this.props,
      { isOpen } = this.state

    return (
      <>
        {tooltip.length > 0
          ? this.renderDropdownWithTooltip()
          : button
          ? this.renderDropdownWithButton()
          : this.renderDropdown()}

        {isOpen && this.renderDropdownBody()}
      </>
    )
  }
}

export default Dropdown
