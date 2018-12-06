import React, { Component } from 'react';
import axios from 'axios'

export default class Tabela extends Component {
    constructor() {
        super();
    }

    listar(){
        axios.get(`http://localhost:3000/cliente`)
        .then(res => {
          const persons = res.data;
          this.setState({ persons });
        })

    }

    componentDidMount() {
        listar();
    }

    render() {
        return (
            <section>

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
                        <tr>
                            <th scope="row">1</th>
                            <td>Bruna Pavan</td>
                            <td>bpavan@email.com</td>
                            <td>(51) 555-555-55</td>
                            <td>12-12-2018</td>
                            <td><button type="button" class="btn btn-info" style={{ color:'whitesmoke'}}>Info</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Rafael Fronteira</td>
                            <td>rfronteira@email.com</td>
                            <td>(51) 555-555-55</td>
                            <td>12-12-2018</td>
                            <td><button type="button" class="btn btn-info" style={{ color:'whitesmoke'}}>Info</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Renata Cardoso</td>
                            <td>rcardoso@email.com</td>
                            <td>(51) 555-555-55</td>
                            <td>12-12-2018</td>
                            <td><button type="button" class="btn btn-info" style={{ color:'whitesmoke'}}>Info</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                        <tr>
                            <th scope="row">1</th>
                            <td>Victor Santos</td>
                            <td>vsantos@email.com</td>
                            <td>(51) 555-555-55</td>
                            <td>12-12-2018</td>
                            <td><button type="button" class="btn btn-info" style={{ color:'whitesmoke'}}>Info</button></td>
                            <td><button type="button" class="btn btn-danger">Excluir</button></td>
                        </tr>
                    </tbody>
                </table>
   
            </section>
        )
    }
}