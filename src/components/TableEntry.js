import React, { Component } from 'react';

export default class TableEntry extends Component {
  render() {
    return (
      <tr>
        <td>entry.id</td>
        <td>entry.timeSinceLastArrive</td>
        <td>entry.lastArriveTime</td>
        <td>entry.serviceTimeSpent</td>
        <td>entry.serviceStartTime</td>
        <td>entry.timeInQueue</td>
        <td>entry.serviceEndTime</td>
        <td>entry.timeSpentOnSystem</td>
        <td>entry.freeTime</td>
      </tr>
    );
  }
}
