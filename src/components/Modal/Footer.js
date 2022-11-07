import PropTypes from 'prop-types'
import React from 'react'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './Modal.module.scss'

/**
 * Modal Footer - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.align - alignment
 * @return {object} An object of children element
 */
const ModalFooter = ({ children, align }) => {
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

ModalFooter.propTypes = {
  align: PropTypes.oneOf(['left', 'center', 'right']),
  children: PropTypes.node.isRequired
}

ModalFooter.defaultProps = {
  align: 'right'
}

export default ModalFooter
