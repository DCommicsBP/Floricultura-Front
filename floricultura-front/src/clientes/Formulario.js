import React, { Component } from 'react';

export default class Formulario extends Component {
    constructor() {
        super();
    }


    render() {
        return (
            <section>
                <br /><br />
                <h3>Novo Cliente</h3>
                <div class="form-group">
                    <label for="inputAddress">Nome</label>
                    <input type="text" class="form-control" id="name" placeholder="Nome" />
                </div>

                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="inputEmail4">Email</label>
                        <input type="email" class="form-control" id="inputEmail4" placeholder="Email" />
                    </div>
                    <div class="form-group">
                        <label for="inputAddress">Telefone</label>
                        <input type="text" class="form-control" id="name" placeholder="Telefone" />
                    </div>
                   
                </div>
                <br/><br/>
                <div class="d-flex justify-content-center">
                    <div style={{ borderStyle:'solid', borderColor:'white', borderWidth:'5px'}}>
                        <button type="submit" class="btn btn-success">Enviar</button>
                    </div>
                    <div style={{ borderStyle:'solid', borderColor:'white', borderWidth:'5px'}}>
                        <button type="submit" class="btn btn-dark">Limpar</button>
                    </div>
                </div>
                <br/><br/>
            </section>
        );
    }
}