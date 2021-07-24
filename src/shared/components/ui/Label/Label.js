import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Label.scss'

const cssClass = styles(scss)

/**
 * Label - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: `label`
 * @param {string} props.id - input id
 * @param {bool} props.isToogle - is toogle label
 * @param {bool} props.toogle - toogle change
 * @return {object} An object of children element
 */
const label = memo(({ children, className, id, isToogle, toogle }) => (
  <label
    className={cssClass(
      className,
      isToogle
        ? toogle
          ? 'label--active'
          : 'label--inactive'
        : 'label--normal'
    )}
    id={id}
  >
    {children}
  </label>
))

/**
 * Display name
 * @type {string}
 */
label.displayName = 'Label'

/**
 * The properties.
 * @type {Object}
 */
label.propTypes = {
  /**
   * Children element
   */
  children: PropTypes.node.isRequired,
  /**
   * Classname, default `label`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * id
   */
  id: PropTypes.string,
  /**
   * isToogle
   */
  isToogle: PropTypes.bool,
  /**
   * toogle
   */
  toogle: PropTypes.bool
}

/**
 * The default properties.
 * @type {Object}
 */
label.defaultProps = {
  className: 'label',
  id: null,
  isToogle: false,
  toogle: false
}

export default label
