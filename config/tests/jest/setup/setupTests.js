import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import { configure } from 'enzyme'
import 'core-js/stable'
import 'regenerator-runtime/runtime'

configure({ adapter: new Adapter() })

/**
 * mocking ResizeObserver because react-laag library uses it
 * and logs "this browser doesn't support resize observer" warnings in testing enviroment
 */
window.ResizeObserver = require('resize-observer-polyfill')
