import React, { Component } from 'react';

export default class Formulario extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <section>
                <br /><br />
                <h3>Novo Usuário</h3>
                <div className="form-group">
                    <label for="inputAddress">Nome</label>
                    <input type="text" class="form-control" id="name" placeholder="Nome" />
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label for="inputAddress">Login</label>
                        <input type="text" class="form-control" id="name" placeholder="Login" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Senha</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Senha" />
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Confirme a Senha</label>
                        <input type="password" class="form-control" id="inputPassword4" placeholder="Confirme a Senha" />
                    </div>
                </div>
                <br/><br/>
                <div className="d-flex justify-content-center">
                    <div style={{ borderStyle:'solid', borderColor:'white', borderWidth:'5px'}}>
                        <button type="submit" className="btn btn-success">Enviar</button>
                    </div>
                    <div style={{ borderStyle:'solid', borderColor:'white', borderWidth:'5px'}}>
                        <button type="submit" className="btn btn-dark">Limpar</button>
                    </div>
                </div>
                <br/><br/>
            </section>
        );
    }
}