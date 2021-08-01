import React from 'react'
import { mount } from 'enzyme'
import { Provider } from 'react-redux'
import { store } from '../../src/shared/store/'
import { BrowserRouter as Router } from 'react-router-dom'

/**
 * makeStore — a util function that is used to create a new redux store
 * @function
 * @param {object} component - components
 * @return {object} An object of children element
 */
export const makeStore = component => (
  <Provider store={store}>
    <Router>{component}</Router>
  </Provider>
)

/**
 * makeMountRender - a util function that accepts a component and some default props.
 * We return a function so that we can override the default props if desired.
 * This function returns a react wrapper using enzyme’s mount.
 * @param {object} Component - component
 * @param {object} defaultProps - props
 * @return {object} An object of children element
 */
export const makeMountRender = (Component, defaultProps = {}) => {
  return (customProps = {}) => {
    const props = {
      ...defaultProps,
      ...customProps
    }
    return mount(<Component {...props} />)
  }
}

/**
 *  snapshotify - a util function that accepts an enzyme
 * react wrapper and calls its html method returning an HTML string.
 * @param {object} reactWrapper - react elements
 * @return {object} An object of children element
 */
export const snapshotify = reactWrapper => reactWrapper.html()
