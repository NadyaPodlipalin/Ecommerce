import { products } from '../../utils/constants/globalConstants';
import { StyledGroupName, StyledProducts } from './Footer.style';
import FooterMenuItem from './FooterMenuItem';


const Products = () => {
    return (
        <StyledProducts>
            <StyledGroupName>Products</StyledGroupName>
            <ul style={{ padding: 0 }}>
                {products.map((item, index) => <FooterMenuItem key={index} item={item} />)}
            </ul>
        </StyledProducts>
    )
}

export default Products