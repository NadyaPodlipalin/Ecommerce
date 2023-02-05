import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';
import { CardDiscount } from '../../../utils/types';
import { CardDescription, CardInfo, CardItemName, CardItemNumber, CardPrice, Discount, Icon, StyledCard, StyledCardImage, StyledRating } from './Product.style';

interface Props {
    item: CardDiscount;
}

const ProductCard = ({ item }: Props) => {
    return (
        <StyledCard>
            <StyledCardImage >
                <img src={item.img} alt='newArrivals' />
                <Icon>
                    <ShoppingBagIcon
                        color='primary'
                        fontSize='small'
                    />
                </Icon>
                {!!item.discount && <Discount>{item.discount}</Discount>}
            </StyledCardImage>
            <CardDescription>
                <CardInfo>
                    <StyledRating
                        name="read-only"
                        defaultValue={item.rating}
                        readOnly />
                    <CardItemNumber>{item.number}</CardItemNumber>
                    <CardItemName >{item.name}</CardItemName>
                </CardInfo>
                <CardPrice>{item.price}</CardPrice>
            </CardDescription>
        </StyledCard >
    )
}

export default ProductCard