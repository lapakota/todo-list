import { makeAutoObservable } from 'mobx';
import { Task } from '../../typescript/models/task';
import { createNewTask } from './helpers';

class TasksStore {
  constructor() {
    makeAutoObservable(this);
  }

  tasks: Task[] = [];

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
