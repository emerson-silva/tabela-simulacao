import React, { Component } from 'react';
import Table from 'react-bootstrap/Table';
import TableEntry from './TableEntry';

export default class TableRenderer extends Component {
  render() {
    return (
      <div id="TableRenderer">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Cliente</th>
              <th>Tempo desde a ultima chegada</th>
              <th>Tempo de chegada no relogio</th>
              <th>Tempo do serviço</th>
              <th>Tempo de inicio do serviço no relogio</th>
              <th>Tempo do cliente na fila</th>
              <th>Tempo final do servico no relogio</th>
              <th>Tempo do cliente no sistema</th>
              <th>Tempo livre do operador</th>
            </tr>
          </thead>
          <tbody>
            <TableEntry />
          </tbody>
        </Table>
      </div>
    );
  }
}
