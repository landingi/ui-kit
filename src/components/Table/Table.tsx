import { Body, EmptyMessage, Header, Loader } from './components'
import styles from './Table.module.scss'
import type { ItemBase, TableProps } from './types'

export const Table = <Item extends ItemBase>({
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
  emptyMessage
}: TableProps<Item>) => {
  const columnsCount = columns.length + (hasSelect ? 1 : 0)

  const dataIsNotEmpty = Boolean(data.length)

  console.log({ dataIsNotEmpty })

  return (
    <div className={styles.wrapper}>
      {/* render filters and sorters above table when header is visible */}
      {hasHeader && filtersAndSorters && (
        <div className={styles['filters-sorters']}>{filtersAndSorters()}</div>
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
          />
        )}
      </table>
    </div>
  )
}
