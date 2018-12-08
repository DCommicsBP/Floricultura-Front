import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import axios from 'axios'
export default class Clientes extends Component {

    constructor() {

        super();
    }
    state = { clientes: [], clienteParaEditar: {}, cliente: { nome: "", email: "", telefone: "", } }

    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }

    limpaCampos () {
        this.setState({ nome: "", email: "", telefone: "" })
    }

    listar() {
        axios.get(`http://localhost:3000/cliente`)
            .then(res => {
                const clientes = res.data;
                this.setState({ clientes });
            })
    }

    carregar(id) {
        axios.get(`http://localhost:3000/cliente/` + id)
            .then(res => {
                const clientes = res.data;
                this.setState({ clientes });
            })
    }

    editar(cliente) {

        this.setState({
            clienteParaEditar: cliente
        })
        console.log(cliente)
        debugger;

    }

    excluir(e) {
        e.preventDefault();
        axios.delete(`http://localhost:3000/cliente/` + e.target.value)
            .then(res => {
                this.listar();
                console.log(res);
                console.log(res.data);
            })

        debugger;
    }

    
    handleSubmit = event => {
        event.preventDefault();

        const cliente = {
            nome: this.state.nome,
            email: this.state.email,
            telefone: this.state.telefone
        };

        axios.post(`http://localhost:3000/cliente`, { "nome": cliente.nome, "email": cliente.email, "telefone": cliente.telefone })
            .then(res => {
                debugger; 
                this.setState({ nome: "", email: "", telefone: "" })

                this.listar();

            })
    }


    componentDidMount = () => {
        this.listar();
    }

    render() {
        return (
            <section>
                <Nav />
                <div className="container">
                    <div className="row" style={this.titleStyle}>
                        <h1>Cadastro de Clientes</h1>
                    </div>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Email</th>
                                <th scope="col">Telefone</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.clientes.map(cliente =>
                                <tr>
                                    <th scope="row">{cliente.id}</th>
                                    <td>{cliente.nome}</td>
                                    <td>{cliente.email}</td>
                                    <td>{cliente.telefone}</td>
                                    <td><button type="button" className="btn btn-info" style={{ color: 'whitesmoke' }} value={cliente.id}>Editar</button></td>
                                    <td><button type="button" className="btn btn-danger" value={cliente.id} onClick={e => this.excluir(e)}>Excluir</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    <br /><br /><br /><br />
                    <h3>Novo Cliente</h3>
                    <form>

                        <div className="form-group">
                            <label for="inputAddress">Nome</label>
                            <input type="text" className="form-control" id="name" placeholder="Nome" onChange={e => this.setParam("nome", e.target.value)} />
                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="inputEmail4">Email</label>
                                <input type="email" className="form-control" id="inputEmail4" placeholder="Email" onChange={e => this.setParam("email", e.target.value)} />
                            </div>
                            <div className="form-group">
                                <label for="inputAddress">Telefone</label>
                                <input type="text" className="form-control" id="name" placeholder="Telefone" onChange={e => this.setParam("telefone", e.target.value)} />
                            </div>

                        </div>
                        <br /><br />
                        <div className="d-flex justify-content-center">
                            <div style={{ borderStyle: 'solid', borderColor: 'white', borderWidth: '5px' }}>
                                <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Enviar</button>
                            </div>
                            <div style={{ borderStyle: 'solid', borderColor: 'white', borderWidth: '5px' }}>
                                <button type="reset" className="btn btn-dark" onReset={this.limpaCampos}>Limpar</button>
                            </div>
                        </div>
                    </form>

                    <br /><br />
                </div>

            </section>
        )

    }
}