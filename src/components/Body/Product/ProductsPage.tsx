import { StyledProductPage, StyledProductPageBody } from './Product.style';
import Content from './Content';
import MenuRoute from './MenuRoute';
import Sidebar from './Sidebar';

const ProductsPage = () => {
    return (
        <StyledProductPage >
            <MenuRoute />
            <StyledProductPageBody>
                <Sidebar />
                <Content />
            </StyledProductPageBody>
        </StyledProductPage>
    )
}

export default ProductsPage