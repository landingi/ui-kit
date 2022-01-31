import React from 'react'
import { useRef, useEffect, useState } from 'react'
import Loader from '@components/ui/Loader'
import PropTypes from 'prop-types'
import { useStyles } from '@helpers/hooks/useStyles'
import styles from './InfinityScroll.module.scss'

//TODO InfinityScroll css, test
/**
 * InfinityScroll - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - content to display
 * @param {func} props.loadMore - callback function, invoked when loader is seen
 * @param {func} props.isLastPage - hide loader
 * @return {object} An object of children element
 */
const InfinityScroll = ({ className, children, loadMore, isLastPage }) => {
  const loaderRef = useRef(null)
  const [shouldFetch, setShouldFetch] = useState(false)

  const handleObserver = entities => {
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
    [styles['loading-hide ']]: isLastPage
  })

  return (
    <div className={wrapperStyles}>
      {children}
      <div
        className={loaderStyles}
        ref={loaderRef}
        deta-testid='loader-wrapper'
      >
        <Loader />
      </div>
    </div>
  )
}

InfinityScroll.displayName = 'InfinityScroll'

InfinityScroll.propTypes = {
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  loadMore: PropTypes.func,
  isLastPage: PropTypes.bool
}

InfinityScroll.defaultProps = {
  className: '',
  isLastPage: false,
  loadMore: () => null
}

export default InfinityScroll
