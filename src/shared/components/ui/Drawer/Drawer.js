import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { styles } from 'shared/helpers/css'
import scss from './Drawer.scss'
import Header from './Header'
import Backdrop from 'shared/components/ui/Backdrop'
import { DARK, WHITE, DEFAULT, MOBILE } from 'shared/constants/skin'
import posed, { PoseGroup } from 'react-pose'

/**
 * Drawer Animation, exports React-pose animations
 * @see {@link https://popmotion.io/pose/api/} for further information.
 * @return {object} An object of styles
 */
const DrawerAnimation = posed.div({
  enter: {
    top: 0,
    left: 340,
    transition: {
      ease: [0.82, 0.085, 0.395, 0.895],
      duration: 500
    }
  },
  exit: {
    left: 0,
    transition: {
      ease: [0.82, 0.085, 0.395, 0.895],
      duration: 500
    }
  }
})

/**
 * Exports css classes from SCSS file
 * @return {object} An object of styles
 */
const cssClass = styles(scss)

/**
 * Drawer - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: drawer
 * @param {function} props.onClick - onClick handler
 * @param {boolean} props.isActive - active state
 * @param {object} props.data - data
 * @param {string} props.type - type od drawer, dafult: ''
 * @param {string} props.skin - determines which skin color it should use, default: WHITE,
 * @return {object} An object of children element
 */
const drawer = ({
  children,
  className,
  onClick,
  isActive,
  data,
  type,
  skin
}) => {
  const elementClasses = cssClass({
    'drawer--small': type === 'small',
    'drawer--medium': type === 'medium',
    'drawer--white': skin === WHITE || skin === MOBILE,
    'drawer--dark': skin === DARK,
    'drawer--default': skin === DEFAULT
  })

  return (
    <Fragment>
      <PoseGroup
animateOnMount
flipMove={false}>
        {isActive && (
          <DrawerAnimation
            key="draweranimation"
            className={cssClass(className, elementClasses)}
          >
            <Header
title={data ? data.title : ''}
onClick={onClick} />

            {children}
          </DrawerAnimation>
        )}
      </PoseGroup>

      {isActive && <Backdrop onClick={onClick} />}
    </Fragment>
  )
}

/**
 * Display name
 * @type {string}
 */
drawer.displayName = 'Drawer'

/**
 * The properties.
 * @type {Object}
 */
drawer.propTypes = {
  /**
   * Children elements
   */
  children: PropTypes.node.isRequired,
  /**
   * Data
   */
  data: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  }),
  /**
   * Classname, default `drawer`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   * Gets called when the user clicks
   *
   * @param {SyntheticEvent} event The react `SyntheticEvent`
   * @param {Object} All props
   */
  onClick: PropTypes.func,
  /**
   * isActive, active state
   */
  isActive: PropTypes.bool.isRequired,
  /**
   * type of drawer
   */
  type: PropTypes.string,
  /**
   * skin, determines which skin color it should use
   */
  skin: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
drawer.defaultProps = {
  className: 'drawer',
  onClick: () => null,
  type: '',
  skin: WHITE,
  data: null
}

export default drawer
