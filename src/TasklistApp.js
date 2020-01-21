import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import Tasklist from './Tasklist';
import TasklistForm from './TasklistForm';

function TasklistApp() {
  const initialTasks = [
    { id: 1, task: 'Clean Fishtank', completed: false},
    { id: 2, task: 'Wash Car', completed: true},
    { id: 3, task: 'Grow Beard', completed: false}
  ];
  const [tasks, setTasks] = useState(initialTasks);
  const addTask = newTaskText => {
    setTasks([...tasks, {id: 4, task: newTaskText, completed: false }]);
  }

  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
      elevation={0}
    >
      <AppBar color='primary' position='static' style={{ height: '64px' }} >
        <Toolbar>
          <Typography color='inherit'>Tasklist with Hooks</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify='center' style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <TasklistForm addTask={addTask} />
          <Tasklist tasks={tasks} />
        </Grid>
      </Grid>
      
    </Paper>
  )
}

export default TasklistApp;

// TasklistApp
//   TasklistForm
//   Tasklist
//     TasklistItem

// TasklistItem
// id, task, completed