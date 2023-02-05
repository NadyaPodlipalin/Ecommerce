import image from '../../../img/LandingPageImg/BlogImg/section3.png';
import { StyledBlogSection3, StyledBlogSection3Lower, StyledBlogSection3Text, StyledDate, StyledIconDate } from './Landing.style';

const BlogSection3 = () => {
    return (
        <StyledBlogSection3>
            <img src={image} alt='section3' />
            <StyledBlogSection3Lower>
                <StyledBlogSection3Text>Train The Way You Want: Energise Your Routine with our Growing Library of Workout</StyledBlogSection3Text>
            </StyledBlogSection3Lower>
            <StyledIconDate />
            <StyledDate>2.01.2023</StyledDate>
        </StyledBlogSection3>
    )
}

export default BlogSection3