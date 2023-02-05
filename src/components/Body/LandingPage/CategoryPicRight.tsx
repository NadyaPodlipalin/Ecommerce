import ArrowIcon from '@mui/icons-material/ArrowForward';
import { StyledaCategoriesExploreRight, StyledaCategoriesRightImage, StyledaCategoriesRightPicture, StyledaCategoriesRightTitle } from './Landing.style';

interface Props {
    item: {
        img: string,
        title: string
    }
}

const CategoryPic = ({ item }: Props) => {
    return (
        <StyledaCategoriesRightPicture>
            <StyledaCategoriesRightImage src={item.img} alt='categories' />
            <StyledaCategoriesRightTitle>
                {item.title}
            </StyledaCategoriesRightTitle>
            <StyledaCategoriesExploreRight>
                <p style={{ margin: 0 }}>Explore</p>
                <ArrowIcon fontSize='small' />
            </StyledaCategoriesExploreRight>
        </StyledaCategoriesRightPicture>
    )
}

export default CategoryPic