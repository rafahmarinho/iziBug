import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'

import Modulo_1 from './components/modulo_1'
import ForgetPassword from './components/modulo_1/esqueci-senha'
import Tela_Confirm_Token from './components/modulo_1/esqueci-senha/tela-confirm-token'
import Tela_Alterar_Senha from './components/modulo_1/esqueci-senha/tela-alterar-senha'

import Tela_Abrir_Chamado from './components/modulo_2/tela-abrir-chamado'
import Tela_Vizualizar_Chamados from './components/modulo_2/tela-chamados-abertos'

import './css/style.css';

const App = () => (
    // eslint-disable-next-line
    <>
        <Route exact path="/" component={Modulo_1} />

        <Route exact path="/esqueci-minha-senha" component={ForgetPassword} />
        <Route exact path="/esqueci-minha-senha/token-confirm" component={Tela_Confirm_Token} />
        <Route exact path="/esqueci-minha-senha/token-confirm/alterar-senha" component={Tela_Alterar_Senha} />

        
        <Route exact path="/abrir-chamado" component={Tela_Abrir_Chamado} />
        <Route exact path="/chamados-abertos" component={Tela_Vizualizar_Chamados} />
        <Route exact path="/perfil-usuario" component={Tela_Vizualizar_Chamados} />
    </>

);

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("app")
);

