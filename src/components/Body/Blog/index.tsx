import React from 'react'
import { blogArticles } from '../../../utils/constants/blogConstants'
import { StyledRoute } from '../Product/Product.style'
import Article from './Article'
import { StyledArticleBlock, StyledBlog, StyledPagination } from './Blog.style'
import MainArticle from './MainArticle'

const Blog = () => {
    return (
        <StyledBlog>
            <StyledRoute>Main / Blog</StyledRoute>
            <MainArticle />
            <StyledArticleBlock>
                {blogArticles.map((item, index) => <Article item={item} key={index} />)}
                <StyledPagination count={20} />
            </StyledArticleBlock>
        </StyledBlog>
    )
}

export default Blog

