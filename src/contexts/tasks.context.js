import React, { createContext, useReducer } from 'react';
import taskReducer from '../reducers/tasks.reducer';

const defaultTasks = [
  { id: 1, task: 'Mow the lawn with goats', completed: true },
  { id: 2, task: 'Spend time with Maggie!', completed: false }
];

export const TasksContext = createContext();
export const DispatchContext = createContext();

export function TasksProvider(props) {
  const [tasks, dispatch] = useReducer(taskReducer, defaultTasks);
  return (
    <TasksContext.Provider value={tasks}>
      <DispatchContext.Provider value={dispatch}>
        {props.children}
      </DispatchContext.Provider>
    </TasksContext.Provider>
  )
}