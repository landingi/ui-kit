import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { cancelRequests } from 'shared/services/http/client'
import { debounce } from 'shared/helpers/events'

/**
 * useInfinityScroll - stateful presentational component
 * @param {object} props - props
 * @param {string} props.elementId- element to watch
 * @param {string} props.target - api address
 * @param {function} props.updateTarget - function to update target
 * @param {function} props.setLoading - function to set loading state
 * @param {function} props.setData - function to set data state
 * @param {function} props.setMeta - function to set meta total state
 * @param {object[]} props.params - additional api params
 * @param {number} props.limit - limit
 * @return {object} Data from api
 */
const useInfinityScroll = (
  elementId,
  getTarget,
  setLoading,
  setData,
  setMeta,
  limit,
  sort
) => {
  const [state, setState] = useState([])
  const [loadMore, setLoadMore] = useState(true)
  const [metaCount, setMetaCount] = useState(0)
  const [page, setPage] = useState(1)

  /**
   * handleScroll - gets the elementId and on scroll triggers setLoadMore to true
   */
  const handleScroll = debounce(() => {
    const list = document.getElementById(elementId)
    const { scrollHeight, scrollTop, offsetHeight } = list

    if (scrollTop >= scrollHeight - offsetHeight - 60) {
      setLoadMore(true)
    }
  }, 500)

  /**
   * getData - fetch
   * @param {bool} loadMore - value of setLoadMore state
   */
  const getData = async loadMore => {
    if (loadMore) {
      const { data, meta } = await getTarget(page, limit, sort)

      setMeta && setMeta(meta)
      setMetaCount(meta.total)
      setPage(page + 1)

      handleStateUpdate(data)
      setLoading(false)
    }
  }

  /**
   * handleStateUpdate - update the state of data
   * @param {array[]} data - list of data
   */
  const handleStateUpdate = data => {
    setData && setState([...state, ...data], setData([...state, ...data]))

    setState([...state, ...data])
  }

  /**
   * isLastPage- check if last page
   */
  const isLastPage = () =>
    metaCount !== 0 && Math.ceil(metaCount / limit) === page

  /**
   * useEffect hook - triggers getData() when setLoadmore() has been updated
   */
  useEffect(() => {
    const list = document.getElementById(elementId)
    const { innerHeight } = window
    const { clientHeight } = list

    setLoading(true)

    if (isLastPage()) {
      setLoadMore(false)
      setLoading(false)

      return
    }

    if (clientHeight <= innerHeight && clientHeight && !isLastPage()) {
      setLoadMore(true)
      getData(loadMore)
    }
    setLoadMore(false)
  }, [loadMore])

  /**
   * useEffect hook - scroll listener
   */
  useEffect(() => {
    document.getElementById(elementId).addEventListener('scroll', handleScroll)

    return () => {
      document
        .getElementById(elementId)
        .removeEventListener('scroll', handleScroll)
      cancelRequests()
    }
  }, [])

  return state
}

/**
 * Display name
 * @type {string}
 */
useInfinityScroll.displayName = 'useInfinityScroll'

/**
 * The properties.
 * @type {Object}
 */
useInfinityScroll.propTypes = {
  /**
   * elementId
   */
  elementId: PropTypes.string,
  /**
   * target
   */
  target: PropTypes.string,
  /**
   * updateTarget
   */
  updateTarget: PropTypes.func,
  /**
   * setLoading
   */
  setLoading: PropTypes.func,
  /**
   * setData
   */
  setData: PropTypes.func,
  /**
   * setMeta
   */
  setMeta: PropTypes.func,
  /**
   * params
   */
  params: PropTypes.arrayOf().isRequired,
  /**
   * limit
   */
  limit: PropTypes.number,
  /**
   * Sort
   */
  sort: PropTypes.string
}

/**
 * The default properties.
 * @type {Object}
 */
useInfinityScroll.defaultProps = {
  updateTarget: () => null,
  setLoading: () => null,
  setData: () => null,
  setMeta: () => null,
  params: [],
  limit: 15,
  sort: '-created_at_utc'
}

export default useInfinityScroll
