import React, { useCallback, Fragment } from 'react'
import PropTypes from 'prop-types'
import Button from 'shared/components/ui/Button'
import List from 'shared/components/ui/List'
import ListItem from 'shared/components/ui/List/Item'
import { FormattedMessage } from 'react-intl'
import PageSize from './PageSize'
import { paginationShape } from 'shared/shapes'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { styles } from 'shared/helpers/css'
import { isEmpty } from 'shared/helpers/data'
import scss from './Pagination.scss'

const cssClass = styles(scss)

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
const pagination = ({
  className,
  data,
  goToPage,
  activePageLimit,
  pageLimit
}) => {
  const { before_values, values, after_values } = data
  const { before, current, after } = values

  const handleGoToPage = page => useCallback(() => goToPage(page), [])
  const hidePagination = current[0] === 1 && !after_values.next

  return (
    <div className={cssClass(className)}>
      <div className={scss.pagination__links}>
        {!hidePagination && (
          <Fragment>
            <span className={scss.pagination__first}>
              <Button
size="small"
variant="icon"
onClick={handleGoToPage(1)}>
                <FormattedMessage id="pagination.word.first" />
              </Button>
            </span>

            {!isEmpty(before_values) && (
              <Button
                variant="icon"
                size="small"
                onClick={handleGoToPage(before_values.prev)}
              >
                <FontAwesomeIcon icon="caret-left" />
              </Button>
            )}

            <List variant="inline">
              {before.map((item, index) => (
                <ListItem key={index}>
                  <Button
                    size="small"
                    variant="icon"
                    onClick={handleGoToPage(item)}
                  >
                    {item}
                  </Button>
                </ListItem>
              ))}

              {current.map((item, index) => (
                <ListItem
                  key={index}
                  className={scss.pagination__links__current}
                >
                  <Button
size="small"
variant="icon">
                    {item}
                  </Button>
                </ListItem>
              ))}

              {after.map((item, index) => (
                <ListItem key={index}>
                  <Button
                    size="small"
                    variant="icon"
                    onClick={handleGoToPage(item)}
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
                variant="icon"
                size="small"
                isDisabled={isEmpty(after_values.next)}
                onClick={handleGoToPage(after_values.next)}
              >
                <FontAwesomeIcon icon="caret-right" />
              </Button>
            )}
          </Fragment>
        )}
      </div>

      <PageSize
activePageLimit={activePageLimit}
onChange={pageLimit} />
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
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  /**
   *  Data
   */
  data: PropTypes.shape(paginationShape).isRequired,
  /**
   * goToPage page to go
   */
  goToPage: PropTypes.func.isRequired,
  /**
   * activePageLimit selected page limit
   */
  activePageLimit: PropTypes.number.isRequired,
  /** pageLimit
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
