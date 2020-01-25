import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import TasklistItem from './TasklistItem';
import { TasksContext } from './contexts/tasks.context';


function Tasklist(props) {
  const tasks = useContext(TasksContext);
  if(tasks.length)
    return (
      <Paper>
        <List>
          {tasks.map((task, idx) => (
            <>
              <TasklistItem
                {...task}
                key={task.id}
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