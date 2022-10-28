import 'core-js/stable'
import 'regenerator-runtime/runtime'


/**
 * mocking ResizeObserver because react-laag library uses it
 * and logs "this browser doesn't support resize observer" warnings in testing enviroment
 */
window.ResizeObserver = require('resize-observer-polyfill')
