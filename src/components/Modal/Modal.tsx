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
import { useScrollBlock } from '@helpers/hooks/useScrollBlock'
import { useStyles } from '@helpers/hooks/useStyles'
import {
  forwardRef,
  Fragment,
  MouseEvent,
  ReactNode,
  Ref,
  useCallback,
  useEffect,
  useState
} from 'react'

import { ModalFooter } from './Footer'
import { ModalHeader } from './Header'
import styles from './Modal.module.scss'

type Size =
  | 'small'
  | 'medium'
  | 'big'
  | 'fullscreen'
  | 'responsive'
  | 'huge-responsive'

export interface ModalCommonProps {
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

export interface ModalWithAnimation extends ModalCommonProps {
  size?: 'fullscreen'
  hasAnimation?: boolean
  customZIndex?: undefined
}

export interface ModalWithoutAnimation extends ModalCommonProps {
  size?: Size
  hasAnimation?: undefined
  customZIndex?: {
    backdrop?: number
    modal?: number
    dialog?: number
  }
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
      hasEnterKeyDown,
      hasAnimation,
      customZIndex
    }: ModalWithAnimation | ModalWithoutAnimation,
    ref: Ref<HTMLDivElement>
  ) => {
    const [isClosing, setClosing] = useState(false)

    const [blockScroll, allowScroll] = useScrollBlock()

    const headerStyles = useStyles({
      [styles.modal__header]: true,
      [styles['modal__header--close-only']]: !i18n.title && !image,
      [styles['modal__header--animation-open']]: hasAnimation,
      [styles['modal__header--animation-close']]: hasAnimation && isClosing
    })

    const handleClose = useCallback(() => {
      setClosing(true)

      setTimeout(() => {
        onClick()

        setClosing(false)
        allowScroll()
      }, 1600)
    }, [onClick, allowScroll])

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

          {isClosable && (
            <Close onClick={hasAnimation ? handleClose : onClick} />
          )}
        </div>
      </div>
    )

    const componentStyles = useStyles({
      [styles.modal__component]: true,
      [styles['modal__component--animation-open']]: hasAnimation,
      [styles['modal__component--animation-close']]: hasAnimation && isClosing
    })

    const renderComponent = () => (
      <div className={componentStyles} data-testid='modal-component'>
        <div className={styles['modal__component--child']}>{component}</div>

        {isClosable && <Close onClick={hasAnimation ? handleClose : onClick} />}
      </div>
    )

    const modalStyles = useStyles(
      {
        [styles.modal]: true,
        [styles['modal--responsive']]: size === 'responsive',
        [styles['modal--huge-responsive']]: size === 'huge-responsive',
        [styles['modal--fullscreen']]: size === 'fullscreen',
        [styles['modal--big']]: size === 'big',
        [styles['modal--medium']]: size === 'medium',
        [styles['modal--small']]: size === 'small',
        [styles['modal--center']]: isCentered,
        [styles['modal--page']]: isPage,
        [styles['modal--animation-open']]: hasAnimation,
        [styles['modal--animation-close']]: hasAnimation && isClosing
      },
      className
    )

    const bodyStyles = useStyles({
      [styles.modal__body]: true,
      [styles['modal__body--has-footer']]: hasFooter,
      [styles['modal__body--no-padding']]: isBodyPadding === 'none',
      [styles['modal__body--animation-open']]: hasAnimation,
      [styles['modal__body--animation-close']]: hasAnimation && isClosing
    })

    const handleActionOnEnter = useCallback(() => {
      hasEnterKeyDown && isActive && !isButtonDisabled && onAction()
    }, [onAction, isActive, isButtonDisabled, hasEnterKeyDown])

    const handleCloseOnEscape = useCallback(
      () =>
        isClosable && isActive && (hasAnimation ? handleClose() : onClick()),

      [onClick, isClosable, isActive, hasAnimation, handleClose]
    )

    useKeyPress('Enter', handleActionOnEnter)
    useKeyPress('Escape', handleCloseOnEscape)

    useEffect(() => {
      if (isActive && hasAnimation) {
        blockScroll()

        return
      }

      allowScroll()
    }, [isActive, hasAnimation, allowScroll, blockScroll])

    return (
      <Fragment>
        {isActive && (
          <div
            className={styles.dialog}
            style={{ zIndex: customZIndex?.dialog }}
            data-testid='dialog'
          >
            <div
              className={modalStyles}
              style={{ zIndex: customZIndex?.modal }}
              data-testid='modal'
              ref={ref}
            >
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
        {isActive && size !== 'fullscreen' && (
          <Backdrop onClick={onClick} customZIndex={customZIndex?.backdrop} />
        )}
      </Fragment>
    )
  }
)

Modal.displayName = 'Modal'
