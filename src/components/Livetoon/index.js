import React, { useEffect, useReducer } from 'react';
import NewsSection from '../NewsSection';
import Loading from '../Loading';
import { Section } from './styles';
import axios from 'axios';

function Livetoon () {
    const [entities, setEntities] = useReducer(
        (state, newState) => ({ ...state, ...newState }),
        {
            isLoading: true,
            noticias: [],
            page: 1
        }
    );
    
    useEffect(() => {
        axios.get(`http://localhost:9990/livetoon/${entities.page}`)
        .then((response) =>{
            setEntities({
                isLoading: false,
                noticias: [...entities.noticias, ...response.data]
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
            <NewsSection isButton title="LIVETOON" news={entities.noticias} changePage={changePage} columnLimit={3} />
            }  
        </Section>
    );
}

export default Livetoon;