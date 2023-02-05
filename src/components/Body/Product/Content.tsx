import { tshirts } from '../../../utils/constants/productConstants';
import { StyledContent, StyledPagination } from './Product.style';
import ProductCard from './ProductCard';


const Content = () => {
    return (
        <StyledContent>
            {tshirts.map((item, index) => <ProductCard key={index} item={item} />)}
            <StyledPagination count={20} />
        </StyledContent>
    )
}

export default Content