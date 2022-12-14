import { useEffect, useState } from 'react'

export const useSelect = <Identifier>(
  values: Identifier[],
  initial: Identifier[],
  handleSelect: (identifiers: Identifier[]) => void
) => {
  const [selected, setSelected] = useState(initial || [])

  const checkAllDisabled = !values.length

  const isSelected = (identifier: Identifier) => selected.includes(identifier)

  const isSelectedAll =
    !checkAllDisabled && selected && selected.length === values.length

  const select = (identifier: Identifier) => {
    if (!selected.includes(identifier)) {
      setSelected(prev => [...prev, identifier])
    } else {
      setSelected(prev => prev.filter(item => item !== identifier))
    }
  }

  const selectAll = () => {
    if (values.length === selected.length) {
      setSelected([])
    } else {
      setSelected(values)
    }
  }

  useEffect(() => {
    if (handleSelect) {
      handleSelect(selected)
    }
  }, [handleSelect, selected])

  return {
    selected,
    isSelected,
    isSelectedAll,
    select,
    selectAll
  }
}
