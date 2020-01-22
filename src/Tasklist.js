import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import TasklistItem from './TasklistItem';

function Tasklist({ tasks, removeTask, toggleTask, editTask }) {
  if(tasks.length)
    return (
      <Paper>
        <List>
          {tasks.map((task, idx) => (
            <>
              <TasklistItem
                {...task}
                key={task.id}
                removeTask={removeTask}
                toggleTask={toggleTask}
                editTask={editTask}
              />
              { idx < tasks.length -1 && <Divider />}
            </>
          ))}
        </List>
      </Paper> 
    );
  return null;
}

export default Tasklist;