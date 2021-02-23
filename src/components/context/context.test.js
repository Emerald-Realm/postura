import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import React from 'react'
import Context from './Context'


describe('context component', () => {
    it('sholud render', () => {
        render(<Context />)
        screen.getByAltText(/nature/i)
        screen.getByText(/Learn/)
        screen.getByAltText(/chair/i)
        screen.getByAltText(/standing/i)
        screen.getByAltText(/walk/i)
        screen.getByAltText(/sleep/i)
        screen.getByText(/mistakes/i)
        screen.getByAltText(/yoga/i)
        screen.getAllByText(/pain/i)
        screen.getByAltText(/happy/i)
    })
})