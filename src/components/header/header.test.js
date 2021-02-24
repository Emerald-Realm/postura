import { fireEvent, getByRole, render, screen } from '@testing-library/react'
import React from 'react'
import DesktopHeader from './DesktopHeader'
import MobileHeader from './MobileHeader'

describe('header component', () => {
    it('should render the following links in desktop view', () => {
        render(<DesktopHeader />)
        // screen.getByRole('list-item', { name : 'sitting'})
        screen.getByText(/postura/i)
        screen.getByText(/sitting/i)
        screen.getByText(/standing/i)
        screen.getByText(/walking/i)
        screen.getByText(/sleeping/i)
        screen.getAllByText(/Advantages/i)
        screen.getByText(/disadvantages/i)
        screen.getByText(/exercise/i)

    })

    it('should render the following links in mobile view', () => {
        render(<MobileHeader />)
        screen.getByRole('button', { name: /menu/i })
        fireEvent.click(
            screen.getByRole('button', { name: /menu/i })
        )
        screen.getByRole('button', { name: /close/i })
        screen.getByText(/postura/i)
        screen.getByText(/sitting/i)
        screen.getByText(/standing/i)
        screen.getByText(/walking/i)
        screen.getByText(/sleeping/i)
        screen.getAllByText(/Advantages/i)
        screen.getByText(/disadvantages/i)
        screen.getByText(/exercise/i)
        fireEvent.click(
            screen.getByRole('button', { name: /close/i })
        )
    })
})