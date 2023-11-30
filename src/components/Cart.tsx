import { createPortal } from 'react-dom'
import { CartItems } from './CartItems.tsx'
import { CartProps } from '../model/CartProps.ts'
import './Cart.scss'

export const Cart = ({ onClose }: CartProps) => {
    return createPortal(
        <>
            <div className="cart-backdrop" />
            <dialog id="cart-modal" data-testid="cart-modal" open>
                <h2>Your Cart</h2>
                <CartItems />
                <p id="cart-actions">
                    <button data-testid="cart-button" onClick={onClose}>
                        Close
                    </button>
                </p>
            </dialog>
        </>,
        document.getElementById('modal')!,
    )
}
