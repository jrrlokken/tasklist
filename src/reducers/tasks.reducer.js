import uuid from 'uuid/v4';

const reducer = (state, action) => {
  switch(action.type) {
    case 'ADD':
      return [...state, {id: uuid(), task: action.task, completed: false }];
    case 'REMOVE':
      return state.filter(task => task.id !== action.id);
    case 'TOGGLE':
      return state.map(task =>
        task.id === action.id ? {...task, completed: !task.completed } : task
      );
    case 'EDIT':
      return state.map(task =>
        task.id === action.id ? {...task, task: action.newTask } : task
      );
    default:
      return state;
  }
}

export default reducer;