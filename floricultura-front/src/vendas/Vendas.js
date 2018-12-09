import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import Plantas from '../plantas/Plantas';
import Clientes from '../clientes/Clientes';
import Usuarios from '../usuarios/Usuarios';

export default class Vendas extends Component {
    constructor() {
        super();
    }
    
    plantas = new Plantas(); 
    clientes = new Clientes();
    usuarios = new Usuarios();  
    

    state ={
        cliente:{}, clientes: this.clientes.listar(), 
        usuario:{}, usuarios:this.usuarios.listar(), 
        planta: {}, plantas:this.plantas.load()
        }
        
    render() {
        console.log('Plantas== >',this.plantas)
        console.log('Usuarios== >', this.usuarios)
        console.log('Clientes== >', this.clientes)
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