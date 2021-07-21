/**
 * Wait - promise time out
 * @function wait
 * @param {number} ms
 * @return {promise} return promise
 */
export const wait = ms => new Promise(resolve => setTimeout(resolve, ms))
