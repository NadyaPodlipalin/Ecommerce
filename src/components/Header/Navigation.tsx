import { products } from '../../utils/constants/globalConstants'
import { StyledNavigation } from './Header.style'
import HeaderMenuItem from './HeaderMenuItem'

const Navigation = () => {
    return (
        <nav>
            <StyledNavigation>
                {products.map((item, index) => <HeaderMenuItem key={index} item={item} />)}
            </StyledNavigation>
        </nav>
    )
}

export default Navigation