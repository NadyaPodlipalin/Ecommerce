import ArrowIcon from '@mui/icons-material/ArrowForward';
import { catLeft } from '../../../utils/constants/landingPageConstants';
import { StyledCategoriesExploreLeft, StyledCategoriesLeft, StyledCategoriesLeftImage, StyledCategoriesLeftTitle } from './Landing.style';


const CategoryPicLeft = () => {
    return (
        <StyledCategoriesLeft>
            <StyledCategoriesLeftImage src={catLeft.img} alt='categories' />
            <StyledCategoriesLeftTitle>
                {catLeft.title}
            </StyledCategoriesLeftTitle>
            <StyledCategoriesExploreLeft>
                <p style={{ margin: 0 }}>Explore</p>
                <ArrowIcon fontSize='small' />
            </StyledCategoriesExploreLeft>
        </StyledCategoriesLeft>)
}

export default CategoryPicLeft