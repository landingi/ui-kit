import React from 'react'
import { mount } from 'enzyme'
import { render as rtlRender } from '@testing-library/react'

/**
 * makeMountRender - a util function that accepts a component and some default props.
 * We return a function so that we can override the default props if desired.
 * This function returns a react wrapper using enzyme’s mount.
 * @param {object} Component - component
 * @param {object} defaultProps - props
 * @return {object} An object of children element
 */
export const makeMountRender = (
  Component,
  defaultProps = {}
) => {
  return (customProps = {}) => {
    const props = {
      ...defaultProps,
      ...customProps
    }
    return mount(<Component {...props} />)
  }
}


/**
  * render function that overrides react-testing-library render functions
  * it wraps given component with IntlProvider
  * @param {object} ui - component to render
  * @param {object} param1
  * @return wrapped element
*/
const render = (ui, { ...renderOptions } = {}) => {
  const wrapper = ({ children }) => children

  return rtlRender(ui, { wrapper, ...renderOptions })
}

export * from '@testing-library/react'

export { render }
