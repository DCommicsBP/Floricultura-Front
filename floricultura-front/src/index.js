import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ServiceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom' // importando o BrowserRouter do pacote que acabamos de instalar


import Clientes from './clientes/Clientes';
import Usuarios from './usuarios/Usuarios';
import Plantas from './plantas/Plantas';
import Vendas from './vendas/Vendas';

ReactDOM.render(
<BrowserRouter>
    <Switch>
    <Route exact={true} path="/" component={App} />
        <Route  path="/plantas" component={Plantas} />
        <Route  path="/usuarios" component={Usuarios} />
        <Route  path="/vendas" component={Vendas} />
        <Route  path="/clientes" component={Clientes} />
    </Switch>
    </ BrowserRouter>
    , document.getElementById('root'));
