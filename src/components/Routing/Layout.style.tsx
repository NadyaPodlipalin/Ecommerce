import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const StyledLayout = styled.div`
    display: flex;
    justify-content: flex-start;
`
export const StyledNavLink = styled(NavLink)`
all: unset;
cursor: pointer;
margin: 5px 20px;
font-family: 'Inter';
font-style: normal;
font-weight: 500;
font-size: 18px;
line-height: 20px;
display: flex;
align-items: center;
letter-spacing: -0.3px;
color: rgba(0, 0, 0, 0.3);
`