import Button from '@components/Button'
import Spreader from '@components/Spreader'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Tooltip from '@components/Tooltip'
import styles from './Back.module.scss'
import Icon from '@components/Icon'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Back - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: back
 * @param {string} props.url - url, default: ''
 * @param {string} props.content - content, default: ''
 * @param {func} props.onClick - onClick
 * @return {object} An object of children element
 */
const Back = ({ className, url, content, label, onClick }) => {
  const elementStyles = useStyles(
    {
      [styles['back']]: true
    },
    className
  )

  return (
    <span data-testid='back' className={elementStyles}>
      <a href={url}>
        <Tooltip content={content} placement='bottom' disabled={!content}>
          <Button
            variant={label ? 'transparent' : 'icon'}
            hasIcon={!!label}
            onClick={onClick}
          >
            <Icon icon='icon-arrow-left' />

            {label}
          </Button>
        </Tooltip>
      </a>
    </span>
  )
}

Back.displayName = 'Back'

Back.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  url: PropTypes.string,
  label: PropTypes.string,
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  onClick: PropTypes.func
}

Back.defaultProps = {
  label: null,
  className: '',
  content: null,
  url: null,
  onClick: () => null
}

export default Back
