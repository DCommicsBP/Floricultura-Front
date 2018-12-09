import React, { Component } from 'react';

export default class FormularioPlanta extends Component {
    constructor(props) {
        debugger; 
        super(props);
        if (this.props.editar) {
            debugger; 
            this.state = {
                id: this.props.editar.id,
                nome: this.props.editar.nome,
                quantidade: this.props.editar.quantidade,
                imagem: this.props.editar.imagem,
                valor: this.props.editar.valor,
                tipo: this.props.editar.tippo
            };
        }
        else {
            this.state = { nome: "", valor: "", quantidade: "", imagem: "", tipo: "" };
        }
    }

    setParam(param, valor) {
        this.setState({
            [param]: valor
        });
    }

    handleChange = e => {
        this.setParam("tipo", e.target.value)
    }

    enviar() {
        debugger;
        if (this.state.id) {
            this.props.onEditar({
                id: this.state.id,
                nome: this.state.nome,
                quantidade: this.state.quantidade,
                imagem: this.state.imagem,
                valor: Number(this.state.valor), 
                tipo:this.state.tipo
            });
        } else {

            this.props.onAdicionar({
                nome: this.state.nome,
                valor: Number(this.state.valor),
                quantidade: this.state.quantidade,
                imagem: this.state.imagem,
                tipo:this.state.tipo
            });

        }
        this.setState({
            id: "",
            nome: "",
            valor: ""
        });
    }

    render() {
        return (
            <section>
                <br />
                <br />
                <form>

                    <div className="form-group">
                        <label for="nome">Nome da Planta</label>
                        <input type="text" class="form-control" id="nome" placeholder="nome da planta" value ={this.state.nome} onChange={e => this.setParam("nome", e.target.value)} />
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-4">
                            <label for="inputState">Tipo de Planta</label>
                            <select value={this.state.tipo} onChange={this.handleChange} className="form-control">
                                <option selected>Selecione...</option>
                                <option value="flor">Flor</option>
                                <option value="arvore">Árvore</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label for="valor">Valor</label>
                            <input type="text" className="form-control" id="valor" value ={this.state.valor} placeholder="valor em R$" onChange={e => this.setParam("valor", e.target.value)} />
                        </div>
                        <div className="form-group">
                            <label for="quantidade">Unidades Disponíveis</label>
                            <input type="number" className="form-control" id="quantidade" placeholder="unidades" value ={this.state.quantidade} onChange={e => this.setParam("quantidade", e.target.value)} />
                        </div>
                        {/*<div className="form-group col-md-3" style={{ position: 'relative', top: '33px' }}>
                            <label className="custom-file-label" for="inputGroupFile04">Imagem da Planta</label>
                            <div class="custom-file">
                                <input type="file" className="custom-file-input" id="imagem" />
                            </div>
                        </div>*/}
                    </div>

                    <button type="submit" class="btn btn-info" onClick={
                        () => this.enviar()
                    } >{this.state.id ? "Confirmar" : "Adicionar"}</button>
                </form>

            </section>
        )
    }
}