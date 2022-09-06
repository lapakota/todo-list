import { observer } from 'mobx-react-lite';
import styles from './TasksList.module.scss';
import { Task } from '../../../../typescript/models/task';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import CancelIcon from '@mui/icons-material/Cancel';
import { tasksStore } from '../../../../stores/tasks-store/tasks.store';
import { Typography } from '@mui/material';
import cn from 'classnames';

interface Props {
  tasks: Task[];
}

export const TasksList = observer(({ tasks }: Props) => {
  return (
    <List className={styles.tasksList}>
      {tasks.length ? (
        tasks.map((task) => {
          const labelId = `checkbox-list-label-${task.id}`;
          return (
            <ListItem
              className={styles.task}
              key={task.id}
              secondaryAction={
                <IconButton
                  edge="end"
                  aria-label="remove"
                  onClick={() => tasksStore.removeTask(task.id)}>
                  <CancelIcon />
                </IconButton>
              }
              disablePadding>
              <ListItemButton role={undefined} onClick={() => tasksStore.onCheck(task.id)} dense>
                <ListItemIcon>
                  <Checkbox
                    color={'default'}
                    edge="start"
                    checked={task.completed}
                    tabIndex={-1}
                    disableRipple
                    inputProps={{ 'aria-labelledby': labelId }}
                  />
                </ListItemIcon>
                <ListItemText
                  className={cn(task.completed && styles.completed)}
                  id={labelId}
                  primary={task.text}
                />
              </ListItemButton>
            </ListItem>
          );
        })
      ) : (
        <Typography className={styles.placeHolder} variant="h3" component="h3">
          No tasks
        </Typography>
      )}
    </List>
  );
});
