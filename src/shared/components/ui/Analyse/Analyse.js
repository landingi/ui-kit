import React from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Analyse.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const cssClass = styles(scss)

/**
 * analyse - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `analyse`
 * @return {object} An object of children element
 */
const analyse = ({ className }) => (
  <div className={cssClass(className)}>
    <span />

    <div className={scss.center}>
      <div className={scss.wrap}>
        <div className={scss.box1}>
          <FontAwesomeIcon icon="code" />

          <FontAwesomeIcon icon="code" />
        </div>

        <div className={scss.box2}>
          <FontAwesomeIcon icon="code" />

          <FontAwesomeIcon icon="code" />
        </div>
      </div>
    </div>
  </div>
)

/**
 * Display name
 * @type {string}
 */
analyse.displayName = 'Analyse'

/**
 * The properties.
 * @type {Object}
 */
analyse.propTypes = {
  /**
   * Classname, default `analyse`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

/**
 * The default properties.
 * @type {Object}
 */
analyse.defaultProps = {
  className: 'analyse'
}

export default analyse
