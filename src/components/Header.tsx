import { useState } from 'react'
import { useCartSelector } from '../store/hooks.ts'
import { Cart } from './Cart.tsx'
import './Header.scss'

export const Header = () => {
    const [cartIsVisible, setCartIsVisible] = useState(false)
    const cartQuantity = useCartSelector((state) =>
        state.cart.items.reduce((val, item) => val + item.quantity, 0),
    )

    const handleOpenCartClick = () => {
        setCartIsVisible(true)
    }

    const handleCloseCartClick = () => {
        setCartIsVisible(false)
    }

    return (
        <>
            {cartIsVisible && <Cart onClose={handleCloseCartClick} />}
            <header id="main-header" data-testid="main-header">
                <div id="main-title">
                    <img src="logo.png" alt="Elegant model" />
                    <h1 data-testid="main-title">Elegant Redux</h1>
                </div>
                <p>
                    <button
                        data-testid="header-cart-button"
                        onClick={handleOpenCartClick}
                    >
                        Cart {cartQuantity}
                    </button>
                </p>
            </header>
        </>
    )
}
