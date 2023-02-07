import Loader from '@components/Loader'
import { useStyles } from '@helpers/hooks/useStyles'
import { FC, ReactNode, useEffect, useRef, useState } from 'react'

import styles from './InfinityScroll.module.scss'

export interface InfinityScrollProps {
  className?: string | string[]
  children: ReactNode
  loadMore: () => void
  isLastPage?: boolean
}

/**
 * InfinityScroll - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - content to display
 * @param {func} props.loadMore - callback function, invoked when loader is seen
 * @param {func} props.isLastPage - hide loader
 * @return {object} An object of children element
 */
export const InfinityScroll: FC<InfinityScrollProps> = ({
  className = '',
  children,
  loadMore,
  isLastPage = false
}) => {
  const loaderRef = useRef(null)
  const [shouldFetch, setShouldFetch] = useState(false)

  const handleObserver: IntersectionObserverCallback = entities => {
    const target = entities[0]

    if (target.isIntersecting) {
      setShouldFetch(true)
    }
  }

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver(handleObserver, options)

    if (loaderRef.current) {
      observer.observe(loaderRef.current)
    }
  }, [])

  useEffect(() => {
    if (shouldFetch === true) {
      loadMore()

      setShouldFetch(false)
    }
  }, [shouldFetch])

  const wrapperStyles = useStyles(
    {
      [styles.wrapper]: true
    },
    className
  )

  const loaderStyles = useStyles({
    [styles['loading-hide']]: isLastPage
  })

  return (
    <div className={wrapperStyles}>
      {children}
      <div
        className={loaderStyles}
        ref={loaderRef}
        data-testid='loader-wrapper'
      >
        <Loader />
      </div>
    </div>
  )
}

InfinityScroll.displayName = 'InfinityScroll'
