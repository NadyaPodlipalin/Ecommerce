import { headerMenu } from '../../utils/constants/menuConstants'
import { StyledNavigation } from './Header.style'
import HeaderMenuItem from './HeaderMenuItem'

const Navigation = () => {
    return (
        <nav>
            <StyledNavigation>
                {headerMenu.map((item, index) => <HeaderMenuItem key={index} item={item} />)}
            </StyledNavigation>
        </nav>
    )
}

export default Navigation