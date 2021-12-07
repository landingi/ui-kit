import React, {
  Fragment,
  useLayoutEffect,
  useRef,
  useCallback,
  useState
} from 'react'
import PropTypes from 'prop-types'
import useIsOpen from '@helpers/hooks/useIsOpen'
import scss from './ShowMore.scss'

/**
 * Show more/less - stateful presentational component
 * @param {object} props
 * @param {number} props.height
 * @param {object} props.children
 * @param {object} props.i18n
 * @return {object} An object of children element
 */
const ShowMore = ({ height, children, i18n }) => {
  const isOpen = useIsOpen(false)
  const [sectionHeight, setSectionHeight] = useState(height)
  const [isButtonDisplay, setButtonDisplay] = useState(false)
  const content = useRef(null)

  useLayoutEffect(() => {
    const offsetHeight = content.current.offsetHeight

    content.current.offsetHeight > height
      ? setButtonDisplay(true)
      : setButtonDisplay(false)
    sectionHeight > offsetHeight
      ? isOpen.setValue(false)
      : isOpen.setValue(true)

    return () => {
      isOpen.setValue(false)
    }
  }, [])

  const handleOnClick = useCallback(event => {
    event.preventDefault()
    isOpen.toggleOneElement()

    const offsetHeight = isOpen.value ? undefined : height
    setSectionHeight(offsetHeight)
  })

  return (
    <Fragment>
      <div
        style={{
          maxHeight: sectionHeight
        }}
        className={scss.container}
      >
        <div ref={content}>{children}</div>
      </div>
      {isButtonDisplay && (
        <button type='button' onClick={handleOnClick} className={scss.button}>
          {isOpen.value ? `${i18n.more}` : `${i18n.less}`}
        </button>
      )}
    </Fragment>
  )
}

ShowMore.displayName = 'ShowMore'

ShowMore.propTypes = {
  height: PropTypes.number,
  children: PropTypes.instanceOf(Object).isRequired,
  i18n: PropTypes.shape({
    less: PropTypes.string,
    more: PropTypes.string
  })
}

ShowMore.defaultProps = {
  height: 100,
  i18n: {}
}

export default ShowMore
