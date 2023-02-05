import { StyledArticleRightSection, StyledArticleRightSectionText, StyledDateSection, StyledIconDateSection } from './Blog.style'

interface Props {
    item: string,
    position: number
}
const MainArticleRightSection = ({ item, position }: Props) => {
    if (position === 1 || position === 2) {
        return (
            <StyledArticleRightSection style={{ borderBottom: "1px solid grey" }}>
                <StyledArticleRightSectionText>{item}</StyledArticleRightSectionText>
                <StyledIconDateSection />
                <StyledDateSection>03.02.2023</StyledDateSection>
            </StyledArticleRightSection>
        )
    }
    else {
        return (
            <StyledArticleRightSection>
                <StyledArticleRightSectionText>{item}</StyledArticleRightSectionText>
                <StyledIconDateSection />
                <StyledDateSection>03.02.2023</StyledDateSection>
            </StyledArticleRightSection>
        )
    }
}

export default MainArticleRightSection