export type CartItemProps = {
    id: string
    title: string
    price: number
    quantity: number
}

export type CartStateProps = {
    items: CartItemProps[]
}
