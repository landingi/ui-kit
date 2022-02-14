import PropTypes from 'prop-types'
import React, { Fragment } from 'react'
import Spacer from '@components/ui/Spacer'
import styles from './Loader.module.scss'
import { useStyles } from '@helpers/hooks/useStyles'

/**
 * Loader - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names out of component`
 * @return {object} An object of children element
 */
const Loader = ({ className }) => {
  const elementClasses = useStyles(
    {
      [styles['loader__spin']]: true
    },
    className
  )

  return (
    <Fragment>
      <Spacer space='large' />

      <div className={elementClasses} data-testid='loader'>
        <div className={styles['rect1']} />

        <div className={styles['rect2']} />

        <div className={styles['rect3']} />

        <div className={styles['rect4']} />

        <div className={styles['rect5']} />
      </div>
    </Fragment>
  )
}

Loader.displayName = 'Loader'

Loader.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
}

Loader.defaultProps = {
  className: ''
}

export default Loader
