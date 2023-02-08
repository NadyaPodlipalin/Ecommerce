import { BlogArticle } from '../../../utils/types';
import { StyledBlogSection, StyledBlogSectionLower, StyledBlogSectionText, StyledDateSection, StyledIconDateSection } from './Blog.style';

interface Props {
    item: BlogArticle,
    position: number
}
const Article = ({ item, position }: Props) => {
    return (
        <div>
            <StyledBlogSection>
                <img src={item.img} alt='section' />
                <StyledBlogSectionLower>
                    <StyledBlogSectionText>{item.shortText}</StyledBlogSectionText>
                </StyledBlogSectionLower>
                <StyledIconDateSection />
                <StyledDateSection>22.01.2023</StyledDateSection>
            </StyledBlogSection>
        </div>
    )
}

export default Article