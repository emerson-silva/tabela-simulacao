import React, { Component } from 'react';
import TableRenderer from './TableRenderer';
import ConfigFormRenderer from './ConfigFormRenderer';

export default class TableManager extends Component {
  render() {
    return (
        <div id="TableManager">
            <ConfigFormRenderer />
            <TableRenderer />
        </div>
    );
  }
}
