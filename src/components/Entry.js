export default class {

  id;
  lastArriveTime;
  serviceTimeSpent;
  serviceStartTime;
  timeInQueue;
  serviceEndTime;
  timeSpentOnSystem;
  freeTime;

  constructor(id, lastArriveTime, serviceTimeSpent, serviceStartTime, timeInQueue, serviceEndTime, timeSpentOnSystem, freeTime) {
    this.id = id;
    this.lastArriveTime = lastArriveTime;
    this.serviceTimeSpent = serviceTimeSpent;
    this.serviceStartTime = serviceStartTime;
    this.timeInQueue = timeInQueue;
    this.serviceEndTime = serviceEndTime;
    this.timeSpentOnSystem = timeSpentOnSystem;
    this.freeTime = freeTime;
  }
}
