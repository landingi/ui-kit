import PropTypes from 'prop-types'
import React, { Fragment } from 'react'

import styles from './Loader.module.scss'

const renderDefaultLoader = ({ dataTestId }) => (
  <div
      className={styles.container}
      data-testid={dataTestId ?? 'loader-default'}
    >
      <div className={styles.main}>
        <div className={styles.one} />
        <div className={styles.two} />
        <div className={styles.three} />
        <div className={styles.forth} />
      </div>
    </div>
)

const renderShapesLoader = ({ dataTestId }) => (
  <div className={styles.loader} data-testid={dataTestId ?? 'loader-shapes'}>
    <svg
      className={styles.loader__circle}
      width='8px'
      height='8px'
      viewBox='0 0 22 22'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='11' cy='11' r='11' />
    </svg>

    <svg
      className={styles.loader__circle2}
      width='8px'
      height='8px'
      viewBox='0 0 22 22'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle cx='11' cy='11' r='11' />
    </svg>

    <svg
      className={styles.loader__triangle}
      width='13px'
      height='13px'
      viewBox='0 0 40 45'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M31.673,18.327,6.673,25,0,0Z'
        transform='translate(15.836 39.929) rotate(-120)'
      />
    </svg>

    <svg
      className={styles.loader__square}
      width='7px'
      height='7px'
      viewBox='0 0 10 10'
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
    >
      <rect width='15' height='15' />
    </svg>

    <div className={styles.loader__spinner}>
      <div className={styles[`loader__spinner--inner`]}>
        <svg xmlns='http://www.w3.org/2000/svg' height='36' width='36'>
          <circle
            cx='50%'
            cy='50%'
            r='40%'
            fill='rgba(0,0,0,0)'
            stroke='#28C7B8'
            strokeLinecap='round'
          />
        </svg>
      </div>
    </div>
  </div>
)

/**
 * Loader - stateless presentational component
 * @param {object} props - props
 * @param {string} props.variant - loader variant
 * @return {object} An object of children element
 */
const Loader = ({ variant, 'data-testid': dataTestId }) => {
  const loader = {
    default: renderDefaultLoader({ dataTestId }),
    shapes: renderShapesLoader({ dataTestId })
  }

  return loader[variant]
}

Loader.displayName = 'Loader'

Loader.propTypes = {
  variant: PropTypes.oneOf(['default', 'shapes']),
  'data-testid': PropTypes.string
}

Loader.defaultProps = {
  variant: 'default',
  'data-testid': null
}

export default Loader
