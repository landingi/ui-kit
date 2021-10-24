import React, { useRef, useEffect, useState } from 'react'
import { styles } from '@helpers/css'
import scss from './InfinityScroll.scss'
import Loader from '@components/ui/Loader'
import PropTypes from 'prop-types'

const cssClass = styles(scss)

/**
 * InfinityScroll - stateless presentational component
 * @param {object} props - props
 * @param {object} props.children - content to display
 * @param {func} props.loadMore - callback function, invoked when loader is seen
 * @param {func} props.isLastPage - hide loader
 * @return {object} An object of children element
 */
const InfinityScroll = ({ children, loadMore, isLastPage }) => {
  // loader element
  const loader = useRef(null)
  // when true, trigger loadMore
  const [shouldFetch, setShouldFetch] = useState(false)

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    }

    const observer = new IntersectionObserver(handleObserver, options)
    if (loader.current) {
      observer.observe(loader.current)
    }
  }, [])

  const handleObserver = entities => {
    const target = entities[0]

    if (target.isIntersecting) {
      setShouldFetch(true)
    }
  }

  useEffect(() => {
    if (shouldFetch === true) {
      loadMore()

      setShouldFetch(false)
    }
  }, [shouldFetch])

  return (
    <div className={cssClass('container')}>
      {children}
      <div
        className={cssClass('loading', isLastPage && 'loading-hide')}
        ref={loader}
      >
        <Loader />
      </div>
    </div>
  )
}

InfinityScroll.displayName = 'InfinityScroll'

InfinityScroll.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.string]).isRequired,
  loadMore: PropTypes.func,
  isLastPage: PropTypes.bool
}

InfinityScroll.defaultProps = {
  isLastPage: false,
  loadMore: () => null
}

export default InfinityScroll
