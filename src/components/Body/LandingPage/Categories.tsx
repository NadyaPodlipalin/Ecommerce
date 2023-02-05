import { categoryPics } from '../../../utils/constants/landingPageConstants'
import CategoryPicLeft from './CategoryPicLeft'
import CategoryPicRight from './CategoryPicRight'
import { StyledCategories, StyledCategoriesBlock, StyledCategoriesHeading, StyledCategoriesRight } from './Landing.style'


const Categories = () => {
    return (
        <StyledCategoriesBlock>
            <StyledCategoriesHeading>Categories</StyledCategoriesHeading>
            <StyledCategories>
                <CategoryPicLeft />
                <StyledCategoriesRight>
                    {categoryPics.map((item, index) => <CategoryPicRight key={index} item={item} />)}
                </StyledCategoriesRight>
            </StyledCategories>
        </StyledCategoriesBlock>
    )
}

export default Categories