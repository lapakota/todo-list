import { SortTypes } from '../../typescript/enums/sort-types';
import { tasksStore } from '../../stores/tasks-store/tasks.store';

export const getSortedTasks = (sortType: SortTypes) => {
  switch (sortType) {
    case SortTypes.All:
      return tasksStore.allTasks;
    case SortTypes.Active:
      return tasksStore.activeTasks;
    case SortTypes.Completed:
      return tasksStore.completedTasks;
  }
};
