import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import axios from 'axios'
import { Alert } from 'reactstrap';
export default class Clientes extends Component {
    constructor() {
        super();
    }
    state = { clientes: [], clienteParaEditar: {}, cliente: { nome: "", email: "", telefone: "", endereco: "", id: "" }, nome: "", email: "", telefone: "", endereco: "", id: "" }
    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }


    listar() {
        let clientes;
        axios.get(`http://localhost:8080/cliente/`)
            .then(res => {
                clientes = res.data;
                this.setState({ clientes })

            })
        return clientes;


    }

    carregar(id) {
        axios.get(`http://localhost:8080/cliente/` + id)
            .then(res => {
                const clientes = res.data;
                this.setState({ clientes });
            })
    }

    editar(cliente) {
        debugger;
        this.setState({
            cliente
        })
        console.log(cliente)
        debugger;

    }

    excluir(e) {
        e.preventDefault();
        axios.delete(`http://localhost:8080/cliente/` + e.target.value)
            .then(res => {
                this.listar();
                console.log(res);
                console.log(res.data);
            })

        debugger;
    }

    handleSubmit = (c) => {

        if (this.validaCampos(c)) {
            let cliente = c;
            if (this.state.id != "") {
                cliente = {
                    id: this.state.id,
                    nome: this.state.nome,
                    email: this.state.email,
                    telefone: this.state.telefone,
                    endereco: this.state.endereco
                };
                this.putCliente(cliente);
            }
            let novoCliente = "";
            if (cliente.id == "") {
                novoCliente = {
                    nome: this.state.nome,
                    email: this.state.email,
                    telefone: this.state.telefone,
                    endereco: this.state.endereco

                };
                this.postCliente(novoCliente);
            }

        }else{
            alert("Você não informou os dados corretamente")
        }


    }

    putCliente(cliente) {
        axios.put(`http://localhost:8080/cliente/` + cliente.id, cliente)
            .then(res => {
                this.limpaCampos();
                this.listar();
            })
    }

    postCliente(novoCliente) {
        axios.post(`http://localhost:8080/cliente/`, { "nome": novoCliente.nome, "email": novoCliente.email, "telefone": novoCliente.telefone, "endereco": novoCliente.endereco })
            .then(res => {
                this.limpaCampos();
                this.listar();
            })

    }

    componentDidMount = () => {
        this.listar();
    }

    limpaCampos = event => {
        if (typeof event != 'undefined')
            event.preventDefault();

        debugger;
        document.getElementById("nome").value = "";
        document.getElementById("endereco").value = "";
        document.getElementById("email").value = "";
        document.getElementById("telefone").value = "";
        document.getElementById("id").value = "";

        this.setParam("nome", "")
        this.setParam("endereco", "")
        this.setParam("email", "")
        this.setParam("telefone", "")
        this.setParam("id", "")

    }

    validaCampos(cliente) {
        debugger;
        if (cliente.nome === null || cliente.nome === "") {
            return false;
        }
        if (cliente.endereco === null || cliente.endereco === "") {
            return false;
        }
        if (cliente.email === null || cliente.email === "") {
            return false;
        }
        if (cliente.telefone === null || cliente.telefone === "") {
            return false;
        }
        return true;
    }

    passValue(cliente) {
        debugger;
        document.getElementById("nome").value = cliente.nome;
        document.getElementById("endereco").value = cliente.endereco;
        document.getElementById("email").value = cliente.email;
        document.getElementById("telefone").value = cliente.telefone;
        document.getElementById("id").value = cliente.id;


        this.setParam("id", cliente.id)
        this.setParam("nome", cliente.nome)
        this.setParam("email", cliente.email)
        this.setParam("telefone", cliente.telefone)
        this.setParam("endereco", cliente.endereco)
    }

    stateEditPost(param) {
        if (param != "") {
            return <h3>Editar Cliente</h3>
        } else {
            return <h3>Novo Cliente</h3>
        }
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
                                <th scope="col">Endereco</th>
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
                                    <td>{cliente.endereco}</td>
                                    <td><button type="button" className="btn btn-info" style={{ color: 'whitesmoke' }} value={cliente.id} onClick={e => this.passValue(cliente)}>Editar</button></td>
                                    <td><button type="button" className="btn btn-danger" value={cliente.id} onClick={e => this.excluir(e)}>Excluir</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>
                    <br /><br /><br /><br />
                    {this.stateEditPost(this.state.id)}
                    <span id="id">{this.state.id}</span>
                    <form>

                        <div className="form-group">
                            <label for="nome">Nome</label>
                            <input type="text" className="form-control" id="nome" placeholder="Nome" onChange={e => this.setParam("nome", e.target.value)} required />
                            <input type="text" className="form-control" id="id" placeholder="Nome" style={{ display: 'none' }} required />

                        </div>

                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label for="email">Email</label>
                                <input type="email" className="form-control" id="email" placeholder="Email" onChange={e => this.setParam("email", e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label for="telefone">Telefone</label>
                                <input type="text" className="form-control" id="telefone" placeholder="Telefone" onChange={e => this.setParam("telefone", e.target.value)} required />
                            </div>
                            <div className="form-group">
                                <label for="endereco">Endereco</label>
                                <input type="text" className="form-control" id="endereco" placeholder="Endereco" onChange={e => this.setParam("endereco", e.target.value)} required />
                            </div>

                        </div>
                        <br /><br />
                        <div className="d-flex justify-content-center">
                            <div style={{ borderStyle: 'solid', borderColor: 'white', borderWidth: '5px' }}>
                                <button type="reset" className="btn btn-success" onClick={() => this.handleSubmit(this.state)}>Enviar</button>
                            </div>
                            <div style={{ borderStyle: 'solid', borderColor: 'white', borderWidth: '5px' }}>
                                <button type="submit" className="btn btn-dark" onClick={this.limpaCampos}>Limpar</button>
                            </div>
                        </div>
                    </form>

                    <br /><br />
                </div>

            </section>
        )

    }
}