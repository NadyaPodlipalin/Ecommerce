import { Outlet } from 'react-router-dom'
import { StyledLayout, StyledNavLink } from './Layout.style'

const Layout = () => {
    return (
        <StyledLayout>
            <StyledNavLink to="/">LandingPage</StyledNavLink>
            <StyledNavLink to="/product">Product</StyledNavLink>
            <StyledNavLink to="/productPage">ProductPage</StyledNavLink>
            <StyledNavLink to="/cart">Cart</StyledNavLink>
            <StyledNavLink to="/profile">Profile</StyledNavLink>
            <Outlet />
        </StyledLayout>
    )
}

//isActive? color: black : color grey + slash(/)

export default Layout