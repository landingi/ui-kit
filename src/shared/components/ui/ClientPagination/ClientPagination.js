import React, { useCallback, Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from '@components/ui/Button'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import { FormattedMessage } from 'react-intl'
import PageSize from './PageSize'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from '@helpers/css'
import scss from './ClientPagination.scss'

const cssClass = styles(scss)

/**
 * Pagination - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: pagination
 * @param {number} props.goToPage - page number
 * @param {number} props.pageIndex - active page index
 * @param {number} props.pageCount - page count
 * @param {number} props.activePageLimit - selected page limit
 * @param {number} props.pageLimit - page limit
 * @param {number} props.constantPageLimit - option to increase the number of items on the page
 * @return {object} An object of children element
 */

const pagination = ({
  className,
  goToPage,
  pageIndex,
  pageCount,
  activePageLimit,
  pageLimit,
  constantPageLimit
}) => {
  const handleGoToPage = page =>
    useCallback(() => goToPage(page), [])

  const renderPagination = () =>
    pageCount !== 1 && (
      <>
        <span className={scss.pagination__first}>
          <Button
            onClick={handleGoToPage(0)}
            size="small"
            variant="icon"
          >
            <FormattedMessage id="pagination.word.first" />
          </Button>
        </span>

        <Button
          onClick={handleGoToPage(pageIndex - 1)}
          size="small"
          variant="icon"
        >
          <FontAwesomeIcon icon="caret-left" />
        </Button>

        <List variant="inline">
          <ListItem variant="inline">
            <Button
              hide={pageIndex - 3 < 0}
              onClick={handleGoToPage(pageIndex - 3)}
              size="small"
              variant="icon"
            >
              {pageIndex - 2}
            </Button>
          </ListItem>

          <ListItem variant="inline">
            <Button
              hide={pageIndex - 2 < 0}
              onClick={handleGoToPage(pageIndex - 2)}
              size="small"
              variant="icon"
            >
              {pageIndex - 1}
            </Button>
          </ListItem>

          <ListItem variant="inline">
            <Button
              hide={pageIndex - 1 < 0}
              onClick={handleGoToPage(pageIndex - 1)}
              size="small"
              variant="icon"
            >
              {pageIndex}
            </Button>
          </ListItem>

          <ListItem
            className={scss.pagination__links__current}
            variant="inline"
          >
            <Button size="small"
variant="icon">
              {pageIndex + 1}
            </Button>
          </ListItem>

          <ListItem variant="inline">
            <Button
              hide={pageIndex + 2 >= pageCount}
              onClick={handleGoToPage(pageIndex + 1)}
              size="small"
              variant="icon"
            >
              {pageIndex + 2}
            </Button>
          </ListItem>

          <ListItem variant="inline">
            <Button
              hide={pageIndex + 4 !== pageCount}
              onClick={handleGoToPage(pageIndex + 1)}
              size="small"
              variant="icon"
            >
              {pageIndex + 3}
            </Button>
          </ListItem>

          {pageIndex + 4 < pageCount && (
            <ListItem variant="inline">
              <span>...</span>
            </ListItem>
          )}

          <ListItem variant="inline">
            <Button
              hide={pageIndex >= pageCount - 1}
              onClick={handleGoToPage(pageCount - 1)}
              size="small"
              variant="icon"
            >
              {pageCount}
            </Button>
          </ListItem>
        </List>

        <Button
          onClick={handleGoToPage(pageIndex + 1)}
          size="small"
          variant="icon"
        >
          <FontAwesomeIcon icon="caret-right" />
        </Button>

        <span className={scss.pagination__last}>
          <Button
            onClick={handleGoToPage(pageCount - 1)}
            size="small"
            variant="icon"
          >
            <FormattedMessage id="pagination.word.last" />
          </Button>
        </span>
      </>
    )

  return (
    <div className={cssClass(className)}>
      <div className={scss.pagination__links}>
        {renderPagination()}
      </div>

      {constantPageLimit === 0 && (
        <PageSize
          activePageLimit={activePageLimit}
          onChange={pageLimit}
        />
      )}
    </div>
  )
}

/**
 * Display name
 * @type {string}
 */
pagination.displayName = 'Pagination'

/**
 * The properties.
 * @type {Object}
 */
pagination.propTypes = {
  /**
   * Classname, default `pagination`
   */
  className: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  /**
   * goToPage page to go
   */
  goToPage: PropTypes.func.isRequired,
  /**
   * activePageLimit selected page limit
   */
  activePageLimit: PropTypes.number.isRequired,
  /**
   * pageLimit
   */
  pageLimit: PropTypes.func.isRequired,
  /**
   * pageIndex
   */
  pageIndex: PropTypes.number.isRequired,
  /**
   * pageCount
   */
  pageCount: PropTypes.number.isRequired,
  /**
   * constantPageLimit
   */
  constantPageLimit: PropTypes.number
}

/**
 * The default properties.
 * @type {Object}
 */
pagination.defaultProps = {
  className: 'pagination',
  constantPageLimit: 0
}

export default pagination
