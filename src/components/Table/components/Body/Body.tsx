import type { BodyProps, ItemBase } from '../../types'
import { Tr } from './Tr'

export const Body = <Item extends ItemBase>({
  data,
  columns
}: BodyProps<Item>) => (
  <tbody>
    {data.map(item => (
      <Tr columns={columns} item={item} />
    ))}
  </tbody>
)
