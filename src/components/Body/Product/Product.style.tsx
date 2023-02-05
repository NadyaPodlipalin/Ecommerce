import { Button, FormControlLabel, Pagination, Rating } from '@mui/material';
import styled from "styled-components";

export const StyledProductPage = styled.div`
    margin-left: 155px;
`
export const StyledProductPageBody = styled.div`
    display: flex;
    flex-direction: row;
`
export const StyledMenuRoute = styled.div`
    width: 1445px;
`
export const StyledRoute = styled.div`
    width: 1445px;
    height: 80px;
    display: flex;
    align-items: center;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    letter-spacing: -0.3px;
    color: rgba(0, 0, 0, 0.3);
`
export const StyledHeader = styled.div`
    width: 1445px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`
export const StyledCategoryName = styled.div`
    margin: 30px 0 40px;
    font-style: normal;
    font-weight: 500;
    font-size: 48px;
    letter-spacing: -1.6px;
    color: #000000;
`
export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: white;
    padding-left: 10px;
    z-index: 1;   
    
`
export const StyledMenuItem = styled.p`
    &:hover{
        background-color: rgb(128, 128, 128,0.1 );
    }
`
export const StyledButton = styled(Button)`
    &&{
        border: 1px solid black;
        width: 130px;
        display: block;
    }
`
export const Dropdown = styled.div`
    position: relative;
    display: inline-block;  
    margin-right: 155px;
        &:hover {
            & ${DropdownContent} {
                display: block;
  }
}
`
export const StyledContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 1044px;
    padding-left: 80px;
`
export const StyledCard = styled.div`
    width: 300px;
    height: 466px;
    display: flex;
    flex-direction: column;
    margin: 0 32px 39px 0;
`
export const Discount = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 3px 6px;
    position: absolute;
    width: 49px;
    height: 24px;
    left: 10px;
    top: 10px;
    background: #FA4A69;
    color: white; 
    border-radius: 20px;
`
export const StyledCardImage = styled.div`
    position: relative;
     width: 300px;
    height: 365px;
`
export const Icon = styled.div`
    width: 40px;
    height: 40px;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 315px;
    left: 250px;
`
export const CardDescription = styled.div`
    width: 300px;
    height: 83px;
    display: flex;
    font-size: 0.8em;
    flex-direction: row;
    justify-content: space-between;
    border-top: none;
`
export const StyledRating = styled(Rating)`
    &&{
        color: rgba(86, 143, 255, 1);
    }
`
export const CardInfo = styled.div`
    margin: 0;
    padding-bottom: 5px;
    line-height: 0.8;
`
export const CardPrice = styled.div`
    display: flex;
    flex-direction: column-reverse;
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: right;  
    letter-spacing: -0.6px; 
    color: #000000;
`
export const CardItemNumber = styled.p`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: rgba(0, 0, 0, 0.6);
`
export const CardItemName = styled.p`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 18px;
    letter-spacing: -0.5px;
    color: black;
`
export const StyledPagination = styled(Pagination)`
    margin: auto;
    margin-bottom: 48px;
    width: 345px;
`

/*SIDEBAR */
export const StyledSidebar = styled.div`
    width: 250px;
    box-sizing: border-box;
`

export const StyledFormControlLabel = styled(FormControlLabel)`
    &:hover{
        background-color: rgb(128, 128, 128,0.1 );
    }
`









