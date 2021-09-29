import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { cancelRequests } from 'shared/services/http/client'
import { debounce } from '@helpers/events'

/**
 * UseInfinityScroll - stateful presentational component
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
  const [state, setState] = useState([]),
    [loadMore, setLoadMore] = useState(true),
    [metaCount, setMetaCount] = useState(0),
    [page, setPage] = useState(1),
    /**
     * HandleScroll - gets the elementId and on scroll triggers setLoadMore to true
     */
    handleScroll = debounce(() => {
      const list = document.getElementById(elementId),
        { scrollHeight, scrollTop, offsetHeight } = list

      if (scrollTop >= scrollHeight - offsetHeight - 60) {
        setLoadMore(true)
      }
    }, 500),
    /**
     * GetData - fetch
     * @param {bool} loadMore - value of setLoadMore state
     */
    getData = async loadMore => {
      if (loadMore) {
        const { data, meta } = await getTarget(
          page,
          limit,
          sort
        )

        setMeta && setMeta(meta)
        setMetaCount(meta.total)
        setPage(page + 1)

        handleStateUpdate(data)
        setLoading(false)
      }
    },
    /**
     * HandleStateUpdate - update the state of data
     * @param {array[]} data - list of data
     */
    handleStateUpdate = data => {
      setData &&
        setState(
          [...state, ...data],
          setData([...state, ...data])
        )

      setState([...state, ...data])
    },
    /**
     * IsLastPage- check if last page
     */
    isLastPage = () =>
      metaCount !== 0 &&
      Math.ceil(metaCount / limit) === page

  /**
   * UseEffect hook - triggers getData() when setLoadmore() has been updated
   */
  useEffect(() => {
    const list = document.getElementById(elementId),
      { innerHeight } = window,
      { clientHeight } = list

    setLoading(true)

    if (isLastPage()) {
      setLoadMore(false)
      setLoading(false)

      return
    }

    if (
      clientHeight <= innerHeight &&
      clientHeight &&
      !isLastPage()
    ) {
      setLoadMore(true)
      getData(loadMore)
    }
    setLoadMore(false)
  }, [loadMore])

  /**
   * UseEffect hook - scroll listener
   */
  useEffect(() => {
    document
      .getElementById(elementId)
      .addEventListener('scroll', handleScroll)

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
   * ElementId
   */
  elementId: PropTypes.string,
  /**
   * Target
   */
  target: PropTypes.string,
  /**
   * UpdateTarget
   */
  updateTarget: PropTypes.func,
  /**
   * SetLoading
   */
  setLoading: PropTypes.func,
  /**
   * SetData
   */
  setData: PropTypes.func,
  /**
   * SetMeta
   */
  setMeta: PropTypes.func,
  /**
   * Params
   */
  params: PropTypes.arrayOf().isRequired,
  /**
   * Limit
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
