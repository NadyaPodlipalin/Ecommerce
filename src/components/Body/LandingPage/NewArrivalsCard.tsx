import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';
import Rating from '@mui/material/Rating';
import { Card } from '../../../utils/types';
import { StyledCardImage, StyledCardInfo, StyledDescription, StyledIcon, StyledNewArrivalsCard, StyledNewArrivalsName, StyledNewArrivalsNumber, StyledNewArrivalsPrice } from './Landing.style';

interface Props {
    item: Card
}

const NewArrivalsCard = ({ item }: Props) => {
    return (
        <StyledNewArrivalsCard>
            <StyledCardImage>
                <img src={item.img} alt='newArrivals' />
                <StyledIcon >
                    <ShoppingBagIcon
                        color='primary'
                        fontSize='small'
                    />
                </StyledIcon>
            </StyledCardImage>
            <StyledDescription>
                <StyledCardInfo>
                    <Rating
                        style={{ color: 'rgba(86, 143, 255, 1)' }}
                        name="read-only"
                        defaultValue={item.rating}
                        readOnly />
                    <StyledNewArrivalsNumber>{item.number}</StyledNewArrivalsNumber>
                    <StyledNewArrivalsName>{item.name}</StyledNewArrivalsName>
                </StyledCardInfo>
                <StyledNewArrivalsPrice>{item.price}</StyledNewArrivalsPrice>
            </StyledDescription>
        </StyledNewArrivalsCard >
    )
}

export default NewArrivalsCard