import image from '../../../img/LandingPageImg/BlogImg/section2.png';
import { StyledBlogSection2, StyledBlogSection2Lower, StyledBlogSection2Text, StyledDate, StyledIconDate } from './Landing.style';

const BlogSection2 = () => {
    return (
        <StyledBlogSection2>
            <img src={image} alt='section2' />
            <StyledBlogSection2Lower>
                <StyledBlogSection2Text>Workout From Home Routines: Tips and Best Practices  </StyledBlogSection2Text>
            </StyledBlogSection2Lower>
            <StyledIconDate />
            <StyledDate>22.01.2023</StyledDate>
        </StyledBlogSection2>
    )
}

export default BlogSection2