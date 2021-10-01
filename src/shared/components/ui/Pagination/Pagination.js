import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { FormattedMessage } from 'react-intl'
import { isEmpty } from '@helpers/data'
import { paginationShape } from '@shapes'
import { styles } from '@helpers/css'
import Button from '@components/ui/Button'
import List from '@components/ui/List'
import ListItem from '@components/ui/List/Item'
import PageSize from './PageSize'
import PropTypes from 'prop-types'
import React, { Fragment, useCallback } from 'react'
import scss from './Pagination.scss'

const cssClass = styles(scss),
  /**
   * Pagination - stateless presentational component
   * @param {object} props - props
   * @param {string|array} props.className - list of class names, default: pagination
   * @param {object} props.data - pagination links structure
   * @param {number} props.goToPage - page number
   * @param {number} props.activePageLimit - selected page limit
   * @param {number} props.pageLimit - page limit
   * @return {object} An object of children element
   */
  pagination = ({ className, data, goToPage, activePageLimit, pageLimit }) => {
    const { before_values, values, after_values } = data,
      { before, current, after } = values,
      handleGoToPage = page => useCallback(() => goToPage(page), []),
      hidePagination = current[0] === 1 && !after_values.next

    return (
      <div className={cssClass(className)}>
        <div className={scss.pagination__links}>
          {!hidePagination && (
            <>
              <span className={scss.pagination__first}>
                <Button onClick={handleGoToPage(1)} size='small' variant='icon'>
                  <FormattedMessage id='pagination.word.first' />
                </Button>
              </span>

              {!isEmpty(before_values) && (
                <Button
                  onClick={handleGoToPage(before_values.prev)}
                  size='small'
                  variant='icon'
                >
                  <FontAwesomeIcon icon='caret-left' />
                </Button>
              )}

              <List variant='inline'>
                {before.map((item, index) => (
                  <ListItem key={index}>
                    <Button
                      onClick={handleGoToPage(item)}
                      size='small'
                      variant='icon'
                    >
                      {item}
                    </Button>
                  </ListItem>
                ))}

                {current.map((item, index) => (
                  <ListItem
                    className={scss.pagination__links__current}
                    key={index}
                  >
                    <Button size='small' variant='icon'>
                      {item}
                    </Button>
                  </ListItem>
                ))}

                {after.map((item, index) => (
                  <ListItem key={index}>
                    <Button
                      onClick={handleGoToPage(item)}
                      size='small'
                      variant='icon'
                    >
                      {item}
                    </Button>
                  </ListItem>
                ))}
              </List>

              {after_values.and_so && (
                <span style={{ margin: '0 5px' }}>...</span>
              )}

              {after_values.next && (
                <Button
                  isDisabled={isEmpty(after_values.next)}
                  onClick={handleGoToPage(after_values.next)}
                  size='small'
                  variant='icon'
                >
                  <FontAwesomeIcon icon='caret-right' />
                </Button>
              )}
            </>
          )}
        </div>

        <PageSize activePageLimit={activePageLimit} onChange={pageLimit} />
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
   * ActivePageLimit selected page limit
   */
  activePageLimit: PropTypes.number.isRequired,

  /**
   * Classname, default `pagination`
   */
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),

  /**
   *  Data
   */
  data: PropTypes.shape(paginationShape).isRequired,

  /**
   * GoToPage page to go
   */
  goToPage: PropTypes.func.isRequired,
  /**
   * PageLimit
   */
  pageLimit: PropTypes.oneOfType([PropTypes.func, PropTypes.array]).isRequired
}

/**
 * The default properties.
 * @type {Object}
 */
pagination.defaultProps = {
  className: 'pagination'
}

export default pagination
