import React from 'react';
import Title from '../Title';
import News from '../News';
import { Section } from './styles';

function NewsSection(props) {
    const { news, title, columnLimit, isButton, changePage } = props;

    return (
        <Section>
            <Title title={title} />
            <News isButton={isButton} news={news} changePage={changePage} columnLimit={columnLimit} />
        </Section>
    );
}

export default NewsSection;