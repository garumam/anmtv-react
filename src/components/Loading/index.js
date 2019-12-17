import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Container } from './styles';

function Loading () {

    return (
        <Container>
            <FontAwesomeIcon icon={faSpinner} size="3x" spin />
        </Container>
    );
}

export default Loading;