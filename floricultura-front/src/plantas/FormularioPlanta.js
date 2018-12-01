import React, { Component } from 'react';

export default class FormularioPlanta extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <section>
                <br />
                <br />
                <form>

                    <div class="form-group">
                        <label for="inputAddress">Nome da Planta</label>
                        <input type="text" class="form-control" id="inputAddress" placeholder="nome da planta" />
                    </div>

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label for="inputState">Tipo de Planta</label>
                            <select id="inputState" class="form-control">
                                <option selected>Selecione...</option>
                                <option>Flor</option>
                                <option>Árvore</option>
                            </select>
                        </div>
                        <div class="form-group">
                            <label for="inputAddress2">Valor</label>
                            <input type="text" class="form-control" id="inputAddress2" placeholder="valor em R$" />
                        </div>
                        <div class="form-group col-md-3" style={{position:'relative', top:'33px'}}>
                            <label class="custom-file-label" for="inputGroupFile04">Imagem da Planta</label>
                            <div class="custom-file">
                                <input type="file" class="custom-file-input" id="inputGroupFile04" />
                            </div>

                        </div>
                    </div>

                    <button type="submit" class="btn btn-primary">Sign in</button>
                </form>

            </section>
        )
    }
}