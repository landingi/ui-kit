import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import { styles } from '@helpers/css'
import Backdrop from '@components/ui/Backdrop'
import Button from '@components/ui/Button'
import Close from '@components/ui/Close'
import Divider from '@components/ui/Divider'
import Image from '@components/ui/Image'
import Loader from '@components/ui/Loader'
import ModalFooter from './Footer'
import ModalHeader from './Header'
import Overflow from '@components/ui/Overflow'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Spacer from '@components/ui/Spacer'
import Spreader from '@components/ui/Spreader'
import posed, { PoseGroup } from 'react-pose'
import scss from './Modal.scss'

/**
 * Modal Animation, exports React-pose animations
 * @see {@link https://popmotion.io/pose/api/} for further information.
 * @return {object} An object of styles
 */
const ModalAnimation = posed.div({
    enter: {},
    exit: {}
  }),
  /**
   * Exports css classes from SCSS file
   * @return {object} An object of styles
   */
  cssClass = styles(scss),
  /**
   * Modal - stateless presentational component
   * @param {object} props - props
   * @param {object} props.children - children
   * @param {string|array} props.className - list of class names, default: modal
   * @param {function} props.onClick - onClick handler
   * @param {function} props.onAction - onAction click handler
   * @param {boolean} props.isActive - active state
   * @param {boolean} props.isClosable - close state
   * @param {boolean} props.isButtonDisabled - is action button in footer disabled
   * @param {boolean} props.isButtonLoading - is action button in footer has loading state
   * @param {boolean} props.isMarkAsSpamVisible - is "mark as spam" button visible
   * @param {string} props.title - title
   * @param {object} props.image - image in header
   * @param {boolean} props.hasFooter - has footer
   * @param {string} props.i18Action - action button translation
   * @param {string} props.i18Cancel - cancel button translation
   * @param {boolean} props.hasHeaderDivider - has header divider
   * @param {string} props.actionVariant - button action variant
   * @param {bool} props.isLoading - is loading
   * @param {string} props.actionIcon - footer action button icon
   * @param {object} props.overflowStyle - overflowStyle
   * @param {bool} props.isFullscreen - makes modal fullscreen size
   * @param {bool} props.isCentered - makes text in modal centered
   * @param {bool} props.isEditable - isEditable
   * @param {func} props.onEdit - onEdit
   * @param {bool} props.hasCustomButton - secondary button
   * @param {func} props.onClickCustomButton - secondary button with custom callback
   * @param {bool} props.isCustomButtonDisabled - is custom button in footer disabled
   * @param {func} props.onMarkAsSpam - handle "mark as spam" click
   * @param {bool} props.isComponent - component instead of title
   * @param {object} props.component - component
   * @param {bool} props.isSubmit - modal button is submit type
   * @return {object} An object of children element
   */
  modal = ({
    children,
    className,
    onClick,
    onAction,
    isActive,
    isClosable,
    isButtonDisabled,
    isButtonLoading,
    isMarkAsSpamVisible,
    title,
    image,
    hasFooter,
    i18Action,
    i18Cancel,
    hasHeaderDivider,
    actionVariant,
    isLoading,
    actionIcon,
    overflowStyle,
    isFullscreen,
    isCentered,
    isEditable,
    onEdit,
    hasCustomButton,
    onClickCustomButton,
    isCustomButtonDisabled,
    onMarkAsSpam,
    isComponent,
    component,
    isSubmit
  }) => {
    const renderTitle = () => (
        <div className={scss.modal__header}>
          {title && <ModalHeader title={title} />}

          {image && (
            <Image height={20} size='auto' src={image} />
          )}

          <div>
            {isMarkAsSpamVisible && (
              <Button
                onClick={onMarkAsSpam}
                variant='transparent'
              >
                <FontAwesomeIcon icon='ban' />

                <FormattedMessage id='word.mark-as-spam' />
              </Button>
            )}

            {isEditable && (
              <Button onClick={onEdit} variant='icon'>
                <FontAwesomeIcon icon='pencil-alt' />
              </Button>
            )}

            <Spreader spread='tiny' />

            {isClosable && <Close onClick={onClick} />}
          </div>
        </div>
      ),
      renderComponent = () => (
        <div className={cssClass('modal__component')}>
          <div
            className={cssClass('modal__component--child')}
          >
            {component}
          </div>

          {isClosable && <Close onClick={onClick} />}
        </div>
      )

    return (
      <>
        <PoseGroup animateOnMount flipMove={false}>
          {isActive && (
            <ModalAnimation
              className={scss.dialog}
              key='ModalAnimation'
            >
              <div
                className={cssClass(className, {
                  'modal--center': isCentered,
                  'modal--fullscreen': isFullscreen
                })}
              >
                {isLoading ? (
                  <div className={scss.modal__body}>
                    <Loader />
                  </div>
                ) : (
                  <>
                    {(isClosable ||
                      title ||
                      image ||
                      isEditable) &&
                      (!isComponent
                        ? renderTitle()
                        : renderComponent())}

                    {hasHeaderDivider && (
                      <>
                        <Spacer space='small' />

                        <Divider />
                      </>
                    )}

                    <div className={scss.modal__body}>
                      <div style={overflowStyle}>
                        <Overflow>{children}</Overflow>
                      </div>
                    </div>

                    {hasFooter && (
                      <ModalFooter align='right'>
                        {hasCustomButton ? (
                          <Button
                            isDisabled={
                              isCustomButtonDisabled
                            }
                            onClick={onClickCustomButton}
                            size='medium'
                            variant='secondary'
                          >
                            <FormattedMessage
                              id={`${i18Cancel}`}
                            />
                          </Button>
                        ) : (
                          <Button
                            onClick={onClick}
                            size='medium'
                            variant='secondary'
                          >
                            <FormattedMessage
                              id={`${i18Cancel}`}
                            />
                          </Button>
                        )}

                        <Button
                          hasIcon={Boolean(actionIcon)}
                          isDisabled={isButtonDisabled}
                          isLoading={isButtonLoading}
                          onClick={onAction}
                          size='medium'
                          type={
                            isSubmit ? 'submit' : 'button'
                          }
                          variant={actionVariant}
                        >
                          {actionIcon && (
                            <FontAwesomeIcon
                              icon={actionIcon}
                              size='xs'
                            />
                          )}

                          <FormattedMessage
                            id={`${i18Action}`}
                          />
                        </Button>
                      </ModalFooter>
                    )}
                  </>
                )}
              </div>
            </ModalAnimation>
          )}
        </PoseGroup>

        {isActive && <Backdrop onClick={onClick} />}
      </>
    )
  }

