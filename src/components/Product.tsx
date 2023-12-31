import { ProductProps } from '../model/ProductProps'
import { addToCart } from '../store/cart-slice'
import { useCartDispatch } from '../store/hooks'
import './Product.scss'

export const Product = ({
    id,
    image,
    title,
    price,
    description,
}: ProductProps) => {
    const dispatch = useCartDispatch()

    const handleAddToCart = () => {
        dispatch(
            addToCart({
                id,
                title,
                price,
            }),
        )
    }

    return (
        <article className="product">
            <img src={image} alt={title} />
            <div className="product-content">
                <div>
                    <h3>{title}</h3>
                    <p className="product-price">${price}</p>
                    <p>{description}</p>
                </div>
                <p className="product-actions">
                    <button onClick={handleAddToCart}>Add to Cart</button>
                </p>
            </div>
        </article>
    )
}
