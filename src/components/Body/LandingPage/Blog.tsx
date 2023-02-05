import BlogSection1 from './BlogSection1'
import BlogSection2 from './BlogSection2'
import BlogSection3 from './BlogSection3'
import { StyledBlogBlock, StyledBlogHeading, StyledBlogSec } from './Landing.style'


const Blog = () => {
    return (
        <StyledBlogBlock>
            <StyledBlogHeading>Blog</StyledBlogHeading>
            <StyledBlogSec>
                <BlogSection1 />
                <BlogSection2 />
                <BlogSection3 />
            </StyledBlogSec>
        </StyledBlogBlock>
    )
}

export default Blog