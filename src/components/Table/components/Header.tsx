import type { HeaderProps, ItemBase } from '../types'

export const Header = <Item extends ItemBase>({
  columns
}: HeaderProps<Item>) => (
  <thead>
    <tr>
      {columns.map(({ header, identifier }) => {
        return <th key={identifier}>{header}</th>
      })}
    </tr>
  </thead>
)
