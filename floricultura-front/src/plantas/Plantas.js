import React, { Component } from 'react';
import Card from './Card'
import Nav from '../commons/nav/Nav';
import axios from 'axios';

export default class Plantas extends Component {
    constructor() {
        super();
    }
    state = { nome: "", valor: "", id: "", quantidade: "", imagm: "", tipo: "", planta: {}, plantas: [], plantaParaEditar: {} }

    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }
    load() {
        debugger;
        axios.get("http://localhost:3000/planta").then(res => {
            const plantas = res.data;
            console.log(plantas)
            this.setState({ plantas });
        })
    }


    carregar(id) {
        axios.get("http://localhost:3000/planta/" + id).then(res => {
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


    passValues(planta) {
        debugger;
        document.getElementById("nome").value = planta.nome;
        document.getElementById("valor").value = planta.valor;
        document.getElementById("id").value = planta.id;
        document.getElementById("quantidade").value = planta.quantidade;
        document.getElementById("tipo").value = planta.tipo;

        this.setParam("nome", planta.nome)
        this.setParam("valor", planta.valor)
        this.setParam("id", planta.id)
        this.setParam("quantidade", planta.quantidade)
        this.setParam("tipo", planta.tipo)

    }

    editar(planta) {
        debugger;
        this.setState({
            planta
        })

    }

    enviar(planta) {
        if (planta.id == "") {
            this.adicionarPlanta(planta)

        } else {
            axios.put(`http://localhost:3000/planta/` + planta.id, planta)
                .then(res => {
                    this.listar();
                })
        }

    }

    getState() {
        return {
            nome: this.state.nome, valor: this.state.valor, id: this.state.id, quantidade: this.state.quantidade,
            imagm: this.state.imagem, tipo: this.state.tipo
        };
    }

    confirmarEdicao(planta) {
        debugger;
        axios.put("http://localhost:3000/planta" + planta.id, planta).then(
            () => this.load()
        );
    }
    changeMensage(param) {
        if (param == "") {
            return <h3>Novo Registro</h3>
        } else {
            return <h3>Editar Registro</h3>
        }
    }

    render() {
        return (
            <section >
                <Nav />
                <Card itens={this.state.plantas}
                    onExcluir={planta => this.excluir(planta)}
                    onEditar={planta => this.passValues(planta)}
                />

                <h3>FormularioPlanta</h3>
                <span id="id"></span>
                <div className="container">
                    <form>
                        {this.changeMensage(this.state.id)}
                        <div className="form-group">
                            <label for="nome">Nome da Planta</label>
                            <input type="text" class="form-control" id="nome" placeholder="nome da planta" value={this.state.nome} onChange={e => this.setParam("nome", e.target.value)} />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-4">
                                <label for="inputState">Tipo de Planta</label>
                                <select value={this.state.tipo} onChange={this.handleChange} className="form-control" id="tipo">
                                    <option selected>Selecione...</option>
                                    <option value="flor">Flor</option>
                                    <option value="arvore">Árvore</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label for="valor">Valor</label>
                                <input type="text" className="form-control" id="valor" value={this.state.valor} placeholder="valor em R$" onChange={e => this.setParam("valor", e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="quantidade">Unidades Disponíveis</label>
                                <input type="number" className="form-control" id="quantidade" placeholder="unidades" value={this.state.quantidade} onChange={e => this.setParam("quantidade", e.target.value)} />
                            </div>

                            {/*<div className="form-group col-md-3" style={{ position: 'relative', top: '33px' }}>

                            <label className="custom-file-label" for="inputGroupFile04">Imagem da Planta</label>

                            <div class="custom-file">

                                <input type="file" className="custom-file-input" id="imagem" />

                            </div>

                        </div>*/}
                        </div>

                        <button type="submit" class="btn btn-info" onClick={
                            () => this.enviar(this.state)
                        } >{this.state.id ? "Confirmar" : "Adicionar"}</button>
                    </form>

                    <br />
                    <br />
                </div>

            </section>
        )
    }

}