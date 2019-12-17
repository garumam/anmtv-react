import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;

export const NoticiaBody = styled.div`
    display: flex;
    flex-direction: column;
    width: 65%;
    font-family: 'Source Sans Pro', sans-serif;
`;

export const Ultimas = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30%;
`;

export const TitleContainer = styled.div`
    display: flex;
    height: 40px;
    margin-bottom: 30px;
`;

export const TitleText = styled.div`
    display: flex;
    align-items: center;
    padding: 0 40px 0 20px;
    font-size: 1.2rem;
    background-color: var(--dark-color);
    color: white;

    div {
        color: white;
    }

    div:hover {
        text-decoration: underline;
        cursor: pointer;
    }

    svg {
        margin: 0 0.6rem;
    }
`;

export const Triangulo = styled.div`
    width: 0;
    height: 0;
    border-bottom: 40px solid var(--dark-color);
    border-right: 25px solid transparent;
`;

export const NoticiaTitle = styled.h1`
    font-size: 2.6rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    margin-top: 10px;
    margin-bottom: 20px;
    line-height: 1.2;
`;

export const Autoria = styled.p`
    font-size: 1.2rem;
    margin-bottom: 30px;
    font-family: inherit;
`;

export const ContainerImage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: inherit;

    p {
        font-family: inherit;
        margin: 10px 0;
        color: #969696;
    }

    img {
        max-width: 100%;
        max-height: 500px;
    }
`;

export const Paragraphs = styled.p`
    font-family: inherit;
    line-height: 1.5;
    font-size: 1.2rem;
    margin: 15px 0;
`;

export const CurtidasContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    color: rgb(102, 102, 102);
    font-family: inherit;
    margin-top: 50px;

    span {
        font-size: 4rem;
        font-family: inherit;
        font-weight: bold;
    }

    div {
        font-size: 2rem;
        font-family: inherit;
    }
`;

export const Relacionados = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 65px;
    font-family: inherit;

    ul{
        margin-top: 25px;
        font-size: 1.3rem;
        font-family: inherit;
    }

    li{
        font-family: inherit;
        font-weight: bold;
        display: inline-block;
        list-style-type: none;
        margin: 10px 10px 10px 20px;
    }

    li:hover {
        text-decoration: underline;
        cursor: pointer;
    }
`;

export const Video = styled.div`
    text-align: center;
    position: relative;
    padding-bottom: 56.25%;
    padding-top: 0;
    height: 0;
    overflow: hidden;
    margin-bottom: 15px;

    iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`;