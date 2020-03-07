import React, { Component } from 'react';

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th>Empresa</th>
                <th>Valor Bruto</th>
                <th>Imposto</th>
                <th>Remover</th>
            </tr>
        </thead>
    );
}
const TableBody = props => {
    const linhas = props.nf.map(linha => {
        return (
            <tr key={linha.id}>
                <td>{linha.empresa}</td>
                <td>{linha.valorBruto}</td>
                <td>{linha.imposto}</td>
                <td><button className="btn waves-effect waves-light red darken-4" onClick={() => {
                    props.removeNotaFiscal(linha.id)
                }
                } >Remover</button></td>
            </tr>

        )

    });
    return (
        <tbody>
            {linhas}
        </tbody>
    );
}
class Tabela extends Component {
    render() {
        const { notasFiscais,removeNF } = this.props;
        return (
            <table>
                < TableHead />
                < TableBody nf={notasFiscais} removeNotaFiscal={removeNF} />
            </table>
        );
    }
}
export default Tabela;