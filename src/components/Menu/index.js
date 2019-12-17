import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NavContainer, Menus, NavLinkCustom } from './styles';

function Menu () {
    const menus = [
        {name: 'HOME', path: '/', bColor: '#404042'}, 
        {name: 'CONEXÃO ÁSIA', path: '/conexaoasia', bColor: '#1a4f9b'}, 
        {name: 'LIVETOON', path: '/livetoon', bColor: '#39b44a'}, 
        {name: 'FILMES E SÉRIES', path: '/filmeseseries', bColor: '#f05a28'}, 
        {name: 'GAMES', path: '/games', bColor: '#01a79d'}, 
        {name: 'ESPECIAIS', path: '/especiais', bColor: '#fff102', color: 'black'}, 
        {name: 'PROGRAMAÇÃO', path: '/programacao', bColor: '#663382'},
        {name: 'CONTATO', path: '/contato', bColor: '#d03428'}
    ];

    return (
        <NavContainer>
            <Menus>
                {menus.reduce((current, next) => {
                    return (
                        <>
                            {current}
                            <li>
                                <NavLinkCustom
                                    hover={{ bColor: next.bColor, color: next.color}} 
                                    activeStyle={{
                                        backgroundColor: next.bColor,
                                        color: next.color || 'white'
                                    }}
                                    to={next.path}
                                    exact
                                >
                                    {next.name}
                                </NavLinkCustom>
                            </li>
                            {next.name !== 'CONTATO' && <li><FontAwesomeIcon icon={faTimes} size="xs" /></li>}
                        </>
                    );
                }, null)}
            </Menus>
        </NavContainer>
    );
}

export default Menu;