import React, { Component } from 'react';
import Lista from './Lista';
import Formulario from './Formulario';
import Nav from '../commons/nav/Nav';
import axios from 'axios';
import { unwatchFile } from 'fs';
export default class Usuarios extends Component {
    constructor(props) {

        super(props);
    }
    state = {
        "usuarios": [], "nome": "", "login": "", "senha": "", "confirmeSenha": ""
    }

    setParam(param, valor) {
        debugger;
        this.setState({
            [param]: valor
        })
    }


    handlePropriedade = e => {
        const valor = e.target.value;
        this.setState({ ["props"]: valor })
    }

    verificacao(usuario) {
        debugger;
        if (usuario.senha != usuario.confirmeSenha) {
            return false;
        }
        if (usuario.senha == "" || usuario.confirmeSenha == "" || usuario.login == "" || usuario.nome == "") {
            return false;
        }
        return true; 
    }

    handleSubmit = event => {
        event.preventDefault();
        debugger;
        const usuario = {
            nome: this.state.nome,
            login: this.state.login,
            senha: this.state.senha,
            confirmeSenha: this.state.confirmeSenha
        };

        if (this.verificacao(usuario)) {
            this.setState({ nome: "", login: "", senha: "", confirmeSenha: "" })
            axios.post(`http://localhost:3000/usuario`, { "nome": usuario.nome, "login": usuario.login, "senha": usuario.senha })
                .then(res => {
                    this.listar();
                })
            }else{
                return; 
            }
    
        }
    listar() {
        axios.get(`http://localhost:3000/usuario`)
            .then(res => {

                const usuarios = res.data;
                this.setState({ "usuarios": usuarios });
            })
    }

    componentDidMount() {
        this.listar();
    }

    excluir(e) {
        debugger;
        e.preventDefault();
        let value = e.target.value;
        var url = `http://localhost:3000/usuario/${value}`;
        axios.delete(url)
            .then(res => {
                this.listar();
                console.log(res);
                console.log(res.data);
            })

        debugger;
    }
    render() {
        return (
            <section >
                <Nav />

                <div className="container">


                    <div className="row" style={this.titleStyle}>
                        <h1>Controle de Usuários</h1>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Login</th>
                                <th scope="col">Senha</th>
                                <th scope="col">Editar</th>
                                <th scope="col">Excluir</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.usuarios.map(usuario =>
                                <tr>

                                    <th scope="row">1</th>
                                    <td>{usuario.nome}</td>
                                    <td>{usuario.login}</td>
                                    <td>{usuario.senha}</td>
                                    <td><button type="button" className="btn btn-warning" style={{ backgroundColor: 'orange', color: 'whitesmoke' }}>Editar</button></td>
                                    <td><button type="button" className="btn btn-danger" onClick={e => this.excluir(e)} value={usuario.id}>Excluir</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                    <br /><br />
                    <button className="btn btn-primary">
                        Adicionar novo Usuario
           </button>
                    <br /><br />
                    <h3>Novo Usuário</h3>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" placeholder="Nome" value={this.state.nome} onChange={e => this.setParam("nome", e.target.value)} />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" id="email" placeholder="Email" onChange={e => this.setParam("email", e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="login">Login</label>
                            <input type="text" className="form-control" id="login" placeholder="Login" onChange={e => this.setParam("login", e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="senha">Senha</label>
                            <input type="password" className="form-control" id="senha" placeholder="Senha" onChange={e => this.setParam("senha", e.target.value)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="senha02">Confirme a Senha</label>
                            <input type="password" className="form-control" id="senha02" placeholder="Confirme a Senha" onChange={e => this.setParam("confirmeSenha", e.target.value)} />
                        </div>
                    </div>
                    <br /><br />
                    <div className="d-flex justify-content-center">
                        <div style={{ borderStyle: 'solid', borderColor: 'white', borderWidth: '5px' }}>
                            <button type="submit" className="btn btn-success" onClick={this.handleSubmit}>Enviar</button>
                        </div>
                        <div style={{ borderStyle: 'solid', borderColor: 'white', borderWidth: '5px' }}>
                            <button type="reset" className="btn btn-dark">Limpar</button>
                        </div>
                    </div>
                    <br /><br />
                </div>


            </section>

        )
    }
}