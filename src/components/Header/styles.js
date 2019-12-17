import styled from 'styled-components';

export const Container = styled.header`
    display: flex;
    justify-content: space-between;
    height: 72px;
    padding: 40px 0; 
    margin: 0 21px;
`;

export const Nav = styled.div`
    width: 35%;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const NavItem = styled.a`
    color: var(--dark-color);
    :hover {
        color: ${props => props.hover || 'red'};
    }
`;

export const Logo = styled.div`
    width: 30%;
`;