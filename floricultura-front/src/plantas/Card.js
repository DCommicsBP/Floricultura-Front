import React, { Component } from 'react';

export default class Card extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section>
                <br />
                <br />
                <div className="container">

                    <div class="card-columns">
                        <div class="card">
                            <img class="card-img-top" src={require('../../src/images/Plantas/flor.jpeg')} style={{ width: '280', height: '180px' }} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">Nome: Planta 01</h4>
                                <h6 class="card-title">Tipo: Flor </h6>
                                <h6 class="card-title">Valor: R$ 40,00 </h6>
                                <h6 class="card-title">Quantidade: 7 unidades </h6>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>

                        <div class="card">
                            <img class="card-img-top" src={require('../../src/images/Plantas/flor.jpeg')} style={{ width: '280', height: '180px' }} alt="Card image cap" />
                            <div class="card-body">
                                <h4 class="card-title">Nome: Planta 01</h4>
                                <h6 class="card-title">Tipo: Flor </h6>
                                <h6 class="card-title">Valor: R$ 40,00 </h6>
                                <h6 class="card-title">Quantidade: 7 unidades </h6>
                                <a href="#" class="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        )
    }
}