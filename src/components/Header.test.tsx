import { Header } from './Header'
import { render, screen } from '@testing-library/react'
import { ProviderWrapper } from '../utils/ProviderWrapper'

describe('Render App correctly', () => {
    let mockModal: HTMLElement
    let modal: HTMLElement | null

    beforeEach(() => {
        mockModal = document.createElement('div')
        mockModal.setAttribute('id', 'modal')
        document.body.appendChild(mockModal)
        modal = document.getElementById('modal')
    })

    afterEach(() => {
        document.body.removeChild(mockModal)
    })

    it('matches snapshot', () => {
        const { asFragment } = render(
            <ProviderWrapper>
                <Header />
            </ProviderWrapper>,
        )
        expect(asFragment).toMatchSnapshot()
    })

    it('renders correctly', () => {
        render(
            <ProviderWrapper>
                <Header />
            </ProviderWrapper>,
        )

        const mainHeader = screen.getByTestId('main-header')
        expect(mainHeader).toBeVisible

        const mainTitle = screen.getByTestId('main-title')
        expect(mainTitle?.innerHTML).toContain('Elegant Redux')

        const cartButton = screen.getByTestId('header-cart-button')
        expect(cartButton?.innerHTML).toContain('Cart 0')
    })
})
