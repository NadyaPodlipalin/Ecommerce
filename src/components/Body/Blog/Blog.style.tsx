import styled from "styled-components";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Pagination } from "@mui/material";

export const StyledBlog = styled.div`
    margin-left: 155px;
`
export const StyledArticleBlock = styled.div`
    width: 1445px;
    display: flex;
    flex-wrap: wrap;
`
export const StyledMainArticle = styled.div`
    display: flex;
    align-items: center;
    width: 1290px;
    height: 540px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 10px;
`
export const StyledLeftSection = styled.div`
    width: 644px;
    height: 500px;
    position: relative;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
`
export const TextLeftSection = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 70px;
    letter-spacing: -3px;
    margin-top: 64px;
    margin-left: 20px;
`
export const StyledButton = styled.p`
    width: 127px;
    height: 50px;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3px;
    color: #FFFFFF;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 20px;
    top: 304px;
    background: #000000;
    border-radius: 10px;
`
export const StyledIconDateSection = styled(AccessTimeIcon)`
    position: absolute;
    left: 20px;
    bottom: 15px;
`
export const StyledDateSection = styled.div`
    display: inline;
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    display: flex;
    align-items: center;
    letter-spacing: -0.3px;
    color: rgba(0, 0, 0, 0.6);
    position: absolute;
    left: 48px;
    bottom: 15px;
`
export const StyledRightSection = styled.div`
    width: 605px;
    height: 540px;
    margin: auto;
    display: flex;
    justify-content: row;
    flex-wrap: wrap;
`
export const StyledArticleRightSection = styled.div`
    width: 301px;
    height: 250px;
    position: relative;
   
`
export const StyledArticleRightSectionText = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.8px;
    text-transform: capitalize;
    color: #000000;
    padding: 0;
    margin: 0;
    position: absolute;
    top: 64px;
    left: 30px;
`
export const StyledBlogSection = styled.div`
    width: 410px;
    height: 540px;
    box-sizing: border-box;
    margin-right: 30px;
    border-radius: 10px;
    margin-top: 48px;
    position: relative;
`
export const StyledBlogSectionLower = styled.div`
    width: 410px;
    height: 270px;
    position: absolute;
    top: 270px;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;
`
export const StyledBlogSectionText = styled.p`
    height: 102px;
    left: 20px;
    right: 20px;
    padding: 0;
    margin: 0;
    padding: 64px 20px 0 20px;
    font-style: normal;
    font-weight: 500;
    font-size: 28px;
    line-height: 34px;
    letter-spacing: -0.8px;
`
export const StyledArticleWithoutImage = styled.div`
    width: 410px;
    height: 540px;
    box-sizing: border-box;
    margin-right: 30px;
    border-radius: 10px;
    margin-top: 48px;
    position: relative;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    line-height: 54px;
    letter-spacing: -1.6px;
    color: #000000;
    padding: 64px 20px;
    background-color: #F1F4FA;
    border-radius: 10px;;
`
export const StyledPagination = styled(Pagination)`
    margin:  20px auto 98px 475px;
    
    width: 345px;
`
export const StyledArticlePage = styled.div`
    width: 850px;
    margin: auto;
`
export const StyledArticleHeading = styled.p`
    margin: 94px auto 0px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 64px;
    line-height: 70px;
    text-align: center;
    letter-spacing: -3px;
    color: #000000;
`
export const StyledArticleParagraph = styled.p`
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 21px;
    line-height: 30px;
    letter-spacing: -0.8px;
    color: rgba(0, 0, 0, 0.8);
`
export const StyledArticleHeading2 = styled.p`
    margin: 40px auto 30px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -1.2px;
    color: #000000;
`
export const StyledArticleImage = styled.img`
    margin: 40px auto;
    border-radius: 10px;    
`
export const StyledPicturesArticle = styled.div`
    width: 1290px;
    margin: auto;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
`
export const StyledImage = styled.img`
    margin: 40px 15px;
`
export const StyledArticleDiv = styled.div`
    width: 850px;
    margin: 50px auto 48px;
    display: flex;
    justify-content: space-between;
`
export const StyledIconDateArticle = styled(AccessTimeIcon)`
    display: inline;
    margin-right: 10px;
    
`
export const StyledDateArticle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 20px;
    display: inline;
    margin: 0;
    padding: 0;
    letter-spacing: -0.3px;
    color: rgba(0, 0, 0, 0.6);
`
export const ArticleDate = styled.div`
    display: flex;
    margin: 40px 0 56px;
    justify-content: center;
    align-items: center;
`