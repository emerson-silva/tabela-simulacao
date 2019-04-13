import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableManager from './components/TableManager';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TableManager />
      </div>
    );
  }
}

export default App;
