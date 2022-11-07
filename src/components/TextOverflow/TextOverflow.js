import { useStyles } from '@helpers/hooks/useStyles'
import PropTypes from 'prop-types'
import React from 'react'

import styles from './TextOverflow.module.scss'

/**
 * TextOverflow - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names
 * @param {object} props.children - childrens
 * @return {object} An object of children element
 */
const TextOverflow = ({ children, className }) => {
  const textOverflowStyles = useStyles(
    {
      [styles.overflow]: true
    },
    className
  )

  return (
    <div className={textOverflowStyles} data-testid='overflow'>
      {children}
    </div>
  )
}

TextOverflow.displayName = 'TextOverflow'

TextOverflow.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  children: PropTypes.node
}

TextOverflow.defaultProps = {
  className: '',
  children: null
}

export default TextOverflow
