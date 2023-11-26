import { ShopProps } from '../model/ShopProps'

export const Shop = ({ children }: ShopProps) => {
    return (
        <section id="shop">
            <h2>Elegant Clothing For Everyone</h2>

            <ul id="products">{children}</ul>
        </section>
    )
}
