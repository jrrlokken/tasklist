import React, { createContext } from 'react';
import {useLocalStorageReducer} from '../hooks/useLocalStorageReducer';
import taskReducer from '../reducers/tasks.reducer';

const defaultTasks = [];

export const TasksContext = createContext();
export const DispatchContext = createContext();

export function TasksProvider(props) {
  const [tasks, dispatch] = useLocalStorageReducer('tasks', defaultTasks, taskReducer);
  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  )
}