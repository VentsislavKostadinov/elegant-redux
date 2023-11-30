import { Cart } from './Cart'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '../store/store'
import { ProviderWrapper } from '../utils/ProviderWrapper'

describe('Cart component', () => {
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

    const cartProp = {
        onClose: jest.fn(),
    }

    it('renders correctly', () => {
        const { asFragment } = render(
            <ProviderWrapper>
                <Cart {...cartProp} />
            </ProviderWrapper>,
        )
        expect(asFragment).toMatchSnapshot()
    })

    it('close modal correctly', () => {
        render(
            <ProviderWrapper>
                <Cart onClose={cartProp.onClose} />
            </ProviderWrapper>,
        )

        const closeButton = screen.getByTestId('cart-modal')
        expect(closeButton).toBeVisible

        const cartButton = screen.getByTestId('cart-button')
        fireEvent.click(cartButton)
        expect(cartProp.onClose).toHaveBeenCalledTimes(1)
    })
})
