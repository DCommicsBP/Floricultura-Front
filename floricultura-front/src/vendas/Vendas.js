import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import Plantas from '../plantas/Plantas';
import Clientes from '../clientes/Clientes';
import Usuarios from '../usuarios/Usuarios';
import axios from 'axios'; 

export default class Vendas extends Component {
    constructor(props) {
        super(props);
        
    }
 
    state = {
        cliente: {}, clientes:[],
        usuario: {}, usuarios:[],
        planta: {}, plantas: [],
        pagamento: "",
        compra: Date.now(),
        entrega: "",
        dataPrvista: (Date.now() + 7),
        id: "", 
        vendas:[]
    }

    loadClientes(){
        axios.get(`http://localhost:8080/cliente/`)
            .then(res => {
                const clientes = res.data;
                this.setState({ clientes });
            })

    }

    loadUsuarios(){
        
        axios.get(`http://localhost:8080/usuario/`)
            .then(res => {
                const usuarios = res.data;
                this.setState({  usuarios });
            })


    }

    loadPlantas(){
        axios.get(`http://localhost:8080/planta/`)
            .then(res => {
                const plantas = res.data;
                console.log('Plantas==>', plantas)
                this.setState({ plantas });
            })


    }

    loadvendas(){
        axios.get(`http://localhost:8080/vendas/`)
            .then(res => {
                const vendas = res.data;
                console.log('Vendas ===>', vendas);
                this.setState({ vendas });
            })


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