import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import Plantas from '../plantas/Plantas';
import Clientes from '../clientes/Clientes';
import Usuarios from '../usuarios/Usuarios';
import axios from 'axios'; 
import ClienteService from '../clientes/ClienteService'

export default class Vendas extends Component {
    constructor(props) {
        super(props);
        
    }
        cs = new ClienteService(); 
        plantas = new Plantas();
        clientes = new Clientes();
        usuarios = new Usuarios();
    
    state = {
        cliente: {}, clientes:this.clientes.listar(),
        usuario: {}, usuarios:this.usuarios.listar(),
        planta: {}, plantas: this.plantas.load(),
        pagamento: "",
        compra: Date.now(),
        entrega: "",
        dataPrvista: (Date.now() + 7),
        id: ""
    }

    render() {
        console.log(this.props)

        return (
            <section >
                <Nav />

                <ul>
                    <li>

                    </li>
                </ul>
            </section>
        )
    }

}