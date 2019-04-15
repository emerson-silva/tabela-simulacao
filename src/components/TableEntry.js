import React, { Component } from 'react';

export default class TableEntry extends Component {
  render() {
    return (
      <tr>
        <td> { this.props.item.id } </td>
        <td> { this.props.item.timeSinceLastArrive } </td>
        <td> { this.props.item.lastArriveTime } </td>
        <td> { this.props.item.serviceTimeSpent } </td>
        <td> { this.props.item.serviceStartTime } </td>
        <td> { this.props.item.timeInQueue } </td>
        <td> { this.props.item.serviceEndTime } </td>
        <td> { this.props.item.timeSpentOnSystem } </td>
        <td> { this.props.item.freeTime } </td>
      </tr>
    );
  }
}
