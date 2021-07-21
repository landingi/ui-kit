/**
 * isUnlimited - check add-ons are unlimited
 * @function isUnlimited
 * @param {number} limit - add-ons limit
 * @return {bool} return true or false
 */
export const isUnlimited = limit => limit === -1

/**
 * getVariant - compare quantity with limit
 * @function getVariant
 * @param {number} quantity - add-ons quantity
 * @param {number} limit - add-ons limit
 * @return {string} return variant name
 */
export const getVariant = (quantity, limit) => {
  if (quantity < limit) {
    return 'progress'
  }

  if (quantity === limit) {
    return 'warning'
  }

  if (quantity > limit) {
    return 'alert'
  }
}

/**
 * getLimitExceededMessage - compare quantity with limit
 * @function getLimitExceededMessage
 * @param {number} quantity - add-ons quantity
 * @param {number} limit - add-ons limit
 * @return {string} return tranlation name
 */
export const getLimitExceededMessage = (quantity, limit) => {
  if (quantity < limit) {
    return ''
  }

  if (quantity === limit) {
    return 'word.limit.reached'
  }

  if (quantity > limit) {
    return 'word.limit.exceeded'
  }
}

/**
 * handleLimitsDisplay - check if the permissions exist
 * @function handleLimitsDisplay
 * @return {bool} return true or false
 */
export const handleLimitsDisplay = permissions => {
  const {
    permissions: { canSeeDomainsLimit, canSeeSubaccountsActiveLimit, canSeeUniqueUsersLimit }
  } = permissions

  return !canSeeDomainsLimit && !canSeeSubaccountsActiveLimit && !canSeeUniqueUsersLimit
}

/**
 * getLimitExceededWarning - compare quantity with limit
 * @function getLimitExceededWarning
 * @param {number} count - count
 * @param {number} limit - limit
 * @return {bool} returns whether the values are equal
 */
export const getLimitExceededWarning = (count, limit) => count === limit
