import '@testing-library/jest-dom'

import List from '@components/List'
import ListItem from '@components/List/Item'
import { render } from '@testing-library/react'
import React from 'react'

describe('<List/> mount', () => {
  const props = {
    children: (
      <ListItem variant='menu' size='small'>
        children
      </ListItem>
    )
  }

  it('list should be displayed', () => {
    const { queryByRole } = render(<List {...props} />)

    const listNode = queryByRole('list')

    expect(listNode).toBeVisible()
  })

  it('list has `list` class', () => {
    const { queryByRole } = render(<List {...props} />)

    const listNode = queryByRole('list')

    expect(listNode).toHaveClass('list')
  })

  it('<ListItem/> should be displayed with proper class', () => {
    const { queryByRole } = render(<List {...props} />)

    const listItemNode = queryByRole('listitem')

    expect(listItemNode).toBeVisible()

    expect(listItemNode).toHaveClass('list-item--small', 'list-item--menu')
  })
})
