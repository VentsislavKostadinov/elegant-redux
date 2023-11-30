import { Cart } from './Cart'
import { fireEvent, render } from '@testing-library/react'

describe('Cart component', () => {
    const root = document.getElementById('root')
    const cartProp = {
        onClose: jest.fn,
    }

    it('renders correctly', () => {
        if (root) {
            const { asFragment } = render(<Cart {...cartProp} />)
            expect(asFragment).toMatchSnapshot()
        }
    })

    it('close modal correctly', () => {
        if (root) {
            render(<Cart {...cartProp} />)

            const closeButton = document.querySelector('.cart-modal')
            expect(closeButton).toHaveAttribute('open')
        }
    })
})
