import React, { Component } from 'react';
export default class Nav extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <nav class="navbar navbar-expand-lg navbar-dark bg-success">
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Clientes <span class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Usuários</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link" href="#">Plantas</a>
                        </li>

                        <li class="nav-item active">
                            <a class="nav-link" href="#">Vendas</a>
                        </li>

                    </ul>
                </div>
                <img src={require('../../images/nav/evergreen.jpg')} style={{width: '200px', height: '100px'}} />

            </nav>
        )
    }
}