import styles from './Footer.module.scss';
import { observer } from 'mobx-react-lite';
import { tasksStore } from '../../stores/tasks-store/tasks.store';

export const Footer = observer(() => {
  return (
    <footer className={styles.footer}>
      <p className={styles.info}>{`Active tasks: ${tasksStore.activeTasks.length}`}</p>
      <p className={styles.info}>{`Completed tasks: ${tasksStore.completedTasks.length}`}</p>
    </footer>
  );
});
