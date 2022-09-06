import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { ChangeEvent, KeyboardEvent, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { tasksStore } from '../../../../stores/tasks-store/tasks.store';
import styles from './AddTaskInput.module.scss';

export const AddTaskInput = observer(() => {
  const [taskText, setTaskText] = useState('');

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTaskText(event.target.value);
  };

  const handleEnter = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== 'Enter' || !taskText) return;

    tasksStore.addTask(taskText);
    setTaskText('');
  };

  return (
    <Box className={styles.wrapper}>
      <TextField
        fullWidth
        label="Add new task"
        value={taskText}
        onChange={handleChange}
        onKeyDown={handleEnter}
      />
    </Box>
  );
});
