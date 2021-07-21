import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Modal.scss'
import Backdrop from 'shared/components/ui/Backdrop'
import Close from 'shared/components/ui/Close'
import Spreader from 'shared/components/ui/Spreader'
import Overflow from 'shared/components/ui/Overflow'
import Divider from 'shared/components/ui/Divider'
import Spacer from 'shared/components/ui/Spacer'
import ModalHeader from './Header'
import ModalFooter from './Footer'
import Button from 'shared/components/ui/Button'
import { FormattedMessage } from 'react-intl'
import posed, { PoseGroup } from 'react-pose'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Loader from 'shared/components/ui/Loader'
import Image from 'shared/components/ui/Image'

/**
 * Modal Animation, exports React-pose animations
 * @see {@link https://popmotion.io/pose/api/} for further information.
 * @return {object} An object of styles
 */
const ModalAnimation = posed.div({
  enter: {
  },
  exit: {
  }
})

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

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
const modal = ({
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
        <Image
          src={image}
          size="auto"
          height={20} />
      )}

      <div>
        {isMarkAsSpamVisible && (
            <Button
                variant='transparent'
                onClick={onMarkAsSpam}>
              <FontAwesomeIcon icon="ban" />

              <FormattedMessage id="word.mark-as-spam" />
            </Button>
        )}

        {isEditable && (
          <Button
            variant="icon"
            onClick={onEdit}>
            <FontAwesomeIcon icon="pencil-alt" />
          </Button>
        )}

        <Spreader spread="tiny" />

        {isClosable && (
          <Close onClick={onClick} />
        )}
      </div>
    </div>
  )

  const renderComponent = () => (
    <div className={cssClass('modal__component')}>
      <div className={cssClass('modal__component--child')}>
        {component}
      </div>

      {isClosable && (
            <Close onClick={onClick} />
      )}
    </div>
  )

  return (
    <Fragment>
      <PoseGroup
        animateOnMount
        flipMove={false}>
        {isActive && (
          <ModalAnimation
            key='ModalAnimation'
            className={scss.dialog}>
            <div className={cssClass(className,
              {
                'modal--fullscreen': isFullscreen,
                'modal--center': isCentered
              })}>
              {isLoading ? (
                <div className={scss.modal__body}>
                  <Loader />
                </div>
              ) : (
                <Fragment>
                  {(isClosable || title || image || isEditable) && (
                    !isComponent
                      ? renderTitle()
                      : renderComponent()
                  )}

                  {hasHeaderDivider && (
                    <Fragment>
                      <Spacer space="small" />

                      <Divider />
                    </Fragment>

                  )}

                  <div className={scss.modal__body}>
                    <div style={overflowStyle}>
                      <Overflow>
                        {children}
                      </Overflow>
                    </div>
                  </div>

                  {hasFooter && (
                    <ModalFooter
                      align="right">
                      {hasCustomButton ? (
                        <Button
                          variant="secondary"
                          size="medium"
                          onClick={onClickCustomButton}
                          isDisabled={isCustomButtonDisabled}>
                          <FormattedMessage id={`${i18Cancel}`} />
                        </Button>
                      ) : (
                        <Button
                          variant="secondary"
                          size="medium"
                          onClick={onClick}>
                          <FormattedMessage id={`${i18Cancel}`} />
                        </Button>
                      )}

                      <Button
                        type={isSubmit ? 'submit' : 'button'}
                        variant={actionVariant}
                        size="medium"
                        onClick={onAction}
                        isDisabled={isButtonDisabled}
                        isLoading={isButtonLoading}
                        hasIcon={!!actionIcon}>
                        {actionIcon && (
                          <FontAwesomeIcon
                            icon={actionIcon}
                            size='xs' />
                        )}

                        <FormattedMessage id={`${i18Action}`} />
                      </Button>
                    </ModalFooter>
                  )}
                </Fragment>
              )}
            </div>
          </ModalAnimation>
        )}
      </PoseGroup>

      {isActive && (<Backdrop onClick={onClick} />)}
    </Fragment >
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
   * Gets called when the user clicks
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func,
  /**
   * Gets called when the user clicks
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onAction: PropTypes.func,
  /**
   * isActive, active state
   */
  isActive: PropTypes.bool.isRequired,
  /**
   * isClosable
   */
  isClosable: PropTypes.bool,
  /**
   * isButtonDisabled is action button disabled
   */
  isButtonDisabled: PropTypes.bool,
  /**
   * isButtonLoading ha action button loading state
   */
  isButtonLoading: PropTypes.bool,
  /**
   * Title
   */
  title: PropTypes.string,
  /**
   * Image
   */
  image: PropTypes.string,
  /**
   * hasFooter
   */
  hasFooter: PropTypes.bool,
  /**
   * i18Action button translation
   */
  i18Action: PropTypes.string,
  /**
   * i18Cancel button translation
   */
  i18Cancel: PropTypes.string,
  /**
   * hasHeaderDivider
   */
  hasHeaderDivider: PropTypes.bool,
  /**
   * actionVariant action button variant
   */
  actionVariant: PropTypes.string,
  /**
   * isLoading
   */
  isLoading: PropTypes.bool,
  /**
   * actionButtonIcon action button icon
   */
  actionIcon: PropTypes.string,
  /**
   * overflowStyle
   */
  overflowStyle: PropTypes.instanceOf(Object),
  /**
   * isFullscreen - makes modal fullscreen size
   */
  isFullscreen: PropTypes.bool,
  /**
   * isCentered - makes text in modal centered
   */
  isCentered: PropTypes.bool,
  /**
   * onEdit
   */
  onEdit: PropTypes.func,
  /**
   * onMarkAsSpam
   */
  onMarkAsSpam: PropTypes.func,
  /**
   * isEditable
   */
  isEditable: PropTypes.bool,
  /**
   * hasCustomButton - custom button
   */
  hasCustomButton: PropTypes.bool,
  /**
   * isCustomButtonDisabled is action button disabled
   */
  isCustomButtonDisabled: PropTypes.bool,
  /**
   * isMarkAsSpamVisible is "mark as spam" button visible
   */
  isMarkAsSpamVisible: PropTypes.bool,
  /**
   * isComponent is intead of title
   */
  isComponent: PropTypes.bool,
  /**
   * component
   */
  component: PropTypes.node,
  /**
   * isSubmit
   */
  isSubmit: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
modal.defaultProps = {
  className: 'modal',
  children: null,
  isClosable: true,
  isButtonDisabled: false,
  isButtonLoading: false,
  onClick: () => null,
  onAction: () => null,
  title: '',
  image: '',
  hasFooter: false,
  i18Action: 'word.save',
  i18Cancel: 'word.cancel',
  hasHeaderDivider: false,
  isLoading: false,
  actionVariant: 'primary',
  actionIcon: null,
  overflowStyle: {
    maxHeight: '80vh',
    overflowY: 'auto'
  },
  isFullscreen: false,
  isCentered: false,
  isEditable: false,
  hasCustomButton: false,
  onEdit: () => null,
  onMarkAsSpam: () => null,
  isCustomButtonDisabled: false,
  isMarkAsSpamVisible: false,
  isComponent: false,
  component: null,
  isSubmit: false
}

export default modal
