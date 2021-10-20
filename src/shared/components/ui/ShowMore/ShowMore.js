import React, {
  Fragment,
  useLayoutEffect,
  useRef,
  useCallback,
  useState
} from 'react'
import PropTypes from 'prop-types'
import useIsOpen from '@helpers/hooks/useIsOpen'
import { FormattedMessage } from 'react-intl'
import scss from './ShowMore.scss'

/**
 * Show more/less - stateful presentational component
 * @param {object} props - props
 * @param {number} props.height - container height
 * @param {object} props.children - content to display
 * @return {object} An object of children element
 */
const ShowMore = ({ height, children }) => {
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
          {isOpen.value ? (
            <FormattedMessage id='show.more' />
          ) : (
            <FormattedMessage id='show.less' />
          )}
        </button>
      )}
    </Fragment>
  )
}

/**
 * Display name
 * @type {string}
 */
ShowMore.displayName = 'Show more/less'

/**
 * The properties.
 * @type {Object}
 */
ShowMore.propTypes = {
  /**
   * Height
   */
  height: PropTypes.number,
  /**
   * Content
   */
  children: PropTypes.instanceOf(Object).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
ShowMore.defaultProps = {
  height: 100
}

export default ShowMore
