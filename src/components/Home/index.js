import React, { useEffect, useReducer } from 'react';
import NewsSection from '../NewsSection';
import Loading from '../Loading';
import { Section } from './styles';
import axios from 'axios';

function Home () {
    const [entities, setEntities] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            isLoading: true,
            populares: [],
            noticias: [],
            page: 1
        }
    );
    
    useEffect(() => {
        axios.get(`http://localhost:9990/home/${entities.page}`)
        .then((response) =>{
            setEntities({
                isLoading: false,
                populares: [...entities.populares, ...response.data.populares],
                noticias: [...entities.noticias, ...response.data.noticias]
            });
        }, (error) => alert('Ocorreu inesperado por favor atualize a página!'));

        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[entities.page]);

    const changePage = () => setEntities({page: entities.page + 1})

    return (
        <Section>
            {entities.isLoading? 
            <Loading /> 
            :
            <>
            <NewsSection title="DESTAQUES" news={entities.populares} columnLimit={2} />
            <NewsSection isButton title="TUDO" news={entities.noticias} changePage={changePage} columnLimit={3} />
            </>
            }  
        </Section>
    );
}

export default Home;