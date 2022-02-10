import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom';
import Home from '../pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /Welcome to Hack Ideas/i,
    }, {level: 1})

    expect(heading).toBeInTheDocument()
  })
})