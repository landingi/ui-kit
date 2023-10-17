import { Button } from '@components/Button'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import { PerfectDropdown } from '@components/PerfectDropdown'
import { FC } from 'react'

import { filterValues, sortValues } from './Filters'

interface FiltersAndSortersProps {
  activeFilter?: number
  activeSorter?: string
}

export const FiltersAndSorters: FC<FiltersAndSortersProps> = ({
  activeFilter = filterValues[0].value,
  activeSorter = sortValues[0].value
}) => {
  const sorterLabel = sortValues.find(({ value }) => value === activeSorter)
  const filterLabel = filterValues.find(({ value }) => value === activeFilter)

  return (
    <List variant='inline'>
      <ListItem>
        <PerfectDropdown label={sorterLabel?.label} size='medium'>
          <List>
            {sortValues.map(({ value, label }) => (
              <ListItem key={value} variant='dropdown'>
                <Button tag='a' variant='dropdown'>
                  {label}
                </Button>
              </ListItem>
            ))}
          </List>
        </PerfectDropdown>
      </ListItem>

      <ListItem>
        <PerfectDropdown label={filterLabel?.label} size='medium'>
          <List>
            {filterValues.map(({ value, label }) => (
              <ListItem key={value} variant='dropdown'>
                <Button tag='a' variant='dropdown'>
                  {label}
                </Button>
              </ListItem>
            ))}
          </List>
        </PerfectDropdown>
      </ListItem>
    </List>
  )
}

FiltersAndSorters.displayName = 'FiltersAndSorters'
