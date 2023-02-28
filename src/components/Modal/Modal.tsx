import { Backdrop } from '@components/Backdrop'
import Button from '@components/Button'
import { ButtonVariant } from '@components/Button/Button'
import { Close } from '@components/Close'
import Divider from '@components/Divider'
import { Icon } from '@components/Icon'
import Image from '@components/Image'
import { Loader } from '@components/Loader'
import { Spacer } from '@components/Spacer'
import Spreader from '@components/Spreader'
import { useKeyPress } from '@helpers/hooks/useKeyPress'
import { useStyles } from '@helpers/hooks/useStyles'
import {
  forwardRef,
  Fragment,
  MouseEvent,
  ReactNode,
  Ref,
  useCallback
} from 'react'

import { ModalFooter } from './Footer'
import { ModalHeader } from './Header'
import styles from './Modal.module.scss'

export interface ModalProps {
  children?: ReactNode
  className?: string | string[]
  onClick?: () => void
  onAction?: () => void
  isActive: boolean
  isClosable?: boolean
  isButtonDisabled?: boolean
  isButtonLoading?: boolean
  image?: string
  hasFooter?: boolean
  hasHeaderDivider?: boolean
  hasFooterDivider?: boolean
  actionVariant?: ButtonVariant
  isLoading?: boolean
  actionIcon?: string
  overflowStyle?: object
  isCentered?: boolean
  onEdit?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  onMarkAsSpam?: (e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => void
  isEditable?: boolean
  hasCustomButton?: boolean
  isCustomButtonDisabled?: boolean
  isMarkAsSpamVisible?: boolean
  size?: 'small' | 'medium' | 'big' | 'fullscreen' | 'huge-responsive'
  isPage?: boolean
  i18n?: {
    title?: string
    action?: string
    cancel?: string
    markSpam?: string
  }
  isComponent?: boolean
  component?: ReactNode
  isSubmit?: boolean
  onClickCustomButton?: (
    e: MouseEvent<HTMLButtonElement | HTMLAnchorElement>
  ) => void
  disableOverflow?: boolean
  isBodyPadding?: string
  headingAlign?: 'right' | 'center' | 'left'
  footerAlign?: 'right' | 'center' | 'left'
  hasEnterKeyDown?: boolean
}

export const Modal = forwardRef(
  (
    {
      children,
      className,
      onClick = () => null,
      onAction = () => null,
      isActive,
      isClosable = true,
      isButtonDisabled,
      isButtonLoading,
      isMarkAsSpamVisible,
      image,
      hasFooter,
      hasHeaderDivider,
      hasFooterDivider,
      actionVariant = 'primary',
      isLoading,
      actionIcon,
      overflowStyle = {
        maxHeight: '80vh',
        overflowY: 'auto',
        overflowX: 'hidden'
      },
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
      i18n = {
        title: '',
        action: '',
        cancel: '',
        markSpam: ''
      },
      isComponent,
      component,
      isSubmit,
      isBodyPadding,
      headingAlign = 'left',
      footerAlign = 'right',
      hasEnterKeyDown
    }: ModalProps,
    ref: Ref<HTMLDivElement>
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
