import { StyledCategoryName, StyledHeader, StyledMenuRoute, StyledRoute } from './Product.style';
import Filter from './Filter';

const MenuRoute = () => {
    return (
        <StyledMenuRoute>
            <StyledRoute>Men / T-shirts</StyledRoute>
            <StyledHeader>
                <StyledCategoryName>Men T-shirts</StyledCategoryName>
                <Filter />
            </StyledHeader>
        </StyledMenuRoute>
    )
}

export default MenuRoute