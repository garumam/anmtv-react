import styled from 'styled-components';

export const Content = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 100%;
    ::after {
        height: 0;
        width: ${props => props.columnLimit? (96/props.columnLimit) : '50'}%;
        content: '';
    }
`;

export const Article = styled.article`
    display: flex;
    flex-direction: column;
    width: ${props => props.columnLimit? (96/props.columnLimit) : '50'}%;
    margin: 25px 0;
    box-sizing: border-box;

    :hover {
        cursor: pointer;
    }
`;

export const ArticleThumb = styled.div`
    position: relative;
`;

export const ImageContainer = styled.div`
    display: flex;
    overflow: hidden;
    border-radius: 5px;
    img {
        width: 100%;
        transition: transform 0.3s ease-in-out 0s;
    }
    img:hover {
        transform: scale(1.1);
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    height: 50px;
    position: absolute;
    bottom: -10px;
    right: 0px;
`;

export const TitleText = styled.div`
    display: flex;
    align-items: center;
    padding: 0 40px 0 20px;
    font-size: 2rem;
    background-color: ${props => props.color.bColor || props.color || '#1a4f9b'};
    color: ${props => props.color.text || 'white'};
`;

export const Triangulo = styled.div`
    width: 0;
    height: 0;
    border-top: 50px solid ${props => props.color.bColor || props.color || '#1a4f9b'};
    border-left: 45px solid transparent;
`;

export const ArticleTitle = styled.h2`
    width: 100%;
    font-size: 1.4rem;
    font-family: 'Source Sans Pro', sans-serif;
    color: var(--title-article-color);
    padding-top: 25px;
`;

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const ButtonMore = styled.div`
    color: white;
    background-color: var(--dark-color);
    padding: 15px;
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.2rem;
    border-radius: 15px;
    cursor: pointer;
`;