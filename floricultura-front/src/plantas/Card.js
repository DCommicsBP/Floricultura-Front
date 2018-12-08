import React, { Component } from 'react';
export default class Card extends Component {
    render() {
        return (
            <section>
                <br />
                <br />
                <div className="container">
                    <div class="card-columns">
                        {this.props.itens.map(planta =>
                            <div className="card">
                                <div className="card-body">
                                    <h4 className="card-title">Nome: {planta.nome}</h4>
                                    <h6 className="card-title">Tipo: Flor </h6>
                                    <h6 className="card-title">Valor: {planta.valor} </h6>
                                    <h6 className="card-title">Quantidade: {planta.quantidade} </h6>
                                       <div style={{position:'relative',left:'25%'}}>
                                            <button className="btn btn-warning" style={{borderStyle:'solid', borderColor:'white'}}>Editar</button>
                                            <button className="btn btn-danger" style={{borderStyle:'solid', borderColor:'white'}}   >Excluir</button>
                                       </div>
                                </div>
                            </div>
                        )}
                        {/* <img class="card-img-top" src={require('../../src/images/Plantas/flor.jpeg')} style={{ width: '280', height: '180px' }} alt="Card image cap" />*/}
                    </div>
                </div>
            </section>
        )
    }
}