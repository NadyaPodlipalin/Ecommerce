import { newArrivalsCards } from '../../../utils/constants/landingPageConstants'
import { Card } from '../../../utils/types'
import { NewArrivalsBlock, NewArrivalsHeading, StyledNewArrivals, StyledPagination } from './Landing.style'
import NewArrivalsCard from './NewArrivalsCard'
const NewArrivals = () => {
    return (
        <NewArrivalsBlock >
            <NewArrivalsHeading>New arrivals</NewArrivalsHeading>
            <StyledNewArrivals>
                {newArrivalsCards.map((item: Card, index: number) => <NewArrivalsCard key={index} item={item} />)}
            </StyledNewArrivals>
            <StyledPagination count={20} />
        </NewArrivalsBlock>
    )
}

export default NewArrivals