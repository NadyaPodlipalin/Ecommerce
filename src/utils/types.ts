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

export interface BlogArticle {
    img: string,
    shortText: string,
    longText: string
}
export type Brands = Array<string>;

export interface Collections {
    name: string,
    payload: Brands
}
export interface Women {
    name: string,
    payload: Array<Collections>
}
export interface MainMenu {
    name: string,
    payload: Array<Women>
}