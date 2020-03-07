import React, { Component, Fragment } from 'react';
import Tabela from './Tabela';
import Form from './Formulario';
import PopUp from './PopUp';
import ApiService from './ApiService';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nf: [],
    };
  }

  removeNotaFiscal = id => {
    const { nf } = this.state;
    this.setState(
      {
        nf: nf.filter(nota => {
          return nota.id !== id;
        }),
      });
    PopUp.exibeMensagem("error", "Nota Fiscal removida com sucesso");
    ApiService.RemoveNotaFiscal(id);
  }
  componentDidMount() {
    ApiService.ListaNotasFiscais()
      .then(res => {
        this.setState({ nf: [...this.state.nf, ...res] })
      })
  }
  escutadorDeSubmit = notaFiscal => {
    ApiService.CriaNotaFiscal(JSON.stringify(notaFiscal))
      .then(notaFiscal).then(notaFiscal => {
        this.setState({ nf: notaFiscal });
        PopUp.exibeMensagem("success", "Nota Fiscal adicionado com sucesso");
      })
  }
  render() {
    return (
      <div className="App">
        <Fragment>
          <div className="container">
            <h1>Programação com Frameworks - Unialfa</h1>
            <Tabela notasFiscais={this.state.nf} removeNF={this.removeNotaFiscal} />
            <Form escutadorDeSubmit={this.escutadorDeSubmit} />
          </div>
        </Fragment>

      </div>
    );
  }
}
export default App;