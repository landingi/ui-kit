import React from 'react'
import { render } from '@jestutils'
import Badge from '@components/Badge'
import '@testing-library/jest-dom'

const initialProps = {
  children: 'Badge'
}

describe('<Badge/> mount', () => {
  it('is mounted', () => {
    const { getByTestId } = render(<Badge {...initialProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toBeVisible()
  })

  it('should be rendered alert badge', () => {
    const newProps = {
      ...initialProps,
      type: 'alert'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--alert')
  })

  it('should be rendered info badge', () => {
    const newProps = {
      ...initialProps,
      type: 'info'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--info')
  })

  it('should be rendered success badge', () => {
    const newProps = {
      ...initialProps,
      type: 'success'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--success')
  })

  it('should be rendered pending badge', () => {
    const newProps = {
      ...initialProps,
      type: 'pending'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--pending')
  })

  it('should be rendered warning badge', () => {
    const newProps = {
      ...initialProps,
      type: 'warning'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--warning')
  })

  it('should be rendered accent-1 badge', () => {
    const newProps = {
      ...initialProps,
      type: 'accent-1'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--accent-1')
  })

  it('should be rendered accent-2 badge', () => {
    const newProps = {
      ...initialProps,
      type: 'accent-1'
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--accent-2')
  })

  it('when is indicator should have class badge--indicator', () => {
    const newProps = {
      ...initialProps,
      isIndicator: true
    }
    const { getByTestId } = render(<Badge {...newProps} />)

    const badgeNode = getByTestId('badge')

    expect(badgeNode).toHaveClass('badge--indicator')
  })

  // it('when the tooltip prop has not value the children span should not have badge-tooltip class', () => {
  //   const { getByTestId } = render(<Badge {...newProps} />)

  //   const badgeNode = getByTestId('badge')

  //   expect(badgeNode).toHaveClass('badge--indicator')
  // })

  // it('when the tooltip prop has value the children span should have badge-tooltip class', () => {
  //   wrapper.setProps({
  //     tooltip: 'tooltip'
  //   })

  //   expect(wrapper.find('span').at(2).hasClass('badge__tooltip')).toBe(true)
  // })

  // it('Tooltip is disabled when prop content is empty', () => {
  //   wrapper.setProps({
  //     content: null
  //   })

  //   expect(wrapper.find('Badge').prop('content')).toBe(null)
  //   expect(wrapper.find('Tooltip').prop('disabled')).toBe(true)
  // })

  // it('Tooltip is disabled when width < 105', () => {
  //   wrapper.setProps({
  //     width: 104
  //   })

  //   expect(wrapper.find('Badge').prop('content')).toBe(undefined)
  //   expect(wrapper.find('Tooltip').prop('disabled')).toBe(true)
  // })

  // it('Tooltip is visible', () => {
  //   wrapper.setProps({
  //     content: 'some content'
  //   })

  //   expect(wrapper.find('Badge').prop('content')).toBe('some content')
  // })
})
