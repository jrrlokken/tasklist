import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function TasklistForm({ addTask }) {
  const [value, handleChange, reset] = useInputState('');

  return (
    <Paper style={{ margin: '1rem 0', padding: '0 1rem' }}>
      <form
        onSubmit={(evt) => {
          evt.preventDefault();
          addTask(value);
          reset();
        }}
      >
        <TextField
          value={value}
          onChange={handleChange}
          margin='normal'
          label='Add new task'
          fullWidth
        />
      </form>
    </Paper>
  )
}

export default TasklistForm;