import React, { Component } from 'react';

export default class Tabela extends Component {
    constructor() {
        super();
    }

   titleStyle ={
       textAlign:'center !important'

    }

    render() {
        return (
            <section>
                <div className="row" style={this.titleStyle}>
                    <h1>Controle de Usuários</h1>
                </div>
                <table class="table">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Nome</th>
                            <th scope="col">Email</th>
                            <th scope="col">Login</th>
                            <th scope="col">Editar</th>
                            <th scope="col">Excluir</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>Bruna Pavan</td>
                            <td>bpavan@email.com</td>
                            <td>bpavan</td>
                            <td><button type="button" class="btn btn-warning" style={{backgroundColor:'orange', color:'whitesmoke'}}>Editar</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Rafael Fronteira</td>
                            <td>rfronteira@email.com</td>
                            <td>rfronteira</td>
                            <td><button type="button" class="btn btn-warning" style={{backgroundColor:'orange', color:'whitesmoke'}}>Editar</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Renata Cardoso</td>
                            <td>rcardoso@email.com</td>
                            <td>msantos</td>
                            <td><button type="button" class="btn btn-warning" style={{backgroundColor:'orange', color:'whitesmoke'}}>Editar</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Victor Santos</td>
                            <td>vsantos@email.com</td>
                            <td>vsantos</td>
                            <td><button type="button" class="btn btn-warning" style={{backgroundColor:'orange', color:'whitesmoke'}}>Editar</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                    </tbody>
                </table>
   
            </section>
        )
    }
}