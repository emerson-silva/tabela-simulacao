import React, { Component } from 'react';
import TableRenderer from './TableRenderer';
import ConfigFormRenderer from './ConfigFormRenderer';
//import ItemEntry from './ItemEntry';

export default class TableManager extends Component {
  state = {
    sinceLastArriveList: [],
    serviceTimeList: [],
    entryList: []
  }

  addArriveTime(arriveTime) {
    this.setState((state) => {
      return {
        sinceLastArriveList: state.sinceLastArriveList.push(arriveTime),
        serviceTimeList: state.serviceTimeList,
        entryList: state.entryList
      };
    });
  }

  removeArriveTime () {
    //
  }

  addServiceTime(serviceTime) {
    this.setState((state) => {
      return {
        sinceLastArriveList: state.sinceLastArriveList,
        serviceTimeList: state.serviceTimeList.push(serviceTime),
        entryList: state.entryList
      };
    });
  }

  removeServiceTime() {
    //
  }

  render() {
    return (
        <div id="TableManager">
            <ConfigFormRenderer
              sinceLastArriveList={this.state.sinceLastArriveList}
              serviceTimeList={this.state.serviceTimeList}
              addArriveTime={this.addArriveTime}
              addServiceTime={this.addServiceTime}
              removeArriveTime={this.removeArriveTime}
              removeServiceTime={this.removeServiceTime}
              />
            <TableRenderer entryList={this.state.entryList}/>
        </div>
    );
  }
}
