import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React from 'react'
import scss from './Modal.scss'

const cssClass = styles(scss)

/**
 * Modal Footer - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string} props.align - alignment
 * @return {object} An object of children element
 */
const ModalFooter = ({ children, align }) => {
  const elementClasses = cssClass({
    'modal__footer--align-right': align === 'right'
  })
  return (
    <div className={cssClass(`${scss.modal__footer}`, elementClasses)}>
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
