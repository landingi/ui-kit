import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from '@helpers/css'
import scss from './Loader.scss'
import Spacer from '@components/ui/Spacer'

const cssClass = styles(scss),
  /**
   * Loader - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: `loader__spin`
   * @return {object} An object of children element
   */
  loader = ({ className }) => (
    <>
      <Spacer space='large' />

      <div className={cssClass(className)}>
        <div className={scss.rect1} />

        <div className={scss.rect2} />

        <div className={scss.rect3} />

        <div className={scss.rect4} />

        <div className={scss.rect5} />
      </div>
    </>
  )

/**
 * Display name
 * @type {string}
 */
loader.displayName = 'Loader'

/**
 * The properties.
 * @type {Object}
 */
loader.propTypes = {
  /**
   * Classname, default `loader__spin`
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
loader.defaultProps = {
  className: 'loader__spin'
}

export default loader
