import { Outlet } from 'react-router-dom'
import { routerLinks } from '../../utils/constants/routingConstants'
import { StyledLayout, StyledNavLink } from './Layout.style'

const Layout = () => {
    return (
        <StyledLayout>
            {routerLinks.map((item, index) => <StyledNavLink key={index} to={item.path}>{item.name}</StyledNavLink>)}
            <Outlet />
        </StyledLayout>
    )
}

//isActive? color: black : color grey + slash(/)

export default Layout