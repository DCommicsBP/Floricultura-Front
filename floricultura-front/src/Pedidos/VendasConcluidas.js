import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import axios from 'axios';
import { host } from '../environment';
export default class VendasConcluidas extends Component{
    constructor(){
        super(); 
        this.state = {
            vendas: []
        }
    }

    setProp = (chave, valor)=>{
        this.setState({[chave]:valor})
    }

    load = ()=>{
        axios.get(`${host}/venda/completas/`).then(res=>{
                this.setProp("vendas",res.data); 

        })
    }

    componentDidMount = ()=> {
        this.load(); 
    }
    render = ()=> {

        return (
            <section>
                <Nav/>
                <div className="container">
                    <div className="row">
                    <br/>
                    <br/>
                    <br/>
                <h1>Compras: </h1>
                    
                {this.state.vendas.map(venda=>{
                   return (
                        <section>
                            
                            <div class="card" style={{width: "18rem"}}>
                                <div class="card-body">
                                    <h5 class="card-title">Cliente</h5>
                                    Nome: {venda.cliente.nome}<br/>
                                    Endereco: {venda.cliente.endereco}<br/>
                                    Email: {venda.cliente.endereco}<br/>
                                    <br/>
                                    <h5 class="card-title">Plantas</h5>
                                    {venda.plantas.map(planta=>{
                                        return (
                                        <section>
                                            <br/>
                                            Planta: {planta.nome}<br/>
                                            Tipo: {planta.tipo}<br/>
                                            Valor: {planta.valor}<br/>
                                        </section>
                                        )
                                    })}
                                    <h5 class="card-title">Usuario</h5>
                                    Nome: {venda.usuario.nome}<br/>
                                    Nome: {venda.usuario.login}
                                    
                                </div>
                            </div>
                            
                        </section>

                    )
                })}
                </div>
                </div>
            </section>

        )

    }

}