import pic1 from '../../img/ProductPageImg/prod1.png'
import pic2 from '../../img/ProductPageImg/prod2.png'
import pic3 from '../../img/ProductPageImg/prod3.png'
import pic4 from '../../img/ProductPageImg/prod4.png'
import pic5 from '../../img/ProductPageImg/prod5.png'
import pic6 from '../../img/ProductPageImg/prod6.png'
import pic7 from '../../img/ProductPageImg/prod7.png'
import pic8 from '../../img/ProductPageImg/prod8.png'
import pic9 from '../../img/ProductPageImg/prod9.png'
import { CardDiscount, SidebarMenu } from '../types'


const card1 = {
    img: pic1,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 3,
    price: '$35',
    discount: ''
}
const card2 = {
    img: pic2,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 2,
    price: '$35',
    discount: ''
}
const card3 = {
    img: pic3,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 5,
    price: '$35',
    discount: ''
}
const card4 = {
    img: pic4,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 1,
    price: '$35',
    discount: ''
}
const card5 = {
    img: pic5,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 1,
    price: '$35',
    discount: ''
}
const card6 = {
    img: pic6,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 3,
    price: '$35',
    discount: '-15%'
}
const card7 = {
    img: pic7,
    name: 'Basic t-shirt ',
    number: '#7142',
    rating: 1,
    price: '$35',
    discount: '-45%'
}
const card8 = {
    img: pic8,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 5,
    price: '$35',
    discount: ''
}
const card9 = {
    img: pic9,
    name: 'Basic t-shirt',
    number: '#7142',
    rating: 0,
    price: '$35',
    discount: ''
}

export const tshirts: Array<CardDiscount> = [card1, card2, card3, card4, card5, card6, card7, card8, card9];

export const categorySidebar: SidebarMenu = {
    name: 'Category',
    items: ['All', 'Coats & Jackets', 'T-shirts', 'Tops', 'Trousers', 'Jumpsuits & Rompers', 'Pants', 'Shorts',
        'Sweaters', 'Shoes']
}
export const brandSidebar: SidebarMenu = {
    name: 'Brand',
    items: [`Levi's`, `Jungmaven`, `Sunspel`, `Uniqlo`, `Aime Leon Dore`],
}

export const styleSidebar: SidebarMenu = {
    name: 'Style',
    items: ['All styles', 'A-line', 'Graphic T-shirts']
}

export const priceSidebar: SidebarMenu = {
    name: 'Price',
    items: ['Under 100$', '100$-200$', '200$-600$', 'Over 600$']
}

export const sizeSidebar: SidebarMenu = {
    name: 'Size',
    items: ['XS', 'S', 'M', 'L', 'XL', 'XXL']
}

export const seasonSidebar: SidebarMenu = {
    name: 'Season',
    items: ['Spring', 'Summer', 'Autumn', 'Winter']
}

export const collectionSidebar: SidebarMenu = {
    name: 'Collection',
    items: ['1', '2', '3', '4', '5', '6']
}

export const accordionSidebar = [categorySidebar, priceSidebar, sizeSidebar, collectionSidebar, brandSidebar, styleSidebar, seasonSidebar];
export const dropdown: Array<string> = ['By category', 'By brand', 'By style', 'By price', 'By size', 'By collection', 'By season'];