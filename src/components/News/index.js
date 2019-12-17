import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import Loading from '../Loading';
import { 
    Content, 
    Article, 
    ArticleThumb, 
    ArticleTitle, 
    TitleContainer,
    TitleText,
    Triangulo,
    ImageContainer,
    ButtonMore,
    ButtonContainer
} from './styles';
import thumb from '../../assets/imagens/cavaleiros-do-zodiaco-6-1.jpg'

function News(props) {
    const { history ,news, columnLimit, isButton, changePage } = props;
    const [isLoading, setIsLoading] = useState(false);
    const color = [];
    
    useEffect(() => {
        setIsLoading(false);
    },[news]);
    
    return (
        <>
            <Content columnLimit={columnLimit}>
                {news.map((dataNew, key) => {
                    if(dataNew.href){
                        switch(dataNew.category){
                            case 'Conexão Asia':
                                color[0] = '#1a4f9b';
                                break;
                            case 'LiveToon':
                                color[0] = '#39b44a';
                                break;
                            case 'Filmes e Séries':
                                color[0] = '#f05a28';
                                break;
                            case 'Games':
                                color[0] = '#01a79d';
                                break;
                            case 'Especiais':
                                color[0] = {bColor: '#fff102', text: 'var(--dark-color)'};
                                break;
                            default:
                                color[0] = 'var(--dark-color)';
                        }
                        const noticiaUri = dataNew.href.substring(dataNew.href.lastIndexOf('.br/')+4, dataNew.href.length - 1);
                        return(
                            <Article key={key} columnLimit={columnLimit} onClick={() => history.push(`/noticia/${noticiaUri}`) }>
                                <ArticleThumb>
                                    <ImageContainer>
                                        <img src={dataNew.img} alt={thumb} />
                                    </ImageContainer>
                                    <TitleContainer>
                                        <Triangulo color={color[0]} />
                                        <TitleText color={color[0]}>
                                            {dataNew.category}
                                        </TitleText>
                                    </TitleContainer>
                                </ArticleThumb>
                                <ArticleTitle>
                                {dataNew.title}
                                </ArticleTitle>
                            </Article>
                        );
                    }
                })
                }
                
            </Content>
            {isButton && 
            <ButtonContainer>
                {isLoading?
                <Loading />
                :
                <ButtonMore onClick={() => {
                    
                    setIsLoading(true);
                    changePage();
                    // let newNumberItem = newData.numberItens + 1;
                    // let newArray = news.slice(0, (12 * newNumberItem));
                    // if(newData.news.length !== newArray.length){
                    //     setIsLoading(true);
                    //     setTimeout(function(){ 
                    //         setNewData({
                    //             news: newArray,
                    //             numberItens: newNumberItem
                    //         });
                    //      }, 1500);
                        
                    // }else{
                    //     alert('Não há mais posts');
                    // }
                }}>
                    Posts mais antigos
                </ButtonMore>
                }
            </ButtonContainer>
            }
        </>
    );
}

export default withRouter(News);