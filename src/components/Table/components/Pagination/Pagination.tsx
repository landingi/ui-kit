import Button from '@components/Button'
import { Icon } from '@components/Icon'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import { PaginationProps } from '@components/Table/types'
import { FC } from 'react'

import styles from './Pagination.module.scss'

export const Pagination: FC<PaginationProps> = ({
  pageIndex,
  pageCount,
  i18n,
  onChange
}) => {
  const handleChangePage = (page: number) => () => onChange(page)

  return (
    <div className={styles.pagination__links}>
      <span className={styles.pagination__first}>
        <Button
          onClick={handleChangePage(1)}
          size='small'
          variant='icon'
          isDisabled={pageIndex === 1}
        >
          {i18n.first}
        </Button>
      </span>

      <Button
        isDisabled={pageIndex === 1}
        onClick={handleChangePage(pageIndex - 1)}
        size='small'
        variant='icon'
      >
        <Icon icon='icon-caret-left' />
      </Button>

      <List variant='inline'>
        <ListItem>
          <Button
            onClick={handleChangePage(pageIndex - 2)}
            hide={pageIndex - 2 <= 0}
            size='small'
            variant='icon'
          >
            {pageIndex - 2}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            onClick={handleChangePage(pageIndex - 1)}
            hide={pageIndex - 1 <= 0}
            size='small'
            variant='icon'
          >
            {pageIndex - 1}
          </Button>
        </ListItem>

        <ListItem className={styles.pagination__links__current}>
          <Button size='small' variant='icon'>
            {pageIndex}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            hide={pageIndex + 1 > pageCount}
            onClick={handleChangePage(pageIndex + 1)}
            size='small'
            variant='icon'
          >
            {pageIndex + 1}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            onClick={handleChangePage(pageIndex + 2)}
            hide={pageIndex + 2 >= pageCount}
            size='small'
            variant='icon'
          >
            {pageIndex + 2}
          </Button>
        </ListItem>

        <ListItem>
          <Button
            onClick={handleChangePage(pageIndex + 3)}
            hide={pageIndex + 4 !== pageCount}
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
            onClick={handleChangePage(pageCount)}
            hide={pageIndex >= pageCount - 1}
            size='small'
            variant='icon'
          >
            {pageCount}
          </Button>
        </ListItem>
      </List>

      <Button
        onClick={handleChangePage(pageIndex + 1)}
        size='small'
        variant='icon'
        isDisabled={pageIndex === pageCount}
      >
        <Icon icon='icon-caret-right' />
      </Button>

      <span className={styles.pagination__last}>
        <Button
          onClick={handleChangePage(pageCount)}
          size='small'
          variant='icon'
          isDisabled={pageIndex === pageCount}
        >
          {i18n.last}
        </Button>
      </span>
    </div>
  )
}

Pagination.displayName = 'Pagination'
