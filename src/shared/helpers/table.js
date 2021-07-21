export const selectedFlatRowsMap = selectedFlatRows =>
  selectedFlatRows.length > 0
    ? selectedFlatRows.map(item => item.original)
    : null
