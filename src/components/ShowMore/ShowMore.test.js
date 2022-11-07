import React from 'react'
import { render } from '@testing-library/react'
import { fireEvent } from '@testing-library/react'
import ShowMore from '@components/ShowMore'
import '@testing-library/jest-dom'

describe('<ShowMore/> tests', () => {
  it('<ShowMore/> mout with short content', () => {
    const props = {
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
          venenatis risus. Etiam volutpat sed metus sed vehicula.
        </p>
      ),
      i18n: { more: 'Show More', less: 'Show Less' }
    }

    render(<ShowMore {...props} />)
  })

  it('<ShowMore/> mout with long content', async () => {
    const props = {
      children: (
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel
          venenatis risus. Etiam volutpat sed metus sed vehicula. Sed non nunc
          nec ex ullamcorper bibendum nec sed nisl. Aenean est magna, blandit ac
          libero at, tristique auctor massa. Aenean fermentum venenatis finibus.
          Ut facilisis turpis sit amet felis aliquet, quis placerat augue
          sollicitudin. Quisque cursus tincidunt nisi. Morbi vitae ligula
          sagittis, pharetra metus condimentum, tempor odio.
        </p>
      ),
      i18n: { more: 'Show More', less: 'Show Less' },
      height: -1
    }

    const { getByTestId } = render(<ShowMore {...props} />)

    const showMore = getByTestId('show-more')

    fireEvent.click(showMore)

    fireEvent.click(showMore)
  })
})
