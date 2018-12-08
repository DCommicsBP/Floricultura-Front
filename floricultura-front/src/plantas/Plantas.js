import React, { Component } from 'react';
import FormularioPlanta from './FormularioPlanta';
import Card from './Card'
import Nav from '../commons/nav/Nav';
import axios from 'axios';

export default class Plantas extends Component {
    constructor() {
        super();
    }
    state = { nome: "", valor: "", id: "", quantidade: "", imagm: "", planta: {}, plantas: [] }

    load() {
        debugger;
        axios.get("http://localhost:3000/planta").then(res => {
            const plantas = res.data;
            console.log(plantas)
            this.setState({ plantas });
        })
    }

    excluir(){
        
    }

     
    componentDidMount() {
        this.load();
    }

    render() {
        return (
            <section >
                <Nav />
                <Card itens={this.state.plantas} />
                <FormularioPlanta />
            </section>
        )
    }

}