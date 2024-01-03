import { useStyles } from '@helpers/hooks/useStyles'
import { FC } from 'react'

import styles from './Loader.module.scss'

export interface LoaderProps {
  className?: string | string[]
  variant?: 'default' | 'shapes'
  ['data-testid']?: string
}

interface LoaderVariantType {
  className?: string | string[]
  dataTestId?: string
}

const DefaultLoader: FC<LoaderVariantType> = ({ className, dataTestId }) => {
  const loaderStyles = useStyles(
    {
      [styles.container]: true
    },
    className
  )

  return (
    <div className={loaderStyles} data-testid={dataTestId ?? 'loader-default'}>
      <div className={styles.main}>
        <div className={styles.one} />
        <div className={styles.two} />
        <div className={styles.three} />
        <div className={styles.forth} />
      </div>
    </div>
  )
}

const ShapesLoader: FC<LoaderVariantType> = ({ className, dataTestId }) => {
  const loaderStyles = useStyles(
    {
      [styles.loader]: true
    },
    className
  )

  return (
    <div className={loaderStyles} data-testid={dataTestId ?? 'loader-shapes'}>
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
}

export const Loader: FC<LoaderProps> = ({
  className = '',
  variant = 'default',
  'data-testid': dataTestId
}) => {
  const loader = {
    default: <DefaultLoader className={className} dataTestId={dataTestId} />,
    shapes: <ShapesLoader className={className} dataTestId={dataTestId} />
  }

  return loader[variant]
}

Loader.displayName = 'Loader'
