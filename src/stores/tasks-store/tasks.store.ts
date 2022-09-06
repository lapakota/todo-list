import { autorun, makeAutoObservable } from 'mobx';
import { Task } from '../../typescript/models/task';
import { createNewTask, getTestTasks } from './helpers';
import { loadFromLocalStorage, saveToLocalStorage } from '../../utils/local-storage-helper';
import { LocalStorageKeys } from '../../typescript/enums/local-storage-keys';

class TasksStore {
  constructor() {
    makeAutoObservable(this);
  }

  tasks: Task[] = loadFromLocalStorage(LocalStorageKeys.Tasks) || getTestTasks();

  get allTasks() {
    return this.tasks;
  }

  get activeTasks() {
    return this.tasks.filter((task) => !task.completed);
  }

  get completedTasks() {
    return this.tasks.filter((task) => task.completed);
  }

  onCheck = (id: string) => {
    const currentTask = this.tasks.find((task) => task.id === id);
    if (!currentTask) return;

    currentTask.completed = !currentTask.completed;
  };

  addTask = (taskText: string) => taskText && this.tasks.unshift(createNewTask(taskText));

  removeTask = (id: string) => {
    this.tasks = this.tasks.filter((task) => task.id !== id);
  };
}

export const tasksStore = new TasksStore();

autorun(() => {
  saveToLocalStorage(LocalStorageKeys.Tasks, tasksStore.tasks);
});
