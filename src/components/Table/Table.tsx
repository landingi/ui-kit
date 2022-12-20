import { Spacer } from '@components/Spacer'
import { Row } from 'simple-flexbox'

import {
  Body,
  EmptyMessage,
  Header,
  Loader,
  PageLimit,
  Pagination
} from './components'
import styles from './Table.module.scss'
import type { ItemBase, TableProps } from './types'

export const Table = <Item extends ItemBase>({
  name,
  data,
  columns,
  rowActions,
  options,
  selectAll,
  isSelectedAll,
  isSelectedAny,
  hasSelect,
  isSelected,
  select,
  selected,
  i18n,
  filtersAndSorters,
  hasHeader = true,
  isLoading,
  emptyMessage,
  pageCount,
  pageIndex,
  setPageIndex,
  setPageLimit,
  pageLimit,
  constantPageLimit,
  handleRefresh
}: TableProps<Item>) => {
  const columnsCount = columns.length + (hasSelect ? 1 : 0)

  const dataIsNotEmpty = Boolean(data.length)

  return (
    <div className={styles.wrapper}>
      {/* render filters and sorters above table when header is visible */}
      {hasHeader && filtersAndSorters && (
        <div className={styles['filters-sorters']}>
          {filtersAndSorters(handleRefresh)}
        </div>
      )}

      <table className={styles.table}>
        <Header
          columns={columns}
          options={options}
          selectAll={selectAll}
          isSelectedAll={isSelectedAll}
          isSelectedAny={isSelectedAny}
          i18n={i18n}
          selected={selected}
          filtersAndSorters={filtersAndSorters}
          hasHeader={hasHeader}
          handleRefresh={handleRefresh}
        />

        {isLoading && <Loader colSpan={columnsCount} />}

        {!isLoading && !dataIsNotEmpty && emptyMessage && (
          <EmptyMessage emptyMessage={emptyMessage} colSpan={columnsCount} />
        )}

        {!isLoading && dataIsNotEmpty && (
          <Body
            data={data}
            columns={columns}
            rowActions={rowActions}
            hasSelect={hasSelect}
            isSelected={isSelected}
            select={select}
            handleRefresh={handleRefresh}
          />
        )}
      </table>

      <Spacer />

      <Row justifyContent='space-between' className={styles.table__pagination}>
        <div />

        {pageCount > 1 ? (
          <Pagination
            i18n={i18n}
            pageIndex={pageIndex}
            pageCount={pageCount}
            onChange={setPageIndex}
          />
        ) : null}

        {constantPageLimit ? null : (
          <PageLimit
            pageLimit={pageLimit}
            onChange={setPageLimit}
            name={name}
            i18n={i18n}
          />
        )}
      </Row>
    </div>
  )
}
