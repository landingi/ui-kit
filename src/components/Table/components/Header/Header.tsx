import { Checkbox } from '@components/Checkbox'
import Spreader from '@components/Spreader'
import { useStyles } from '@helpers/hooks/useStyles'
import { Row } from 'simple-flexbox'

import type { HeaderProps, ItemBase } from '../../types'
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
  hasHeader
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
      <thead className={styles.thead}>
        <tr>
          <th className={thCheckboxStyles} colSpan={1}>
            <Checkbox
              checked={isSelectedAny}
              onChange={selectAll}
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

                {options(selected)}
              </Row>
            </th>
          )}

          {!isSelectedAny && hasHeader && columnsMap}

          {!isSelectedAny && !hasHeader && filtersAndSorters && (
            <th colSpan={optionsAriaColSpan}>{filtersAndSorters()}</th>
          )}
        </tr>
      </thead>
    )
  }

  return (
    <thead className={styles.thead}>
      <tr>{columnsMap}</tr>
    </thead>
  )
}