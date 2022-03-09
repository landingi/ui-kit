import Icon from '@components/ui/Icon'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import PageSize from './PageSize'
import PropTypes from 'prop-types'
import React, { Fragment, useCallback } from 'react'
import scss from './ClientPagination.scss'

const cssClass = styles(scss)

// TODO Pagination css, mdx and tests
/**
 * Pagination - stateless presentational component
 * @param {object} props - props
 * @param {string|array} props.className - list of class names, default: pagination
 * @param {number} props.goToPage - page number
 * @param {number} props.pageIndex - active page index
 * @param {number} props.pageCount - page count
 * @param {number} props.activePageLimit - selected page limit
 * @param {number} props.pageLimit - page limit
 * @param {object} props.i18n
 * @param {number} props.constantPageLimit - option to increase the number of items on the page
 * @return {object} An object of children element
 */
const Pagination = ({
  className,
  goToPage,
  pageIndex,
  pageCount,
  activePageLimit,
  pageLimit,
  constantPageLimit,
  i18n
}) => {
  const handleGoToPage = useCallback(page => goToPage(page), [goToPage]),
    renderPagination = () =>
      pageCount !== 1 && (
        <>
          <span className={scss.pagination__first}>
            <Button onClick={handleGoToPage(0)} size='small' variant='icon'>
              {i18n.first}
            </Button>
          </span>

          <Button
            onClick={handleGoToPage(pageIndex - 1)}
            size='small'
            variant='icon'
          >
            <Icon icon='icon-caret-left' />
          </Button>

          <List variant='inline'>
            <ListItem>
              <Button
                hide={pageIndex - 3 < 0}
                onClick={handleGoToPage(pageIndex - 3)}
                size='small'
                variant='icon'
              >
                {pageIndex - 2}
              </Button>
            </ListItem>

            <ListItem>
              <Button
                hide={pageIndex - 2 < 0}
                onClick={handleGoToPage(pageIndex - 2)}
                size='small'
                variant='icon'
              >
                {pageIndex - 1}
              </Button>
            </ListItem>

            <ListItem>
              <Button
                hide={pageIndex - 1 < 0}
                onClick={handleGoToPage(pageIndex - 1)}
                size='small'
                variant='icon'
              >
                {pageIndex}
              </Button>
            </ListItem>

            <ListItem className={scss.pagination__links__current}>
              <Button size='small' variant='icon'>
                {pageIndex + 1}
              </Button>
            </ListItem>

            <ListItem>
              <Button
                hide={pageIndex + 2 >= pageCount}
                onClick={handleGoToPage(pageIndex + 1)}
                size='small'
                variant='icon'
              >
                {pageIndex + 2}
              </Button>
            </ListItem>

            <ListItem variant='inline'>
              <Button
                hide={pageIndex + 4 !== pageCount}
                onClick={handleGoToPage(pageIndex + 1)}
                size='small'
                variant='icon'
              >
                {pageIndex + 3}
              </Button>
            </ListItem>

            {pageIndex + 4 < pageCount && (
              <ListItem>
                <span>...</span>
              </ListItem>
            )}

            <ListItem>
              <Button
                hide={pageIndex >= pageCount - 1}
                onClick={handleGoToPage(pageCount - 1)}
                size='small'
                variant='icon'
              >
                {pageCount}
              </Button>
            </ListItem>
          </List>

          <Button
            onClick={handleGoToPage(pageIndex + 1)}
            size='small'
            variant='icon'
          >
            <Icon icon='icon-caret-right' />
          </Button>

          <span className={scss.pagination__last}>
            <Button
              onClick={handleGoToPage(pageCount - 1)}
              size='small'
              variant='icon'
            >
              {i18n.last}
            </Button>
          </span>
        </>
      )

  return (
    <div className={cssClass(className)}>
      <div className={scss.pagination__links}>{renderPagination()}</div>

      {constantPageLimit === 0 && (
        <PageSize activePageLimit={activePageLimit} onChange={pageLimit} />
      )}
    </div>
  )
}

Pagination.displayName = 'Pagination'

Pagination.propTypes = {
  activePageLimit: PropTypes.number.isRequired,
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  constantPageLimit: PropTypes.number,
  goToPage: PropTypes.func.isRequired,
  pageCount: PropTypes.number.isRequired,
  pageIndex: PropTypes.number.isRequired,
  pageLimit: PropTypes.func.isRequired,
  i18n: PropTypes.shape({
    first: PropTypes.string,
    last: PropTypes.string
  })
}

Pagination.defaultProps = {
  className: 'pagination',
  constantPageLimit: 0,
  i18n: {}
}

export default Pagination
