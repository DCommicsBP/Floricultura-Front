import React, { Component } from 'react';
import Nav from '../commons/nav/Nav';
import axios from 'axios';
import { host } from '../environment';

export default class Vendas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            cliente: {}, clientes: [],
            usuario: {}, usuarios: [],
            planta: {}, plantas: [],
            pagamento: "",
            compra: Date.now(),
            entrega: "",
            dataPrevista: (Date.now() + 7),
            id: "",
            vendas: [], 
            venda: { id: "", cliente: {}, usuario: {}, plantas: [], pagamento: "", compra: "", entrega: "", dataPrevista: "", quantidadeSolicitada:"", pagamento:"", valorTotal:""},
            quantidadeSolicitada:"",
            valorTotal:"", 
            quantidade:""
        }
    }


    verificaDisponibilidade(quantidadeSolicitada, quantidade, valor){
        debugger; 
        if(quantidade < quantidadeSolicitada){
            alert("Você solicitou quantidade a mais que o disponível")
            return false; 
        }
        if(quantidadeSolicitada<0){
            alert('Você solicitou quantidade inválida'); 
            return false; 
        }
        if(quantidadeSolicitada ==""){
            alert('Você não solicitou uma quantidade')
            return false; 
        }
        
        let novaQuantidade = quantidade - quantidadeSolicitada; 
        this.setParam("quantidade",novaQuantidade);
        
        valor*=quantidadeSolicitada; 


        return {flag: true, novaQuantidade: novaQuantidade, valor:valor}; 
    }


    setParam(chave, valor) {
        this.setState({
            [chave]: valor
        })

    }

    loadClientes = () => {
        axios.get(host + '/cliente/')
            .then(res => {
                const clientes = res.data;
                console.log('Clientes==> ', clientes)
                this.setState({ clientes });
            })

    }

    loadUsuarios = () => {

        axios.get(host + '/usuario/')
            .then(res => {
                const usuarios = res.data;
                this.setState({ usuarios });
            })


    }

    loadPlantas = () => {
        axios.get(host + '/planta/')
            .then(res => {
                const plantas = res.data;
                console.log('Plantas==>', plantas)
                this.setState({ plantas });
            })


    }

    loadvendas = () => {
        axios.get(host + '/vendas/')
            .then(res => {
                const vendas = res.data;
                console.log('Vendas ===>', vendas);
                this.setState({ vendas });
            })


    }

    componentDidMount() {
        this.loadClientes();
        this.loadPlantas();
        this.loadUsuarios();
        this.loadvendas();
    }

    pegaCliente = value => {
        const cliente = JSON.parse(value)
        this.setState((valorAnterior) => {
            valorAnterior.venda.cliente = cliente
            console.log(valorAnterior)
            return valorAnterior;
        })
    }

    pegaPlanta = value => {
        const planta = JSON.parse(value);
        this.setState((valorAnterior) => {
            valorAnterior.venda.plantas.push(planta)
            return valorAnterior;
        })
    }

    pegaUsuario = value => {
        const usuario = JSON.parse(value);
        this.setState((valorAnterior) => {
            valorAnterior.venda.usuario = usuario;
            return valorAnterior;
        })
    }

    enviar = (v) => {
        axios.post(host + "/venda/", v).then(response => {
            console.log("Hoje a Dai dorme tranquila!!!");
        });
    }

    setVenda = (e) => {
        let novaVenda = {
            usuario: this.state.venda.usuario,
            cliente: this.state.venda.cliente,
            plantas: this.state.venda.plantas,
            pagamento:this.state.pagamento, 
            quantidadeSolicitada: this.state.quantidadeSolicitada
        }

        let quantidade = 0; 
        let plantas = this.state.venda.plantas.map(planta=>{
            quantidade = planta.quantidade
        }); 
        let tot = 0; 
        debugger; 
        let obj = this.verificaDisponibilidade(novaVenda.quantidadeSolicitada,quantidade, tot);
        
        if(obj.flag){
            novaVenda = {
                usuario: this.state.venda.usuario,
                cliente: this.state.venda.cliente,
                plantas: this.state.venda.plantas,
                pagamento:this.state.pagamento, 
                quantidade: obj.novaQuantidade,
                valorTotal: obj.valor
            }
    
            novaVenda.plantas[0].quantidade = quantidade;
            this.enviar(novaVenda);


            alert('Compra realizada com sucesso!');

        }else{
            alert('Não foi possível realizar a sua compra. '); 
        }
    }

    render = () => {

        return (
            <section >
                <Nav />
                <div className="container">
                    <h3>Clientes</h3>

                    <select className="form-control form-control col-md-9" onChange={e => this.pegaCliente(e.target.value)}>
                        <option disabled selected>Selecione</option>
                        {this.state.clientes.map(cliente =>
                            <option value={JSON.stringify(cliente)}>Nome: {cliente.nome} - Endereco: {cliente.endereco}</option>
                        )}
                    </select>
                    <h3>Vendedor</h3>
                    <select className="form-control form-control col-md-6" onChange={e => this.pegaUsuario(e.target.value)}>
                        <option disabled selected>Selecione</option>
                        {this.state.usuarios.map(usuario =>
                            <option value={JSON.stringify(usuario)}>{usuario.nome}</option>
                        )}
                    </select>
                    <h3>Plantas</h3>
                    <select className="form-control form-control col-md-6" onChange={e => this.pegaPlanta(e.target.value)}>
                        <option disabled selected>Selecione</option>
                        {this.state.plantas.map(planta =>
                            <option value={JSON.stringify(planta)}>Nome: {planta.nome} - Valor: {planta.valor} R$ - Quantidade: {planta.quantidade}</option>
                        )}
                    </select>
                    <span>{this.state.valorCompra}</span>
                    <h3>Quantidade solicitada</h3>

                    <input type="text" className="form-control col-md-4" id="quantidadeSolicitada" placeholder="Nome" onChange={e => this.setParam("quantidadeSolicitada", e.target.value)} required />

                    <h3>Forma de Pagamento</h3>
        
                    <select className="form-control form-control col-md-6" onChange={e => this.setParam("pagamento", e.target.value)}>
                        <option disabled selected>Selecione</option>
                        <option value="aVista">A Vista</option>
                        <option value="aPrazo">Prazo</option>
                        <option value="cartao">Cartão</option>
                    </select>
                    <button onClick={e => this.setVenda(e)}>enviar</button>
                </div>

            </section>
        )
    }

}