export default class {

  id;
  timeSinceLastArrive;
  lastArriveTime;
  serviceTimeSpent;
  timeInQueue;
  serviceStartTime;
  serviceEndTime;
  timeSpentOnSystem;
  freeTime;

  constructor(id, timeSinceLastArrive, lastArriveTime, serviceTimeSpent, timeInQueue, serviceStartTime, serviceEndTime, timeSpentOnSystem, freeTime) {
    this.id = id;
    this.timeSinceLastArrive = timeSinceLastArrive;
    this.lastArriveTime = lastArriveTime;
    this.serviceTimeSpent = serviceTimeSpent;
    this.timeInQueue = timeInQueue;
    this.serviceStartTime = serviceStartTime;
    this.serviceEndTime = serviceEndTime;
    this.timeSpentOnSystem = timeSpentOnSystem;
    this.freeTime = freeTime;

  }
}
