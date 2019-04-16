import React, { Component } from 'react';
import TableRenderer from './TableRenderer';
import ConfigFormRenderer from './ConfigFormRenderer';
import Entry from './Entry';

export default class TableManager extends Component {
  state = {
    sinceLastArriveList: [],
    serviceTimeList: [],
    entryList: [],
    simulationTimeLimit: 0,
    workInProgress: true
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

  getRandomFromList = (arrayList) => {
    return Math.floor(Math.random()*arrayList.length);
  }

  generateRandomEntry = (id, lastEntry) => {
    console.log(id);
    console.log(typeof lastEntry);
    let randomEntry = new Entry(id, 0, 0, 0, 0, 0, 0, 0, 0);
    if (lastEntry===null || lastEntry===undefined) {
      lastEntry = new Entry(id, 0, 0, 0, 0, 0, 0, 0, 0);
    }

    randomEntry.id = id;
    randomEntry.timeSinceLastArrive = this.getRandomFromList(this.state.sinceLastArriveList);
    randomEntry.lastArriveTime = lastEntry.lastArriveTime + randomEntry.timeSinceLastArrive;
    randomEntry.serviceTimeSpent = this.getRandomFromList(this.state.serviceTimeList);
    randomEntry.timeInQueue = (lastEntry.serviceEndTime>=randomEntry.lastArriveTime) ?
        lastEntry.serviceEndTime-randomEntry.lastArriveTime : 0;
    randomEntry.serviceStartTime = randomEntry.lastArriveTime + randomEntry.timeInQueue;
    randomEntry.serviceEndTime = randomEntry.serviceStartTime + randomEntry.serviceTimeSpent;
    randomEntry.timeSpentOnSystem = randomEntry.timeInQueue + randomEntry.serviceTimeSpent;
    randomEntry.freeTime = (lastEntry.serviceEndTime<randomEntry.lastArriveTime) ?
        randomEntry.lastArriveTime-lastEntry.serviceEndTime: 0;

    return randomEntry;
  }

  renderTable = () => {
    let workInProgress = true;
    let entries = [];
    let id = 2;
    let lastEntry = this.generateRandomEntry(1);
    entries.push(lastEntry);

    while (workInProgress) {
      lastEntry = this.generateRandomEntry(id, lastEntry);
      if (lastEntry.lastArriveTime < this.state.simulationTimeLimit) {
        entries.push(lastEntry);
        id++;
      } else {
        workInProgress = false;
      }
    }

    this.setState((state) => {
      return {entryList: entries};
    });
  }

  cleanTable = () => {
    this.setState((state) => {
      return {
        entryList: [],
        sinceLastArriveList: [],
        serviceTimeList: [],
        simulationTimeLimit: '',
      };
    });
  }

  setSimulationTimeLimit = (timeLimit) => {
    this.setState((state) => {
      return {simulationTimeLimit: timeLimit};
    });
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
            renderTable={this.renderTable}
            cleanTable={this.cleanTable}
            setSimulationTimeLimit={this.setSimulationTimeLimit}
          />
          <TableRenderer
            entryList={this.state.entryList}
          />
        </div>
    );
  }
}
