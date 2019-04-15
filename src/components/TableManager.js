import React, { Component } from 'react';
import TableRenderer from './TableRenderer';
import ConfigFormRenderer from './ConfigFormRenderer';
//import ItemEntry from './ItemEntry';

export default class TableManager extends Component {
  state = {
    sinceLastArriveList: [],
    serviceTimeList: [],
    entryList: [],
    tableRendered: true
  }

  addArriveTime = (arriveTime) => {
    console.log(arriveTime);
    if (this.state.sinceLastArriveList.indexOf(arriveTime)<0) {
      this.setState((state) => {
        console.log("addingArriveTime");
        let sinceLastArriveList = this.state.sinceLastArriveList;
        sinceLastArriveList.push(arriveTime);
        return {
          sinceLastArriveList: sinceLastArriveList
        };
      });
    }
  }

  removeArriveTime = (arriveTime) => {
    this.setState((state) => {
      let nArriveTime = this.state.sinceLastArriveList;
      for (let i=0; i < arriveTime.length; i++) {
        nArriveTime.splice(nArriveTime.indexOf(arriveTime[i]),1);
      }
      return {sinceLastArriveList: nArriveTime};
    });
  }

  addServiceTime = (serviceTime) => {
    if (this.state.serviceTimeList.indexOf(serviceTime)<0) {
      this.setState((state) => {
        let serviceTimeList = this.state.serviceTimeList;
        serviceTimeList.push(serviceTime);
        return {
          serviceTimeList: serviceTimeList
        };
      });
    }
  }

  removeServiceTime = (serviceTime) => {
    this.setState((state) => {
      let nServiceTime = this.state.serviceTimeList;
      for (let i=0; i < serviceTime.length; i++) {
        nServiceTime.splice(nServiceTime.indexOf(serviceTime[i]),1);
      }
      return {serviceTimeList: nServiceTime};
    });
  }

  renderTable = () => {
    let entries = [];
    this.setState((state) => {
      return {
        entryList: entries,
        tableRendered: true};
    });
    console.log('render or rerender table');
  }

  cleanTable = () => {
    this.setState((state) => {
      return {
        entryList: [],
        tableRendered: false
      };
    });
    console.log('clean table');
  }

  render() {
    return (
        <div id="TableManager">
          <ConfigFormRenderer
            sinceLastArriveList={this.state.sinceLastArriveList}
            serviceTimeList={this.state.serviceTimeList}
            isTableActive={this.state.tableRendered}
            addArriveTime={this.addArriveTime}
            addServiceTime={this.addServiceTime}
            removeArriveTime={this.removeArriveTime}
            removeServiceTime={this.removeServiceTime}
            renderTable={this.renderTable}
            cleanTable={this.cleanTable}
          />
          <TableRenderer
            entryList={this.state.entryList}
            isActive={this.state.tableRendered}
            renderTable={this.renderTable}
            cleanTable={this.cleanTable}
          />
        </div>
    );
  }
}
