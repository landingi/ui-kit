import React, { Fragment } from 'react'
import posed, { PoseGroup } from 'react-pose'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import Backdrop from '@components/ui/Backdrop'
import Close from '@components/ui/Close'
import Spreader from '@components/ui/Spreader'
import Divider from '@components/ui/Divider'
import Spacer from '@components/ui/Spacer'
import Button from '@components/ui/Button'
import Loader from '@components/ui/Loader'
import Image from '@components/ui/Image'
import ModalHeader from './Header'
import ModalFooter from './Footer'
import scss from './Modal.scss'
/**
 * Modal Animation, exports React-pose animations
 * @see {@link https://popmotion.io/pose/api/} for further information.
 * @return {object} An object of styles
 */
const ModalAnimation = posed.div({
  enter: {},
  exit: {}
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
 * @param {string} props.size - modal size, one of: medium, x-medium, big, fullscreen
 * @param {string} props.i18n - objest of translations
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
  isSubmit
}) => {
  const renderTitle = () => (
    <div className={scss.modal__header}>
      {i18n.title && <ModalHeader title={i18n.title} />}

      {image && <Image src={image} size='auto' height={20} />}

      <div>
        {isMarkAsSpamVisible && (
          <Button variant='transparent' onClick={onMarkAsSpam}>
            <FontAwesomeIcon icon='ban' />

            {i18n.markSpam}
          </Button>
        )}

        {isEditable && (
          <Button variant='icon' onClick={onEdit}>
            <FontAwesomeIcon icon='pencil-alt' />
          </Button>
        )}

        <Spreader spread='tiny' />

        {isClosable && <Close onClick={onClick} />}
      </div>
    </div>
  )

  const renderComponent = () => (
    <div className={cssClass('modal__component')}>
      <div className={cssClass('modal__component--child')}>{component}</div>

      {isClosable && <Close onClick={onClick} />}
    </div>
  )

  return (
    <Fragment>
      <PoseGroup animateOnMount flipMove={false}>
        {isActive && (
          <ModalAnimation key='ModalAnimation' className={scss.dialog}>
            <div
              className={cssClass(className, {
                'modal--fullscreen': size === 'fullscreen',
                'modal--big': size === 'big',
                'modal--x-medium': size === 'x-medium',
                'modal--center': isCentered,
                'modal--page': isPage
              })}
            >
              {isLoading ? (
                <div className={scss.modal__body}>
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
                  <div className={scss.modal__body}>
                    {disableOverflow ? (
                      children
                    ) : (
                      <div style={overflowStyle}>{children}</div>
                    )}
                  </div>
                  {hasFooterDivider && (
                    <div className={'Modal__modal__footer-divider'}>
                      <Divider />
                      <Spacer space='small' />
                    </div>
                  )}
                  {hasFooter && (
                    <ModalFooter align='right'>
                      {hasCustomButton ? (
                        <Button
                          variant='secondary'
                          size='medium'
                          onClick={onClickCustomButton}
                          isDisabled={isCustomButtonDisabled}
                        >
                          {i18n.cancel}
                        </Button>
                      ) : (
                        <Button
                          variant='secondary'
                          size='medium'
                          onClick={onClick}
                        >
                          {i18n.cancel}
                        </Button>
                      )}
                      <Button
                        type={isSubmit ? 'submit' : 'button'}
                        variant={actionVariant}
                        size='medium'
                        onClick={onAction}
                        isDisabled={isButtonDisabled}
                        isLoading={isButtonLoading}
                        hasIcon={!!actionIcon}
                      >
                        {actionIcon && (
                          <FontAwesomeIcon icon={actionIcon} size='xs' />
                        )}
                        {i18n.action}
                      </Button>
                    </ModalFooter>
                  )}
                </Fragment>
              )}
            </div>
          </ModalAnimation>
        )}
      </PoseGroup>
      {isActive && <Backdrop onClick={onClick} />}
    </Fragment>
  )
}

modal.displayName = 'Modal'

modal.propTypes = {
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
  size: PropTypes.oneOf(['medium', 'x-medium', 'big', 'fullscreen']),
  isPage: PropTypes.bool,
  i18n: PropTypes.shape({
    title: PropTypes.string,
    action: PropTypes.string,
    cancel: PropTypes.string,
    markSpam: PropTypes.string
  }),
  isComponent: PropTypes.bool,
  component: PropTypes.node,
  isSubmit: PropTypes.bool
}

modal.defaultProps = {
  className: 'modal',
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
  actionIcon: null,
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
  size: 'medium',
  isPage: false,
  i18n: PropTypes.shape({
    title: null,
    action: null,
    cancel: null,
    markSpam: null
  }),
  onEdit: () => null,
  isComponent: false,
  component: null,
  isSubmit: false
}

export default modal
