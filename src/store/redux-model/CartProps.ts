export type CartItem = {
    id: string
    title: string
    price: number
    quantity: number
}

export type CartState = {
    items: CartItem[]
}
