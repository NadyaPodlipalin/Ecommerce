import styled from "styled-components";
import TextField from '@mui/material/TextField';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBagOutlined';
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

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
export const StyledLink = styled(Link)`
    all: unset;
    cursor: pointer;
    margin: 0 25px 0 30px;
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 30px;
    display: flex;
    align-items: center;
    letter-spacing: -0.5px;
    color: #FFFFFF;
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

export const DropdownContent = styled.div`
    display: none;
    position: absolute;
    background-color: #dfd9d9;
    padding-left: 10px;
    z-index: 1;   
    
`
export const StyledMainMenuItem = styled.p`
color: black;
    &:hover{
        background-color: rgb(128, 128, 128,0.1 );
    }
`
export const StyledButton = styled.p`
        border: 1px solid black;
        width: fit-content;
        display: inline-block;
`
export const Dropdown = styled.div`
    position: relative;
    display: inline-block;  
        &:hover {
            & ${DropdownContent} {
                display: block;
  }
}
`