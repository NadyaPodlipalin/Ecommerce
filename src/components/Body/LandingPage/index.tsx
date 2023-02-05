import Subscription from '../Subscription'
import Banner from './Banner'
import Blog from './Blog'
import Categories from './Categories'
import { StyledLandingPage } from './Landing.style'
import NewArrivals from './NewArrivals'


const LandingPage = () => {
    return (
        <StyledLandingPage>
            <Banner />
            <NewArrivals />
            <Categories />
            <Blog />
            <Subscription />
        </StyledLandingPage>
    )
}

export default LandingPage