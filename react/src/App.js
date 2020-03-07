import React, { Component, Fragment } from 'react';
import Tabela from './Tabela';
import Form from './Formulario';
import 'materialize-css/dist/css/materialize.min.css';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      nf: [],
    };
  }

  removeNotaFiscal = index => {
    const { nf } = this.state;

    this.setState(
      {
        nf: nf.filter((nota, posAtual) => {
          return posAtual !== index;
        }),
      }
    );
  }
  render() {
    return (
      <div className="App">
        <Fragment>
          <div className="container">
            <h1>Programação com Frameworks - Unialfa</h1>
            <Tabela notasFiscais={this.state.nf} removeNF={this.removeNotaFiscal} />
            <Form />
          </div>
        </Fragment>

      </div>
    );
  }
}
export default App;