import { render as rtlRender } from '@testing-library/react'

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
