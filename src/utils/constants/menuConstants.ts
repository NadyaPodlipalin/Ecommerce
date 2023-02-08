import { Brands, Collections, MainMenu, Women } from "../types";

export const womenMenuCollectionsBrands: Brands = [`Akris`, `Alice + Olivia`, `Brunello Cucinelli`, `CHANEL`, `Dolce & Gabbana`, `Eileen Fisher`, `Giorgio Armani`, `Gucci`, `Johnny Was`, `Lafayette 148 New York`, `Theory`];
export const womenMenuCollections: Array<Collections> = [
    {
        name: `Our Favorites`,
        payload: []
    },
    {
        name: `New Arrivals`,
        payload: []
    },
    {
        name: `New Collections`,
        payload: []
    },
    {
        name: `Brands`,
        payload: womenMenuCollectionsBrands,
    },
    {
        name: `Trends`,
        payload: []
    },
    {
        name: `New Names at Neiman's`,
        payload: []
    },
    {
        name: `Luxe Essentials`,
        payload: []
    },
    {
        name: `Exclusives`,
        payload: []
    }
]


export const womenMenu: Array<Women> = [
    {
        name: `All`,
        payload: []
    },
    {
        name: `Collections`,
        payload: womenMenuCollections
    },
    {
        name: `Coats & Jackets`,
        payload: []
    },
    {
        name: `Dresses`,
        payload: []
    },
    {
        name: `Pants`,
        payload: []
    },
    {
        name: `Jumpsuits & Rompers`,
        payload: []
    },
    {
        name: `Shorts`,
        payload: []
    },
    {
        name: `Skirts`,
        payload: []
    },
    {
        name: `Sweaters`,
        payload: []
    },
    {
        name: `Swimwear`,
        payload: []
    },
    {
        name: `Tops`,
        payload: []
    },
    {
        name: `Shoes`,
        payload: []
    },

]

export const headerMenu: Array<MainMenu> = [
    {
        name: `Men`,
        payload: []
    },
    {
        name: `Women`,
        payload: womenMenu
    },
    {
        name: `Kids`,
        payload: []
    },
    {
        name: `Sale`,
        payload: []
    },
    {
        name: `Collection`,
        payload: []
    },
]
