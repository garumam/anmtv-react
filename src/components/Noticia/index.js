import React, { useReducer, useEffect } from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import Loading from '../Loading';
import NewsSection from '../NewsSection';
import Title from '../Title';
import { 
    Container, 
    NoticiaBody, 
    Ultimas, 
    TitleText, 
    Triangulo, 
    TitleContainer,
    NoticiaTitle,
    Autoria,
    ContainerImage,
    Paragraphs,
    CurtidasContainer,
    Relacionados,
    Video 
} from './styles';
import { tudoData } from '../../database';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';

function CategoryLinks({ history, category }) {
    return (
        <TitleContainer>
            <TitleText>
                <div onClick={() => history.push('/')}>{category[0].toUpperCase()}</div>
                <FontAwesomeIcon icon={faTimes} size="xs" />
                <div onClick={() => {
                    const path = [];
                    switch(category[1]){
                        case 'Conexão Asia':
                            path[0] = '/conexaoasia';
                            break;
                        case 'LiveToon':
                            path[0] = '/livetoon';
                            break;
                        case 'Filmes e Séries':
                            path[0] = '/filmeseseries';
                            break;
                        case 'Games':
                            path[0] = '/games';
                            break;
                        case 'Especiais':
                            path[0] = '/especiais';
                            break;
                        default:
                            path[0] = '/';
                    }
                    history.push(path[0]);
                }}>
                {category[1].toUpperCase()}
                </div>
            </TitleText>
            <Triangulo />
        </TitleContainer>
    );
}

function Noticia (props) {
    const { match, history } = props,
        { params } = match;
    const [entities, setEntities] = useReducer(
        (state, newState) => ({...state,...newState}),
        {
            isLoading: true,
            noticia: {
                ultimas: [],
                categorynames: ['Home', 'Home'],
                titleNew: '',
                autoria: '',
                conteudo: [],
                relacionados: []
            },
            curtidas: {
                valor: '', 
                texto: 'Carregando curtidas...',
                noticia: params.nome
            }
        }
    );

    useEffect(() => {
        let cancel = false;
        axios.get(`http://localhost:9990/noticia/${params.nome}`)
        .then((response) =>{
            console.log('RESPOSTA NOTICIA', response.data);

            setEntities({
                isLoading: false,
                noticia: response.data,
                curtidas: {
                    valor: '', 
                    texto: 'Carregando curtidas...',
                    noticia: params.nome
                }
            });

            axios.get(`http://localhost:9990/curtidas/${params.nome}`)
                .then((response) =>{

                    if (cancel) {
                        return;
                    }
                    setEntities({
                        curtidas: response.data
                    });
                    
                }, (error) => alert('Ocorreu inesperado por favor atualize a página!'));


        }, (error) => alert('Ocorreu inesperado por favor atualize a página!'));

        return () => {
            cancel = true;
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[params.nome]);    
    
    return (
        <Container>
            {entities.isLoading? 
            <Loading /> 
            :
            <>
            <NoticiaBody>
                <CategoryLinks history={history} category={entities.noticia.categorynames} />
                <NoticiaTitle>
                {entities.noticia.titleNew.toUpperCase()}
                </NoticiaTitle>
                <Autoria>
                {entities.noticia.autoria}
                </Autoria>
                {entities.noticia.conteudo.map((item, index) => {
                    switch(item.tipo){
                        case 'texto':
                            return(
                                <Paragraphs key={index}>{item.valor}</Paragraphs>
                            );
                        case 'imagem':
                            return(
                                <ContainerImage key={index}>
                                    <img src={item.valor.src} />
                                    <p>{item.valor.caption}</p>
                                </ContainerImage>
                            );
                        case 'video':
                            return(
                                <Video key={index}>
                                    <iframe src={item.valor} allowFullScreen="allowfullscreen" />
                                </Video>
                            );
                        default:    
                    }
                })}

                <CurtidasContainer>
                    <span>{entities.curtidas.valor || ''}</span>
                    <div>{entities.curtidas.texto || 'Carregando curtidas...'}</div>
                </CurtidasContainer>
                <Relacionados>
                    <Title title="NOTÍCIAS RELACIONADAS" />
                    <ul>
                        {entities.noticia.relacionados.map((item, index) => (
                            <li key={index} onClick={() => history.push(`/noticia/${item.uri}/`)}>
                            {item.texto}
                            </li>
                        ))}
                    </ul>
                </Relacionados>
            </NoticiaBody>
            <Ultimas>
                <NewsSection title="ÚLTIMAS" news={entities.noticia.ultimas} columnLimit={1} />
            </Ultimas>
            </>
            }
        </Container>
    );
}

export default withRouter(Noticia);
