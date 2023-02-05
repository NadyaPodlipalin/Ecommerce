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
export interface MainMenu {
    name: string,
    payload: Array<{}>
}
export interface BlogArticle {
    img: string,
    text: string
}