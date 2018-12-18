import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import axios from 'axios';

export default class VendasPendentes {
    constructor() {
        super();

    }

    setProp = (chave, valor) => {
        this.setState({ [chave]: valor })
    }

    load = () => {
        axios.get(`${host}/venda/completas/`).then(res => {
            this.setProp("vendas", res.data);

        })
    }

    componentDidMount = () => {
        this.load();
    }
    render = () => {

        return (
            <section>
                <Nav/>

            </section>

        )

    }
}