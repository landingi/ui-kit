import { Button } from '@components/Button'
import { List } from '@components/List'
import { ListItem } from '@components/List/Item'
import { PerfectDropdown } from '@components/PerfectDropdown'
import { emitCloseDropdown } from '@events/dropdown'
import { generateFakeUuid } from '@helpers/data'
import { setLocalStorage } from '@helpers/storage'
import { FC, ReactNode, useState } from 'react'

export interface FilterProps {
  values: { label: ReactNode; value: string | number }[]
  setValue?: (value: string | number) => void
  initialValue: string | number
  localStorageKey?: string
  customLabel?: (children: ReactNode) => ReactNode
  'data-testid'?: string
  dropdownPlacement?:
    | 'bottom-start'
    | 'bottom-end'
    | 'bottom-center'
    | 'top-start'
    | 'top-center'
    | 'top-end'
}

export const Filter: FC<FilterProps> = ({
  values,
  setValue,
  initialValue,
  localStorageKey,
  customLabel,
  'data-testid': dataTestId = 'filter-component',
  dropdownPlacement = 'bottom-end'
}) => {
  const findInitialValue = () => {
    const find = values.find(({ value }) => value === initialValue)

    return find?.label
  }

  const [filterLabel, setLabel] = useState(findInitialValue())

  const setFilter = (label: ReactNode, value: string | number) => {
    setLabel(label)
    setValue?.(value)

    if (localStorageKey) {
      setLocalStorage(localStorageKey, value.toString())
    }

    emitCloseDropdown()
  }

  const dropdownLabel = customLabel ? customLabel(filterLabel) : filterLabel

  return (
    <PerfectDropdown
      label={dropdownLabel}
      size='medium'
      data-testid={dataTestId}
      dropdownPlacement={dropdownPlacement}
    >
      <List>
        {values.map(({ value, label }) => (
          <ListItem key={generateFakeUuid()} variant='dropdown'>
            <Button
              onClick={() => setFilter(label, value)}
              tag='a'
              variant='dropdown'
            >
              {label}
            </Button>
          </ListItem>
        ))}
      </List>
    </PerfectDropdown>
  )
}

Filter.displayName = 'SelectFilter'
