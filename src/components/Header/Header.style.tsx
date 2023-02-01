import styled from "styled-components";
import TextField from '@mui/material/TextField';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';

export const StyledHeader = styled.header`
background-color: rgba(23, 24, 31, 1);
    width: 1600px;
    color: rgba(255, 255, 255, 1);
    height: 79px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    justify-content: space-between;
`
export const StyledLeft = styled.div`
display: flex;
    align-items: center;
`
export const StyledH1 = styled.h1`
margin: 0 25px 0 30px;
`
export const StyledRight = styled.div`
height: 100%;
    justify-content: right;
    display: flex;
    align-items: center;
    margin-right: 30px;
`
export const StyledTextField = styled(TextField)`
    background-color: white;
    border-radius: 10px;
`
export const StyledShoppingBagIcon = styled(ShoppingBagIcon)`
    margin: 0 25px;
`
export const StyledNavigation = styled.ul`
    margin: 0;
    padding: 0;
    display: flex;

`
export const StyledList = styled.p`
    margin: 0;
    margin-left: 30px;
    padding: 0;
`