import { Route, Routes } from 'react-router-dom'
import Cart from '../Body/Cart'
import Checkout from '../Body/Cart/Checkout'
import LandingPage from '../Body/LandingPage'
import Product from '../Body/Product'
import ProductPage from '../Body/ProductPage'
import Profile from '../Body/Profile'
import NotFound from '../NotFound'
import Layout from './Layout'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/landingPage" element={<LandingPage />} />
                    <Route path="/product" element={<Product />} />
                    <Route path="/productPage" element={<ProductPage />} />
                    <Route path="/cart">
                        <Route index element={<Cart />} />
                        <Route path="checkout" element={<Checkout />} />
                    </Route>
                    <Route path="/profile" element={<Profile />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    )
}

export default Routing