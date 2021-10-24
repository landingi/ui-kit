import { DARK, DEFAULT, MOBILE, WHITE } from '@constants/skin'
import { styles } from '@helpers/css'
import Backdrop from '@components/ui/Backdrop'
import Header from './Header'
import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import posed, { PoseGroup } from 'react-pose'
import scss from './Drawer.scss'

const DrawerAnimation = posed.div({
  enter: {
    left: 340,
    top: 0,
    transition: {
      duration: 500,
      ease: [0.82, 0.085, 0.395, 0.895]
    }
  },
  exit: {
    left: 0,
    transition: {
      duration: 500,
      ease: [0.82, 0.085, 0.395, 0.895]
    }
  }
})

const cssClass = styles(scss)

/**
 * Drawer - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - children
 * @param {string|array} props.className - list of class names, default: drawer
 * @param {function} props.onClick - onClick handler
 * @param {boolean} props.isActive - active state
 * @param {object} props.data - data
 * @param {string} props.type - type od drawer
 * @param {string} props.skin - determines which skin color it should use, default: WHITE,
 * @return {object} An object of children element
 */
const Drawer = ({ children, className, onClick, isActive, data, type, skin }) => {
  const elementClasses = cssClass({
    'drawer--dark': skin === DARK,
    'drawer--default': skin === DEFAULT,
    'drawer--medium': type === 'medium',
    'drawer--small': type === 'small',
    'drawer--white': skin === WHITE || skin === MOBILE
  })

  return (
    <Fragment>
      <PoseGroup animateOnMount flipMove={false}>
        {isActive && (
          <DrawerAnimation
            className={cssClass(className, elementClasses)}
            key='draweranimation'
          >
            <Header onClick={onClick} title={data ? data.title : ''} />

            {children}
          </DrawerAnimation>
        )}
      </PoseGroup>

      {isActive && <Backdrop onClick={onClick} />}
    </Fragment>
  )
}

Drawer.displayName = 'Drawer'

Drawer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  data: PropTypes.shape({
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.object])
  }),
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  skin: PropTypes.string,
  type: PropTypes.string
}

Drawer.defaultProps = {
  className: 'drawer',
  data: null,
  onClick: () => null,
  skin: WHITE,
  type: ''
}

export default Drawer
