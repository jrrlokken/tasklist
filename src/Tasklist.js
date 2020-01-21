import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';

import TasklistItem from './TasklistItem';

function Tasklist(props) {
  return (
    <Paper>
      <List>
        {props.tasks.map(task => (
          <>
            <TasklistItem task={task.task} key={task.id} completed={task.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper> 
  );
}

export default Tasklist;