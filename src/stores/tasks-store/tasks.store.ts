import { makeAutoObservable } from 'mobx';

class TasksStore {
  constructor() {
    makeAutoObservable(this);
  }
}

export const tasksStore = new TasksStore();
