import React from 'react'
import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import Footer from './Footer'

describe('footer component', () => {
    it('should render', () => {

        render(<Footer />)
        screen.getByText(/postura/i)
        screen.getByRole('button', { name: /see/i })

        fireEvent.click(
            screen.getByRole('button', { name: /see/i })
        )
        screen.getByText(/practice/i)
        screen.getByText(/example/i)

        screen.getByRole('button', { name: /close/i })

        fireEvent.click(
            screen.getByRole('button', { name: /close/i })
        )
    })
})