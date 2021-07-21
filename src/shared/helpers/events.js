/**
* Creates a throttled function that only invokes func at most once per
* every wait milliseconds
* @param {function} Func to throttle
* @param {number} [interval=0] The number of milliseconds to delay
* @return {function} Returns the new throttled function
*/
export const throttle = (func, interval) => {
  let timeout
  return function (...args) {
    const later = function () {
      timeout = false
    }
    if (!timeout) {
      func.apply(this, args)
      timeout = true
      setTimeout(later, interval)
    }
  }
}

/**
* Creates a debounced function that delays invoking func until after wait
* milliseconds have elapsed since the last time the debounced function was
* invoked
* @param {function} Func The function to throttle
* @param {number} [interval=0] The number of milliseconds to delay
* @return {function} Returns the new debounced function
*/
export const debounce = (func, interval) => {
  let timeout
  return function (...args) {
    const context = () => func.apply(this, args)
    clearTimeout(timeout)
    timeout = setTimeout(context, interval)
  }
}
