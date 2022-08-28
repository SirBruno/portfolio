import '@testing-library/jest-dom'

// __tests__/index.test.jsx

import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Home', () => {
  it('renders two headings', () => {
    render(<Home />)

    const h1 = screen.getByRole('heading', { name: 'BRUNO SILVA', })
    const h2 = screen.getByRole('heading', { name: 'シルバブルーノ', })

    expect(h1).toBeInTheDocument()
    expect(h2).toBeInTheDocument()
  })
})