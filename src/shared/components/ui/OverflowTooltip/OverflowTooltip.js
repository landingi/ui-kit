import React from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './OverflowTooltip.scss'
import Tooltip from '../Tooltip'

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * OverflowTooltip - stateless presentational component
 * @param {object} props - props
 * @param {object} props.content - content to overflow
 * @param {object} props.placement - tooltip placement
 * @param {object} props.length - max content length to overflow if it is exceeded
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: overflow-tooltip
 * @return {object} An object of children element
 */
const overflowTooltip = ({
  content,
  placement,
  length,
  children,
  className
}) => {
  if (content?.length > length) {
    return children ? (
      <div className={cssClass(className)}>
        <div>{content.slice(0, length).trim() + '...'}</div>

        <Tooltip content={content} placement={placement}>
          {children}
        </Tooltip>
      </div>
    ) : (
      <div className={cssClass(className)}>
        <Tooltip content={content} placement={placement}>
          <div>
            {content.slice(0, length).trim() + '...'}
          </div>
        </Tooltip>
      </div>
    )
  }

  return <div>{content}</div>
}

/**
 * Display name
 * @type {string}
 */
overflowTooltip.displayName = 'OverflowTooltip'

/**
 * The properties.
 * @type {Object}
 */
overflowTooltip.propTypes = {
  /**
   * content to overflow
   */
  content: PropTypes.string.isRequired,
  /**
   * length
   */
  length: PropTypes.number,
  /**
   * placement
   */
  placement: PropTypes.string,
  /**
   * Children elements
   */
  children: PropTypes.node,
  /**
   * Classname, default `overflow-tooltip`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ])
}

/**
 * The default properties.
 * @type {Object}
 */
overflowTooltip.defaultProps = {
  children: null,
  length: 20,
  placement: 'right',
  className: 'overflow-tooltip'
}

export default overflowTooltip
