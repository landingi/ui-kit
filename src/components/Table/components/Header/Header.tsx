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
  const columnsMap = columns.map(({ header, identifier, width }) => (
    <div className={styles.th} key={identifier} style={{ width }}>
      {header}
    </div>
  ))

  const gridTemplateColumns = options
    ? `65px 1fr`
    : columns.reduce((acc, { width }) => `${acc} ${width || '1fr'}`, '')

  const thOptionsVariantStyle = useStyles({
    [styles.th]: true,
    [styles['th--options']]: true
  })

  const thOptionsStyle = useStyles({
    [styles.th]: true,
    [styles.th__options]: true
  })

  if (options) {
    return (
      <div
        className={styles.thead}
        style={{
          gridTemplateColumns
        }}
        data-testid='header-options-variant'
      >
        <div className={thOptionsVariantStyle}>
          <Checkbox
            checked={isSelectedAny}
            onChange={selectAll}
            table={isSelectedAll}
            tableDeselect={!isSelectedAll}
          />
        </div>

        {isSelectedAny && (
          <div className={thOptionsStyle}>
            <Row alignItems='center'>
              <span>
                {i18n.selected}

                <Spreader spread='tiny' />

                {selected.length}
              </span>

              <Spreader />

              {options(selected, handleRefresh)}
            </Row>
          </div>
        )}

        {!isSelectedAny && hasHeader && columnsMap}

        {!isSelectedAny && !hasHeader && filtersAndSorters && (
          <div
            className={styles.th}
            data-testid='filters-and-selectors-in-header'
          >
            {filtersAndSorters(handleRefresh)}
          </div>
        )}
      </div>
    )
  }

  return (
    <div
      className={styles.thead}
      style={{
        gridTemplateColumns
      }}
      data-testid='header-default-variant'
    >
      {hasHeader && columnsMap}

      {!hasHeader && filtersAndSorters && (
        <div className={styles.th} data-testid='filters-and-sorters-no-header'>
          {filtersAndSorters(handleRefresh)}
        </div>
      )}
    </div>
  )
}
