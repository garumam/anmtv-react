import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import App from './App';
import Home from './components/Home';
import ConexaoAsia from './components/ConexaoAsia';
import LiveToon from './components/Livetoon';
import FilmesSeries from './components/FilmesSeries';
import Games from './components/Games';
import Especiais from './components/Especiais';
import Noticia from './components/Noticia';

function Routes () {

    const CustomRoute = (props) => (
        <Route {...props}>
            <App>
                {props.children}
            </App>
        </Route>
    );

    return (
        <Router>
            <Switch>
                <CustomRoute exact path="/">
                    <Home />
                </CustomRoute>
                <CustomRoute path="/noticia/:nome">
                    <Noticia />
                </CustomRoute>
                <CustomRoute path="/conexaoasia">
                    <ConexaoAsia />
                </CustomRoute>
                <CustomRoute path="/livetoon">
                    <LiveToon />
                </CustomRoute>
                <CustomRoute path="/filmeseseries">
                    <FilmesSeries />
                </CustomRoute>
                <CustomRoute path="/games">
                    <Games />
                </CustomRoute>
                <CustomRoute path="/especiais">
                    <Especiais />
                </CustomRoute>
                <CustomRoute path="/programacao">
                    <div>PROGRAMAÇÃO</div>
                </CustomRoute>
                <CustomRoute path="/contato">
                    <div>CONTATO</div>
                </CustomRoute>
            </Switch>
        </Router>
    );
}

export default Routes;