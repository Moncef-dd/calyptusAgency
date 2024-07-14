import { render } from '@redwoodjs/testing/web'

import OurServices from './OurServices'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('OurServices', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<OurServices />)
    }).not.toThrow()
  })
})
