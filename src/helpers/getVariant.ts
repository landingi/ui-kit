export const getVariant = (quantity: number, limit: number) => {
  if (quantity < limit) {
    return 'progress'
  }

  if (quantity === limit) {
    return 'warning'
  }

  return 'alert'
}
