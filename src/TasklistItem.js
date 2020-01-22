import React from 'react';
import useToggle from './hooks/useToggle';
import EditTaskForm from './EditTaskForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

function TasklistItem({ id, task, completed, removeTask, toggleTask, editTask }) {
  const [isEditing, toggle] = useToggle(false);
  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? <EditTaskForm editTask={editTask} id={id} task={task} toggleEditForm={toggle} /> : 
      <>
        <Checkbox tabIndex={-1} checked={completed} onClick={() => toggleTask(id)} />
        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton>
            <EditIcon aria-label='edit' onClick={toggle} />
          </IconButton>
          <IconButton>
            <DeleteIcon aria-label='delete' onClick={() => removeTask(id)} />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      } 
    </ListItem>
  )
}

export default TasklistItem;