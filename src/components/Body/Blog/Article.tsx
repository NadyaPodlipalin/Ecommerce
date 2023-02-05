import { BlogArticle } from '../../../utils/types'
import { StyledArticleWithoutImage, StyledBlogSection, StyledBlogSectionLower, StyledBlogSectionText, StyledDateSection, StyledIconDateSection } from './Blog.style'

interface Props {
    item: BlogArticle,
    position: number
}
const Article = ({ item, position }: Props) => {
    if (position === 4) {
        return (
            <div>
                <StyledArticleWithoutImage>
                    {item.text}
                    <StyledIconDateSection />
                    <StyledDateSection>22.01.2023</StyledDateSection>
                </StyledArticleWithoutImage>
            </div>
        )
    } else {
        return (
            <div>
                <StyledBlogSection>
                    <img src={item.img} alt='section' />
                    <StyledBlogSectionLower>
                        <StyledBlogSectionText>{item.text}</StyledBlogSectionText>
                    </StyledBlogSectionLower>
                    <StyledIconDateSection />
                    <StyledDateSection>22.01.2023</StyledDateSection>
                </StyledBlogSection>
            </div>
        )
    }

}

export default Article