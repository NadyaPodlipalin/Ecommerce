export interface Card {
    img: string,
    name: string,
    number: string,
    rating: number,
    price: string,
}

export interface CardDiscount extends Card {
    discount: string
}

export interface SidebarMenu {
    name: string,
    items: string[],
}
