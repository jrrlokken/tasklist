import useLocalStorageState from './useLocalStorageState';
import uuid from 'uuid/v4';

export default initialTasks => {
  const [tasks, setTasks] = useLocalStorageState('tasks', initialTasks);
  return {
    tasks,
    addTask: newTaskText => {
      setTasks([...tasks, {id: uuid(), task: newTaskText, completed: false }]);
    },
    removeTask: taskId => {
      const updatedTasks = tasks.filter(task => task.id !== taskId);
      setTasks(updatedTasks);
    },
    editTask: (taskId, newTask) => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? {...task, task: newTask } : task
      );
      setTasks(updatedTasks)
    },
    toggleTask: taskId => {
      const updatedTasks = tasks.map(task =>
        task.id === taskId ? {...task, completed: !task.completed } : task
      );
      setTasks(updatedTasks);
    }
  }
}