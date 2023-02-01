import { Route, Routes } from 'react-router-dom'
import Cart from './Body/Cart'
import Checkout from './Body/Cart/Checkout'
import LandingPage from './Body/LandingPage'
import Product from './Body/Product'
import ProductPage from './Body/ProductPage'
import Profile from './Body/Profile'

const Routing = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/product" element={<Product />} />
                <Route path="/productPage" element={<ProductPage />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/cart/checkout" element={<Checkout />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
        </div>
    )
}

export default Routing