import { blogRightSection } from '../../../utils/constants/blogConstants'
import { StyledButton, StyledDateSection, StyledIconDateSection, StyledLeftSection, StyledMainArticle, StyledRightSection, TextLeftSection } from './Blog.style'
import MainArticleRightSection from './MainArticleRightSection'

const MainArticle = () => {
    return (
        <StyledMainArticle>
            <StyledLeftSection>
                <TextLeftSection>LEARNING TO LOVE YOUR MENTAL HEALTH JOURNEY</TextLeftSection>
                <StyledButton>Read more</StyledButton>
                <StyledIconDateSection />
                <StyledDateSection>03.02.2023</StyledDateSection>
            </StyledLeftSection>
            <StyledRightSection>
                {blogRightSection.map((item, index) => <MainArticleRightSection item={item} position={index + 1} key={index} />)}
            </StyledRightSection>
        </StyledMainArticle>
    )
}

export default MainArticle