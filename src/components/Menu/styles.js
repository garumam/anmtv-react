import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const NavContainer = styled.nav`
    margin: 0 21px;
    margin-bottom: 50px;
`;

export const Menus = styled.ul`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    li {
        font-size: 1.8rem;
    }
`;

export const NavLinkCustom = styled(NavLink)`
    padding: 5px;
    :hover {
        background-color: ${props => props.hover.bColor || 'red'};
        color: ${props => props.hover.color || 'white'};
    }
    
    transition: background-color 0.4s;
    -webkit-transition: background-color 0.4s;
`;