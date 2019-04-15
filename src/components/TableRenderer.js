import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';
import TableEntry from './TableEntry';
import '../css/css.css';

export default class TableRenderer extends Component {

  render() {
    return (
      <div id="TableRenderer" className={(this.props.isActive)?'active':'hidden'}>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="table-head table-title">Cliente</th>
              <th className="table-head table-title">Tempo desde a ultima chegada</th>
              <th className="table-head table-title">Tempo de chegada no relogio</th>
              <th className="table-head table-title">Tempo do serviço</th>
              <th className="table-head table-title">Tempo de inicio do serviço no relogio</th>
              <th className="table-head table-title">Tempo do cliente na fila</th>
              <th className="table-head table-title">Tempo final do servico no relogio</th>
              <th className="table-head table-title">Tempo do cliente no sistema</th>
              <th className="table-head table-title">Tempo livre do operador</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.entryList.map(entry =>
                <TableEntry item={entry}/>
              )
            }
          </tbody>
        </Table>
        <Button className={this.props.isActive ? 'render-bt':'hidden'} variant="outline-primary"
          size="lg" onSubmit={this.props.renderTable} block>
          Gerar Tablela
        </Button>
        <Button className={this.props.isActive ? 'clear-bt':'hidden'} variant="outline-danger"
          size="lg" onSubmit={this.props.cleanTable}> Limpar Configuração </Button>
      </div>
    );
  }
}
