import styled from 'styled-components';

export const TitleContainer = styled.div`
    display: flex;
    height: 70px;
`;

export const TitleText = styled.div`
    display: flex;
    align-items: center;
    padding: 0 40px 0 20px;
    font-size: 2rem;
    background-color: var(--dark-color);
    color: white;

    div {
        margin-left: 0.8rem;
    }
`;

export const Triangulo = styled.div`
    width: 0;
    height: 0;
    border-bottom: 70px solid var(--dark-color);
    border-right: 45px solid transparent;
`;