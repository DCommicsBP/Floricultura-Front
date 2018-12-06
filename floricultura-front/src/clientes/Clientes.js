import React, { Component } from 'react';
import Lista from './Lista'
import Formulario from './Formulario';
import Nav from '../commons/nav/Nav';

export default class Clientes extends Component {

    constructor() {
        super();

    }

    titleStyle = {
        textAlign: 'center !important'

    }

    render() {
        return (
            <section>
                <Nav />

                <div className="container">
                    <div className="row" style={this.titleStyle}>
                        <h1>Cadastro de Clientes</h1>
                    </div>
                    <Lista />
                    <br />
                    <br />
                    <Formulario />
                </div>
            </section>
        )

    }
}