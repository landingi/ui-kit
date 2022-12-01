import '@testing-library/jest-dom'

import { Avatar } from '@components/Avatar'
import { render, screen } from '@testing-library/react'

describe('<Avatar /> mount', () => {
  it('is mounted', () => {
    render(<Avatar />)
  })

  it('has text variant', () => {
    render(<Avatar variant='blank' name='Nazwa' />)

    screen.getByText('Nazwa')
  })

  it('has image variant', () => {
    render(<Avatar variant='image' src='imageSRC' />)

    expect(screen.getByRole('img')).toHaveAttribute('src', 'imageSRC')
  })

  it('has medium size', () => {
    render(<Avatar variant='blank' name='Nazwa' size='medium' />)

    expect(screen.getByTestId('avatar')).toHaveClass('avatar--medium')
  })

  it('has tiny size', () => {
    render(<Avatar variant='blank' name='Nazwa' size='tiny' />)

    expect(screen.getByTestId('avatar')).toHaveClass('avatar--tiny')
  })
})
