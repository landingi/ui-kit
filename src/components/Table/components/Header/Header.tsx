import { Checkbox } from '@components/Checkbox'
import Spreader from '@components/Spreader'
import type { HeaderProps, ItemBase } from '@components/Table/types'
import { useStyles } from '@helpers/hooks/useStyles'
import { Fragment } from 'react'
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
  handleRefresh,
  externalBorder,
  extraHeaderContent,
  deselectAll
}: HeaderProps<Item>) => {
  const columnsMap = (
    <Fragment>
      {columns.map(({ header, identifier, width }) => (
        <div className={styles.th} key={identifier} style={{ width }}>
          {header}
        </div>
      ))}

      {extraHeaderContent && (
        <div className={styles.th}>{extraHeaderContent(handleRefresh)}</div>
      )}
    </Fragment>
  )

  const columnsReducer = `${columns.reduce(
    (acc, { width }) => `${acc} ${width || '1fr'}`,
    ''
  )} ${extraHeaderContent ? 'max-content' : ''}`

  const gridTemplateColumns = options
    ? `65px ${hasHeader && !isSelectedAny ? columnsReducer : '1fr'}`
    : columnsReducer

  const thOptionsVariantStyle = useStyles({
    [styles.th]: true,
    [styles['th--options']]: true
  })

  const thOptionsStyle = useStyles({
    [styles.th]: true,
    [styles['th--options']]: true,
    [styles.th__options]: options
  })

  const theadStyle = useStyles({
    [styles.thead]: true,
    [styles['thead--externalBorder']]: externalBorder
  })

  if (options) {
    return (
      <div
        className={theadStyle}
        style={{
          gridTemplateColumns
        }}
        data-testid='header-options-variant'
      >
        <div className={thOptionsVariantStyle}>
          <Checkbox
            checked={isSelectedAny}
            onChange={selectAll}
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

              {options(selected, {
                handleRefresh,
                deselectAll
              })}
            </Row>
          </div>
        )}

        {!isSelectedAny && hasHeader && columnsMap}

        {!isSelectedAny && !hasHeader && filtersAndSorters && (
          <div
            className={thOptionsVariantStyle}
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
      className={theadStyle}
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
