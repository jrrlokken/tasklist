import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import TasklistItem from './TasklistItem';

function Tasklist({ tasks, removeTask, toggleTask }) {
  return (
    <Paper>
      <List>
        {tasks.map(task => (
          <>
            <TasklistItem
              id={task.id}
              task={task.task}
              key={task.id}
              completed={task.completed}
              removeTask={removeTask}
              toggleTask={toggleTask}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper> 
  );
}

export default Tasklist;