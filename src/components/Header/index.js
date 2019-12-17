import React from 'react';
import { Container, Nav, NavItem } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebookSquare,
    faInstagram, 
    faTwitter, 
    faYoutube, 
    faDiscord, 
    faSistrix 
} from '@fortawesome/free-brands-svg-icons';
import image from '../../assets/imagens/logo-anmtv-2018-200.png';

function Header() {
    return (
        <Container>
            <img src={image} alt={image}/>
            <Nav>
                <NavItem hover="#3b5998" target="_blank" href="https://pt-br.facebook.com/">
                    <FontAwesomeIcon icon={faFacebookSquare} size="3x" />
                </NavItem>
                <NavItem hover="#d6249f" target="_blank" href="https://www.instagram.com/">
                    <FontAwesomeIcon icon={faInstagram} size="3x" />
                </NavItem>
                <NavItem hover="#1DA1F2" target="_blank" href="https://twitter.com/">
                    <FontAwesomeIcon icon={faTwitter} size="3x" />
                </NavItem>
                <NavItem hover="#FF0000" target="_blank" href="https://www.youtube.com/">
                    <FontAwesomeIcon icon={faYoutube} size="3x" />
                </NavItem>
                <NavItem hover="#7289da" target="_blank" href="https://discordapp.com/">
                    <FontAwesomeIcon icon={faDiscord} size="3x" />
                </NavItem>
                <NavItem hover="#d3d3d3" target="_blank" href="#">
                    <FontAwesomeIcon icon={faSistrix} size="3x" />
                </NavItem>
            </Nav>
        </Container>
    );
}

export default Header;