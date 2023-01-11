import { Checkbox } from '@components/Checkbox'
import Spreader from '@components/Spreader'
import type { HeaderProps, ItemBase } from '@components/Table/types'
import { useStyles } from '@helpers/hooks/useStyles'
import { Row } from 'simple-flexbox'

import styles from './Header.module.scss'

export const Header = <Item extends ItemBase>({
  columns,
  options,
  selectAll,
  isSelectedAll,
  isSelectedAny,
  i18n,
  selected,
  filtersAndSorters,
  hasHeader,
  handleRefresh
}: HeaderProps<Item>) => {
  // depends on columns length and special case when columns with checkbox exists(options props)
  const optionsAriaColSpan = columns.length - (options ? 0 : 1)

  const columnsMap = columns.map(({ header, identifier, width }) => (
    <th className={styles.th} key={identifier} style={{ width }}>
      {header}
    </th>
  ))

  const thCheckboxStyles = useStyles({
    [styles.th]: true,
    [styles['th--checkbox']]: true
  })

  if (options) {
    return (
      <thead className={styles.thead} data-testid='header-options-variant'>
        <tr>
          <th className={thCheckboxStyles} colSpan={1}>
            <Checkbox
              checked={isSelectedAny}
              onChange={selectAll}
              table={isSelectedAll}
              tableDeselect={!isSelectedAll}
            />
          </th>

          {isSelectedAny && (
            <th className={styles['th--options']} colSpan={optionsAriaColSpan}>
              <Row alignItems='center'>
                <span>
                  {i18n.selected}

                  <Spreader spread='tiny' />

                  {selected.length}
                </span>

                <Spreader />

                {options(selected, handleRefresh)}
              </Row>
            </th>
          )}

          {!isSelectedAny && hasHeader && columnsMap}

          {!isSelectedAny && !hasHeader && filtersAndSorters && (
            <th
              colSpan={optionsAriaColSpan}
              data-testid='filters-and-selectors-in-header'
            >
              {filtersAndSorters(handleRefresh)}
            </th>
          )}
        </tr>
      </thead>
    )
  }

  return (
    <thead className={styles.thead} data-testid='header-default-variant'>
      <tr>
        {hasHeader && columnsMap}

        {!hasHeader && filtersAndSorters && (
          <th
            className={styles.th}
            colSpan={optionsAriaColSpan}
            data-testid='filters-and-sorters-no-header'
          >
            {filtersAndSorters(handleRefresh)}
          </th>
        )}
      </tr>
    </thead>
  )
}
