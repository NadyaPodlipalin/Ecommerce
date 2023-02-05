import { Route, Routes } from 'react-router-dom'
import Blog from '../Body/Blog'
import ArticlePage from '../Body/Blog/ArticlePage'
import Cart from '../Body/Cart'
import Checkout from '../Body/Cart/Checkout'
import LandingPage from '../Body/LandingPage'
import Product from '../Body/Product'
import ProductPage from '../Body/ProductPage'
import Profile from '../Body/Profile'
import NotFound from '../NotFound'
import Layout from './Layout'

export const GlobalRouting = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="landingPage" element={<LandingPage />} />
                    <Route path="product">
                        <Route index element={<Product />} />
                        <Route path="productPage" element={<ProductPage />} />
                    </Route>
                    <Route path="cart">
                        <Route index element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                    </Route>
                    <Route path="profile" element={<Profile />} />
                    <Route path="blog">
                        <Route index element={<Blog />} />
                        <Route path="article" element={<ArticlePage />} />
                    </Route>
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

// export const ProductRouting = () => {
//     return (
//         <div>
//             <Routes>
//                 <Route path="/" element={<Layout />}>
//                     <Route path="landingPage" element={<LandingPage />} />
//                     <Route path="product">
//                         <Route index element={<Product />} />
//                         <Route path="productPage" element={<ProductPage />} />
//                     </Route>
//                     <Route path="cart">
//                         <Route index element={<Cart />} />
//                         <Route path="checkout" element={<Checkout />} />
//                     </Route>
//                     <Route path="profile" element={<Profile />} />
//                     <Route path="*" element={<NotFound />} />
//                 </Route>
//             </Routes>
//         </div>
//     )
// }

