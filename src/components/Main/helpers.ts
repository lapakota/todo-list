import { RadioSortValues } from '../../typescript/enums/radio-sort-values';
import { tasksStore } from '../../stores/tasks-store/tasks.store';

export const getSortedTasks = (sortType: RadioSortValues) => {
  switch (sortType) {
    case RadioSortValues.All:
      return tasksStore.allTasks;
    case RadioSortValues.Active:
      return tasksStore.activeTasks;
    case RadioSortValues.Completed:
      return tasksStore.completedTasks;
  }
};
