import { BlogArticle } from '../../../utils/types'
import { StyledBlogSection, StyledBlogSectionLower, StyledBlogSectionText, StyledDateSection, StyledIconDateSection } from './Blog.style'

interface Props {
    item: BlogArticle
}
const Article = ({ item }: Props) => {
    return (
        <div>
            <StyledBlogSection>
                <img src={item.img} alt='section2' />
                <StyledBlogSectionLower>
                    <StyledBlogSectionText>Workout From Home Routines: Tips and Best Practices  </StyledBlogSectionText>
                </StyledBlogSectionLower>
                <StyledIconDateSection />
                <StyledDateSection>22.01.2023</StyledDateSection>
            </StyledBlogSection>
        </div>
    )
}

export default Article