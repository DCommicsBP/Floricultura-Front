import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import axios from 'axios';
export default class Usuarios extends Component {
    constructor(props) {

        super(props);
    }
    state = {
        usuarios: [], nome: "", login: "", senha: "", confirmeSenha: "", id:"", usuario:{nome: "", login: "", senha: "", confirmeSenha: "", id:"", isVisible: true}
    }

    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }

    handlePropriedade = e => {
        const valor = e.target.value;
        this.setState({ ["props"]: valor })
    }

    verificacao(usuario) {
        debugger;
        if (usuario.senha != usuario.confirmeSenha)
            return false;
        
        if (usuario.senha == "") 
            return false;
        if( usuario.confirmeSenha == "")
            return false;
        if(usuario.login == "")
            return false;
        if(usuario.nome == "")
            return false;
        
        return true;
    }

    handleSubmit = event => {
        event.preventDefault();
        debugger;


        const usuario = {
            nome: this.state.nome,
            login: this.state.login,
            senha: this.state.senha,
            confirmeSenha: this.state.confirmeSenha, 
            id: this.state.id
        };

        if(this.verificacao(usuario)){
            let teste = { "nome": usuario.nome, "login": usuario.login, "senha": usuario.senha }
            if(usuario.id==""){
                this.setState({ nome: "", login: "", senha: "", confirmeSenha: "" })
                axios.post(`http://localhost:8080/usuario/`, teste)
                    .then(res => {
                        this.limpaCampos(); 
                        this.listar();
                    })
            

        }else{
            axios.put(`http://localhost:8080/usuario/`+usuario.id,usuario)
                    .then(res => {
                        this.limpaCampos(); 
                        this.listar();
                    })
            }
        }else{
            alert("Você não informou os dados corretamente!")
        }
            
    }

    listar() {
        let usuarios;
        axios.get(`http://localhost:8080/usuario/`)
            .then(res => {
                usuarios = res.data;
                this.setState({  usuarios });
                this.setParam("usuarios", usuarios)

            })
            debugger;   
            return usuarios; 
    }

    componentDidMount() {
        this.listar();
    }

    excluir(e) {
        debugger;
        e.preventDefault();
        let value = e.target.value;
        var url = `http://localhost:8080/usuario/${value}`;
        axios.delete(url)
            .then(res => {
                this.listar();
                console.log(res);
                console.log(res.data);
            })

        debugger;
    }

    passValues(usuario){
        debugger; 
        document.getElementById("id").value = usuario.id; 
        document.getElementById("nome").value = usuario.nome; 
        //document.getElementById("senha").value = usuario.senha; 
        //document.getElementById("senha02").value = usuario.senha; 
        document.getElementById("login").value = usuario.login; 

        this.setParam("id", usuario.id)
        this.setParam("nome", usuario.nome)
        //this.setParam("senha", usuario.senha)
        //this.setParam("senha02", usuario.senha)
        this.setParam("login", usuario.login)

    }   
    
    idVerifica(prop){
        if(prop == "") return <h3>Novo Usuário</h3>
        if(prop != "") return <h3>Editar Usuário</h3>
    }

    limpaCampos = e =>{
        if(typeof e != 'undefined'){
            e.preventDefault(); 
        }
        document.getElementById("id").value = ""; 
        document.getElementById("nome").value = ""; 
        document.getElementById("senha").value = ""; 
        document.getElementById("senha02").value = ""; 
        document.getElementById("login").value = ""; 

        this.setParam("id", "")
        this.setParam("nome", "")
        this.setParam("senha", "")
        this.setParam("senha02", "")
        this.setParam("login", "")

    }

    render() {
        return (
            <section >
                <Nav />

                <div className="container"  style={{position:"relative", top:"100px"}}>

                
                    <div className="row" >
                        <h1>Controle de Usuários</h1>
                    </div>
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nome</th>
                                <th scope="col">Login</th>
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
                                    <td><button type="button" className="btn btn-info" style={{ backgroundColor: 'orange', color: 'whitesmoke' }} value={usuario.id} onClick={e=>this.passValues(usuario)}>Editar</button></td>
                                    <td><button type="button" className="btn btn-danger" onClick={e => this.excluir(e)} value={usuario.id}>Excluir</button></td>
                                </tr>
                            )}

                        </tbody>
                    </table>

                    <br /><br />
                    {this.idVerifica(this.state.id)}
                    <span id="id"></span>
                    <div className="form-group">
                        <label htmlFor="nome">Nome</label>
                        <input type="text" className="form-control" id="nome" placeholder="Nome" value={this.state.nome} onChange={e => this.setParam("nome", e.target.value)} />
                    </div>

                    <div className="form-row">
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
                            <button type="reset" className="btn btn-dark" onClick={this.limpaCampos}>Limpar</button>
                        </div>
                    </div>
                    <br /><br />
                </div>
            </section>

        )
    }
}