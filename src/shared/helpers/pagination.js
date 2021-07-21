/**
 * buildPagination - build pagination request for cursor pagination
 * @function buildPagination
 * @param {number} cursorOffset
 * @param {number} pageIndex
 * @param {number} pagination
 * @return {object} return object of pagination request
 */

export const buildPagination = ({
  cursorOffset,
  pageIndex,
  pagination
}) => {
  if (pageIndex === 0) {
    return null
  }

  const { current: { before, after } } = pagination

  if (cursorOffset > 0) {
    return {
      pagination: {
        cursors: { after }
      }
    }
  }

  if (cursorOffset < 0) {
    return {
      pagination: {
        cursors: { before }
      }
    }
  }
}
