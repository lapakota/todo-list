import styles from './Main.module.scss';
import { TasksList } from './components/TasksList/TasksList';
import { SortRadioGroup } from './components/SortRadioGroup/SortRadioGroup';
import { AddTaskInput } from './components/AddTaskInput/AddTaskInput';

export const Main = () => {
  return (
    <main className={styles.main}>
      <SortRadioGroup />
      <AddTaskInput />
      <TasksList />
    </main>
  );
};
