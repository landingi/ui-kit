import { styles } from '@helpers/css'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Spacer from '@components/ui/Spacer'
import scss from './Loader.scss'

const cssClass = styles(scss)

/**
 * Loader - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: `loader__spin`
 * @return {object} An object of children element
 */
const Loader = ({ className }) => (
  <Fragment>
    <Spacer space='large' />

    <div className={cssClass(className)}>
      <div className={scss.rect1} />

      <div className={scss.rect2} />

      <div className={scss.rect3} />

      <div className={scss.rect4} />

      <div className={scss.rect5} />
    </div>
  </Fragment>
)

Loader.displayName = 'Loader'

Loader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

Loader.defaultProps = {
  className: 'loader__spin'
}

export default Loader
