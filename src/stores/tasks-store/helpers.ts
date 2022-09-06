import { Task } from '../../typescript/models/task';

const generateId = (text: string) => `${Date.now()}-${text}`;

export const createNewTask = (text: string): Task => {
  const id = generateId(text);

  return { id, text, completed: false };
};

export const getTestTasks = (): Task[] => {
  return [
    {
      id: 'firstId',
      text: 'Дописать тестовое 🎉🎉🎉',
      completed: true
    },
    {
      id: 'secondId',
      text: 'Хорошо отдохнуть 🏖️🏖️🏖️',
      completed: false
    },
    {
      id: 'thirdId',
      text: 'Получить оффер 🔥🔥🔥',
      completed: false
    }
  ];
};
