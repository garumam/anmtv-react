import React from 'react';
import { Container, Content } from './styles';
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';

function App(props) {
  return (
    <Container>
      <Header />
      <Menu />
      <Content>
        {props.children}
      </Content>
      <Footer />
    </Container>
  );
}

export default App;
