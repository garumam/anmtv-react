import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TitleText, Triangulo, TitleContainer } from './styles';

function Title(props) {
    const { title } = props;
    return (
        <TitleContainer>
            <TitleText>
                <FontAwesomeIcon icon={faTimes} size="xs" />
                <div>{title}</div>
            </TitleText>
            <Triangulo />
        </TitleContainer>
    );
}

export default Title;
