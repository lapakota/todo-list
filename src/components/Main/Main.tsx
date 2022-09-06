import styles from './Main.module.scss';
import { TasksList } from './components/TasksList/TasksList';
import { SortRadioGroup } from './components/SortRadioGroup/SortRadioGroup';
import { sortTypeStore } from '../../stores/sort-type-store/sort-type.store';
import { getSortedTasks } from './helpers';
import { observer } from 'mobx-react-lite';
import { AddTaskInput } from './components/AddTaskInput/AddTaskInput';

export const Main = observer(() => {
  return (
    <main className={styles.main}>
      <SortRadioGroup />
      <AddTaskInput />
      <TasksList tasks={getSortedTasks(sortTypeStore.currentType)} />
    </main>
  );
});