/**
 * Display name
 * @type {string}
 */
modal.displayName = 'Modal'

/**
 * The properties.
 * @type {Object}
 */
modal.propTypes = {
  /**
   * ActionButtonIcon action button icon
   */
  actionIcon: PropTypes.string,

  /**
   * ActionVariant action button variant
   */
  actionVariant: PropTypes.string,

  /**
   * Children elements
   */
  children: PropTypes.node,

  /**
   * Classname, default `modal`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),

  /**
   * Component
   */
  component: PropTypes.node,

  /**
   * HasCustomButton - custom button
   */
  hasCustomButton: PropTypes.bool,

  /**
   * HasFooter
   */
  hasFooter: PropTypes.bool,

  /**
   * HasHeaderDivider
   */
  hasHeaderDivider: PropTypes.bool,

  /**
   * I18Action button translation
   */
  i18Action: PropTypes.string,

  /**
   * I18Cancel button translation
   */
  i18Cancel: PropTypes.string,

  /**
   * Image
   */
  image: PropTypes.string,

  /**
   * IsActive, active state
   */
  isActive: PropTypes.bool.isRequired,

  /**
   * IsButtonDisabled is action button disabled
   */
  isButtonDisabled: PropTypes.bool,

  /**
   * IsButtonLoading ha action button loading state
   */
  isButtonLoading: PropTypes.bool,

  /**
   * IsCentered - makes text in modal centered
   */
  isCentered: PropTypes.bool,

  /**
   * IsClosable
   */
  isClosable: PropTypes.bool,

  /**
   * IsComponent is intead of title
   */
  isComponent: PropTypes.bool,

  /**
   * IsCustomButtonDisabled is action button disabled
   */
  isCustomButtonDisabled: PropTypes.bool,

  /**
   * IsEditable
   */
  isEditable: PropTypes.bool,

  /**
   * Gets called when the user clicks
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onAction: PropTypes.func,

  /**
   * IsFullscreen - makes modal fullscreen size
   */
  isFullscreen: PropTypes.bool,

  /**
   * Gets called when the user clicks
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func,

  /**
   * IsLoading
   */
  isLoading: PropTypes.bool,

  /**
   * IsMarkAsSpamVisible is "mark as spam" button visible
   */
  isMarkAsSpamVisible: PropTypes.bool,

  /**
   * IsSubmit
   */
  isSubmit: PropTypes.bool,

  /**
   * Title
   */
  title: PropTypes.string,

  /**
   * OnEdit
   */
  onEdit: PropTypes.func,

  /**
   * OnMarkAsSpam
   */
  onMarkAsSpam: PropTypes.func,

  /**
   * OverflowStyle
   */
  overflowStyle: PropTypes.instanceOf(Object)
}

/**
 * The default properties.
 * @type {Object}
 */
modal.defaultProps = {
  actionIcon: null,
  actionVariant: 'primary',
  children: null,
  className: 'modal',
  component: null,
  hasCustomButton: false,
  hasFooter: false,
  hasHeaderDivider: false,
  i18Action: 'word.save',
  i18Cancel: 'word.cancel',
  image: '',
  isButtonDisabled: false,
  isButtonLoading: false,
  isCentered: false,
  isClosable: true,
  isComponent: false,
  isCustomButtonDisabled: false,
  isEditable: false,
  isFullscreen: false,
  isLoading: false,
  isMarkAsSpamVisible: false,
  isSubmit: false,
  onAction: () => null,
  onClick: () => null,
  onEdit: () => null,
  onMarkAsSpam: () => null,
  overflowStyle: {
    maxHeight: '80vh',
    overflowY: 'auto'
  },
  title: ''
}

export default modal
