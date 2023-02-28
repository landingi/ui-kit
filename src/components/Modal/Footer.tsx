import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode } from 'react'

import styles from './Modal.module.scss'

export interface ModalFooterProps {
  children: ReactNode
  align?: 'left' | 'center' | 'right'
}

export const ModalFooter: FC<ModalFooterProps> = ({
  children,
  align = 'right'
}) => {
  const elementClasses = useStyles({
    [styles.modal__footer]: true,
    [styles['modal__footer--align-right']]: align === 'right',
    [styles['modal__footer--align-center']]: align === 'center',
    [styles['modal__footer--align-left']]: align === 'left'
  })

  return (
    <div className={elementClasses} data-testid='modal-footer'>
      {children}
    </div>
  )
}

ModalFooter.displayName = 'ModalFooter'
