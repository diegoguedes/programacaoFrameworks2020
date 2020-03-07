import React, { Component } from 'react'

class Formulario extends Component {
    constructor(props) {
        super(props);
        this.stateInicial = {
            empresa: '',
            valorBruto: '',
            imposto: '',
        }
        this.state = this.stateInicial;
    }
    inputListener = event => {
        const { name, value } = event.target;
        console.log(event.target);
        this.setState({
            [name]: value
        });
    }
    render() {
        const { empresa, valorBruto, imposto } = this.state;
        return (
            <form>
                <label for="empresa">Empresa</label>
                <input
                    id="empresa"
                    type="text"
                    name="empresa"
                    value={empresa}
                    onChange={this.inputListener}
                />
                <label for="valorBruto">Valor Bruto</label>
                <input
                    id="valorBruto"
                    type="text"
                    name="valorBruto"
                    value={valorBruto}
                    onChange={this.inputListener}
                />
                <label for="imposto">Imposto</label>
                <input
                    id="imposto"
                    type="text"
                    name="imposto"
                    value={imposto}
                    onChange={this.inputListener}
                />
                <button className="btn waves-effect waves-light red darken-4" type="button">Salvar
                </button>
            </form>
        )
    }
}
export default Formulario;