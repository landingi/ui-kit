import PropTypes from 'prop-types'
import React from 'react'
import Tooltip from '@components/ui/Tooltip'
import styles from './OverflowTooltip.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * OverflowTooltip - stateless presentational component
 * @param {string} props.content - content to overflow
 * @param {string} props.placement - tooltip placement
 * @param {number} props.length - max content length to overflow if it is exceeded
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names out of component
 * @return {object} An object of children element
 */
const OverflowTooltip = ({
  content,
  placement,
  length,
  children,
  className
}) => {
  const elementClasses = useStyles(
    {
      [styles['overflow-tooltip']]: true
    },
    className
  )

  if (content?.length > length) {
    return children ? (
      <div data-testid='overflow-tooltip' className={elementClasses}>
        <div>{`${content.slice(0, length).trim()}...`}</div>

        <Tooltip content={content} placement={placement}>
          {children}
        </Tooltip>
      </div>
    ) : (
      <div data-testid='overflow-tooltip' className={elementClasses}>
        <Tooltip content={content} placement={placement}>
          <div>{`${content.slice(0, length).trim()}...`}</div>
        </Tooltip>
      </div>
    )
  }

  return <div>{content}</div>
}

OverflowTooltip.displayName = 'OverflowTooltip'

OverflowTooltip.propTypes = {
  children: PropTypes.node,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  content: PropTypes.string.isRequired,
  length: PropTypes.number,
  placement: PropTypes.string
}

OverflowTooltip.defaultProps = {
  children: null,
  className: '',
  length: 20,
  placement: 'right'
}

export default OverflowTooltip
