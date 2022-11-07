import Backdrop from '@components/Backdrop'
import Button from '@components/Button'
import Close from '@components/Close'
import Divider from '@components/Divider'
import Icon from '@components/Icon'
import Image from '@components/Image'
import Loader from '@components/Loader'
import Spacer from '@components/Spacer'
import Spreader from '@components/Spreader'
import { useKeyPress } from '@helpers/hooks/useKeyPress'
import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React, { forwardRef, Fragment, useCallback } from 'react'

import ModalFooter from './Footer'
import ModalHeader from './Header'
import styles from './Modal.module.scss'

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
 * @param {object} props.image - image in header
 * @param {boolean} props.hasFooter - has footer
 * @param {boolean} props.hasHeaderDivider - has header divider
 * @param {boolean} props.hasFooterDivider - has footer divider
 * @param {string} props.actionVariant - button action variant
 * @param {bool} props.isLoading - is loading
 * @param {string} props.actionIcon - footer action button icon
 * @param {object} props.overflowStyle - overflowStyle
 * @param {bool} props.isCentered - makes text in modal centered
 * @param {bool} props.isEditable - isEditable
 * @param {func} props.onEdit - onEdit
 * @param {bool} props.hasCustomButton - secondary button
 * @param {func} props.onClickCustomButton - secondary button with custom callback
 * @param {bool} props.isCustomButtonDisabled - is cunstom button in footer disabled
 * @param {func} props.onMarkAsSpam - handle "mark as spam" click
 * @param {bool} props.isPage - is page
 * @param {string} props.size - modal size, one of: small(default, 780px), medium(880px), big(1080px), fullscreen
 * @param {string} props.i18n - objest of translations
 * @param {bool} props.isComponent - component instead of title
 * @param {object} props.component - component
 * @param {bool} props.isSubmit - modal button is submit type
 * @param {string} props.isBodyPadding - modal body padding
 * @param {string} props.headingAlign - align text in title, default: left
 * @param {string} props.footerAlign - modal footer alignment, default: right
 * @param {string} props.hasEnterKeyDown - has confirmed by enter key, default false
 * @return {object} An object of children element
 */
const Modal = forwardRef(
  (
    {
      children,
      className,
      onClick,
      onAction,
      isActive,
      isClosable,
      isButtonDisabled,
      isButtonLoading,
      isMarkAsSpamVisible,
      image,
      hasFooter,
      hasHeaderDivider,
      hasFooterDivider,
      actionVariant,
      isLoading,
      actionIcon,
      overflowStyle,
      isCentered,
      isEditable,
      onEdit,
      hasCustomButton,
      onClickCustomButton,
      isCustomButtonDisabled,
      onMarkAsSpam,
      size,
      isPage,
      disableOverflow,
      i18n,
      isComponent,
      component,
      isSubmit,
      isBodyPadding,
      headingAlign,
      footerAlign,
      hasEnterKeyDown
    },
    ref
  ) => {
    const headerStyles = useStyles({
      [styles.modal__header]: true,
      [styles['modal__header--close-only']]: !i18n.title && !image
    })

    const renderTitle = () => (
      <div className={headerStyles}>
        {headingAlign === 'center' && <Spreader />}
        {i18n.title && <ModalHeader title={i18n.title} align={headingAlign} />}

        {image && <Image src={image} size='auto' height={20} />}

        <div>
          {isMarkAsSpamVisible && (
            <Button variant='transparent' onClick={onMarkAsSpam}>
              <Icon icon='icon-block' />

              {i18n.markSpam}
            </Button>
          )}

          {isEditable && (
            <Button
                variant='icon'
                onClick={onEdit}
                data-testid='modal-button-edit'
              >
                <Icon icon='icon-create' />
              </Button>
          )}

          {(isMarkAsSpamVisible || isEditable) && <Spreader spread='tiny' />}

          {isClosable && <Close onClick={onClick} />}
        </div>
      </div>
    )

    const renderComponent = () => (
      <div className={styles.modal__component} data-testid='modal-component'>
        <div className={styles['modal__component--child']}>{component}</div>

        {isClosable && <Close onClick={onClick} />}
      </div>
    )

    const modalStyles = useStyles(
      {
        [styles.modal]: true,
        [styles['modal--huge-responsive']]: size === 'huge-responsive',
        [styles['modal--fullscreen']]: size === 'fullscreen',
        [styles['modal--big']]: size === 'big',
        [styles['modal--medium']]: size === 'medium',
        [styles['modal--small']]: size === 'small',
        [styles['modal--center']]: isCentered,
        [styles['modal--page']]: isPage
      },
      className
    )

    const bodyStyles = useStyles({
      [styles.modal__body]: true,
      [styles['modal__body--has-footer']]: hasFooter,
      [styles['modal__body--no-padding']]: isBodyPadding === 'none'
    })

    const handleActionOnEnter = useCallback(() => {
      hasEnterKeyDown && isActive && !isButtonDisabled && onAction()
    }, [onAction, isActive, isButtonDisabled, hasEnterKeyDown])

    const handleCloseOnEscape = useCallback(
      () => isClosable && isActive && onClick(),

      [onClick, isClosable, isActive]
    )

    useKeyPress('Enter', handleActionOnEnter)
    useKeyPress('Escape', handleCloseOnEscape)

    return (
      <Fragment>
        {isActive && (
          <div className={styles.dialog}>
            <div className={modalStyles} ref={ref}>
              {isLoading ? (
                <div className={styles.modal__body}>
                  <Loader />
                </div>
              ) : (
                <Fragment>
                  {(isClosable || i18n.title || image || isEditable) &&
                    (!isComponent ? renderTitle() : renderComponent())}
                  {hasHeaderDivider && (
                    <Fragment>
                      <Spacer space='small' />
                      <Divider />
                    </Fragment>
                  )}
                  <div className={bodyStyles}>
                    {disableOverflow ? (
                      children
                    ) : (
                      <div style={overflowStyle}>{children}</div>
                    )}
                  </div>
                  {hasFooterDivider && (
                    <div className={styles['modal__footer-divider']}>
                      <Divider />
                    </div>
                  )}
                  {hasFooter && (
                    <Fragment>
                      <Spacer space='small' />

                      <ModalFooter align={footerAlign}>
                        {hasCustomButton ? (
                          <Button
                            data-testid='modal-custom-button'
                            variant='secondary'
                            size='medium'
                            onClick={onClickCustomButton}
                            isDisabled={isCustomButtonDisabled}
                          >
                            {i18n.cancel}
                          </Button>
                        ) : i18n.cancel ? (
                          <Button
                            variant='secondary'
                            size='medium'
                            onClick={onClick}
                          >
                            {i18n.cancel}
                          </Button>
                        ) : null}
                        <Button
                          type={isSubmit ? 'submit' : 'button'}
                          variant={actionVariant}
                          size='medium'
                          onClick={onAction}
                          isDisabled={isButtonDisabled}
                          isLoading={isButtonLoading}
                          hasIcon={!!actionIcon}
                        >
                          {actionIcon && <Icon icon={actionIcon} />}
                          {i18n.action}
                        </Button>
                      </ModalFooter>
                    </Fragment>
                  )}
                </Fragment>
              )}
            </div>
          </div>
        )}
        {isActive && size !== 'fullscreen' && <Backdrop onClick={onClick} />}
      </Fragment>
    )
  }
)

