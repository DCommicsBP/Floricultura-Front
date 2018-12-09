import React, { Component } from 'react';
import FormularioPlanta from './FormularioPlanta';
import Card from './Card'
import Nav from '../commons/nav/Nav';
import axios from 'axios';

export default class Plantas extends Component {
    constructor() {
        super();
    }
    state = { nome: "", valor: "", id: "", quantidade: "", imagm: "", tipo: "", planta: {}, plantas: [], plantaParaEditar: {} }


    load() {
        debugger;
        axios.get("http://localhost:3000/planta").then(res => {
            const plantas = res.data;
            console.log(plantas)
            this.setState({ plantas });
        })
    }

   
    carregar(id){
        axios.get("http://localhost:3000/planta/"+id).then(res => {
            const planta = res.data;
            this.setState({ planta });
        })


    }

    adicionarPlanta(planta) {
        debugger;
        axios.post("http://localhost:3000/planta/", planta).then(
            (retorno) => this.setState(
                {
                    planta: [...this.state.planta, retorno.data]
                }
            )
        );
    }

    componentDidMount() {
        this.load();
    }

    excluir(planta) {
        axios.delete("http://localhost:3000/planta/" + planta.id).then(
            () => this.load()
        );

    }


    editar(planta) {
        debugger; 
        this.setState({
            planta: planta
        });
    }

    confirmarEdicao(planta) {
        debugger;
        axios.put("http://localhost:3000/planta" + planta.id, planta).then(
            () => this.load()
        );
    }


    render() {
        return (
            <section >
                <Nav />
                <Card itens={this.state.plantas}
                    onExcluir={planta => this.excluir(planta)}
                    onEditar={planta=>this.editar(planta)}
                />
                <div className="container">
                    <FormularioPlanta
                        key={this.state.produtoParaEditar ? this.state.produtoParaEditar.id : "novo"}
                        editar={this.state.produtoParaEditar}
                        onAdicionar={planta => this.adicionarPlanta(planta)}
                        onEditar={planta => this.confirmarEdicao(planta)}
                    />
                    <br />
                    <br />
                </div>

            </section>
        )
    }

}