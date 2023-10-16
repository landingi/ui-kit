import { Loader } from '@components/Loader'
import { Spacer } from '@components/Spacer'
import { useStyles } from '@helpers/hooks/useStyles'
import { Row } from 'simple-flexbox'

import { Body, Header, PageLimit, Pagination } from './components'
import styles from './Table.module.scss'
import type { ItemBase, TableProps } from './types'

export const Table = <Item extends ItemBase>({
  name,
  data,
  columns,
  rowActions,
  options,
  hasSelect,
  i18n,
  filtersAndSorters,
  hasHeader = true,
  isLoading,
  emptyMessage,
  pageCount,
  setPageLimit,
  pageLimit,
  constantPageLimit,
  handleRefresh,
  pagination,
  externalBorder,
  extraHeaderContent,
  selectAll,
  isSelectedAll,
  isSelectedAny,
  selected,
  isSelected,
  select,
  hasStyledFirstRow,
  hasCustomPageLimit = false
}: TableProps<Item>) => {
  const dataIsNotEmpty = Boolean(data.length)

  const loaderWrapperStyles = useStyles({
    [styles['loaderWrapper--externalBorder']]: externalBorder
  })

  return (
    <div className={styles.wrapper}>
      {/* render filters and sorters above table when header is visible */}
      {hasHeader && filtersAndSorters && (
        <div
          className={styles['filters-sorters']}
          data-testid='filters-and-sorters-header-enabled'
        >
          {filtersAndSorters(handleRefresh)}
        </div>
      )}

      <div className={styles.table}>
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
          externalBorder={externalBorder}
          extraHeaderContent={extraHeaderContent}
        />

        {isLoading && (
          <div className={loaderWrapperStyles}>
            <Loader />
          </div>
        )}

        {!isLoading && !dataIsNotEmpty && emptyMessage && (
          <Row justifyContent='center'>{emptyMessage()}</Row>
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
            externalBorder={externalBorder}
            hasStyledFirstRow={hasStyledFirstRow}
          />
        )}
      </div>

      <Spacer />

      <Row justifyContent='space-between' className={styles.table__pagination}>
        <div />

        {pageCount > 1 ? (
          <Pagination
            i18n={i18n}
            pageCount={pageCount}
            pagination={pagination}
          />
        ) : null}

        {constantPageLimit ? null : (
          <PageLimit
            pageLimit={pageLimit}
            onChange={setPageLimit}
            name={name}
            i18n={i18n}
            hasCustomPageLimit={hasCustomPageLimit}
          />
        )}
      </Row>
    </div>
  )
}