Modal.displayName = 'Modal'

Modal.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  onClick: PropTypes.func,
  onAction: PropTypes.func,
  isActive: PropTypes.bool.isRequired,
  isClosable: PropTypes.bool,
  isButtonDisabled: PropTypes.bool,
  isButtonLoading: PropTypes.bool,
  image: PropTypes.string,
  hasFooter: PropTypes.bool,
  hasHeaderDivider: PropTypes.bool,
  hasFooterDivider: PropTypes.bool,
  actionVariant: PropTypes.string,
  isLoading: PropTypes.bool,
  actionIcon: PropTypes.string,
  overflowStyle: PropTypes.instanceOf(Object),
  isCentered: PropTypes.bool,
  onEdit: PropTypes.func,
  onMarkAsSpam: PropTypes.func,
  isEditable: PropTypes.bool,
  hasCustomButton: PropTypes.bool,
  isCustomButtonDisabled: PropTypes.bool,
  isMarkAsSpamVisible: PropTypes.bool,
  size: PropTypes.oneOf([
    'small',
    'medium',
    'big',
    'fullscreen',
    'huge-responsive'
  ]),
  isPage: PropTypes.bool,
  i18n: PropTypes.shape({
    title: PropTypes.string,
    action: PropTypes.string,
    cancel: PropTypes.string,
    markSpam: PropTypes.string
  }),
  isComponent: PropTypes.bool,
  component: PropTypes.node,
  isSubmit: PropTypes.bool,
  onClickCustomButton: PropTypes.func,
  disableOverflow: PropTypes.bool,
  isBodyPadding: PropTypes.string,
  headingAlign: PropTypes.oneOf(['right', 'center', 'left']),
  footerAlign: PropTypes.oneOf(['right', 'center', 'left']),
  hasEnterKeyDown: PropTypes.bool
}

Modal.defaultProps = {
  className: '',
  children: null,
  isClosable: true,
  isButtonDisabled: false,
  isButtonLoading: false,
  onClick: () => null,
  onAction: () => null,
  image: '',
  hasFooter: false,
  hasHeaderDivider: false,
  hasFooterDivider: false,
  isLoading: false,
  actionVariant: 'primary',
  actionIcon: '',
  overflowStyle: {
    maxHeight: '80vh',
    overflowY: 'auto',
    overflowX: 'hidden'
  },
  isCentered: false,
  isEditable: false,
  hasCustomButton: false,
  isCustomButtonDisabled: false,
  isMarkAsSpamVisible: false,
  size: null,
  isPage: false,
  i18n: {
    title: '',
    action: '',
    cancel: '',
    markSpam: ''
  },
  onEdit: () => null,
  isComponent: false,
  component: null,
  isSubmit: false,
  onClickCustomButton: null,
  disableOverflow: false,
  isBodyPadding: '',
  headingAlign: 'left',
  footerAlign: 'right',
  hasEnterKeyDown: false
}

export default Modal
