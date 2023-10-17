import { Button } from '@components/Button'
import { Icon } from '@components/Icon'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import { PaginationProps } from '@components/Table/types'
import { FC } from 'react'

import styles from './Pagination.module.scss'

export const Pagination: FC<PaginationProps> = ({
  pageCount,
  i18n,
  pagination
}) => {
  const { current, handlePageChange } = pagination

  const handleChangePage = (page: number) => () => {
    if (handlePageChange) {
      handlePageChange(page)
    }
  }

  return (
    <div
      className={styles.pagination__links}
      data-testid='pagination-component'
    >
      <span className={styles.pagination__first}>
        <Button
          onClick={handleChangePage(1)}
          size='small'
          variant='icon'
          isDisabled={current === 1}
        >
          {i18n.first}
        </Button>
      </span>

      <Button
        isDisabled={current === 1}
        onClick={handleChangePage(current - 1)}
        size='small'
        variant='icon'
      >
        <Icon icon='icon-caret-left' />
      </Button>

      <List variant='inline'>
        <ListItem>
          <Button
            onClick={handleChangePage(current - 2)}
            hide={current - 2 <= 0}
            size='small'
            variant='icon'
          >
            {current - 2}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            onClick={handleChangePage(current - 1)}
            hide={current - 1 <= 0}
            size='small'
            variant='icon'
          >
            {current - 1}
          </Button>
        </ListItem>

        <ListItem className={styles.pagination__links__current}>
          <Button size='small' variant='icon'>
            {current}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            hide={current + 1 > pageCount}
            onClick={handleChangePage(current + 1)}
            size='small'
            variant='icon'
          >
            {current + 1}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            onClick={handleChangePage(current + 2)}
            hide={current + 2 >= pageCount}
            size='small'
            variant='icon'
          >
            {current + 2}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            onClick={handleChangePage(current + 3)}
            hide={current + 4 !== pageCount}
            size='small'
            variant='icon'
          >
            {current + 3}
          </Button>
        </ListItem>

        {current + 4 < pageCount && (
          <ListItem>
            <span>...</span>
          </ListItem>
        )}

        <ListItem>
          <Button
            onClick={handleChangePage(pageCount)}
            hide={current >= pageCount - 1}
            size='small'
            variant='icon'
          >
            {pageCount}
          </Button>
        </ListItem>
      </List>

      <Button
        onClick={handleChangePage(current + 1)}
        size='small'
        variant='icon'
        isDisabled={current === pageCount}
        data-testid='pagination-next'
      >
        <Icon icon='icon-caret-right' />
      </Button>

      <span className={styles.pagination__last}>
        <Button
          onClick={handleChangePage(pageCount)}
          size='small'
          variant='icon'
          isDisabled={current === pageCount}
        >
          {i18n.last}
        </Button>
      </span>
    </div>
  )
}

Pagination.displayName = 'Pagination'
