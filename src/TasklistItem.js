import React, { useContext, memo } from 'react';
import useToggle from './hooks/useToggle';
import EditTaskForm from './EditTaskForm';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { DispatchContext } from './contexts/tasks.context';

function TasklistItem({ id, task, completed }) {
  const dispatch = useContext(DispatchContext);
  const [isEditing, toggle] = useToggle(false);

  return (
    <ListItem style={{ height: '64px' }}>
      {isEditing ? <EditTaskForm id={id} task={task} toggleEditForm={toggle} /> : 
      <>
        <Checkbox tabIndex={-1} checked={completed} onClick={() => dispatch({ type: 'TOGGLE', id: id })} />
        <ListItemText style={{ textDecoration: completed ? 'line-through' : 'none' }}>{task}</ListItemText>
        <ListItemSecondaryAction>
          <IconButton>
            <EditIcon aria-label='edit' onClick={toggle} />
          </IconButton>
          <IconButton>
            <DeleteIcon aria-label='delete' onClick={() => dispatch({ type: 'REMOVE', id: id })} />
          </IconButton>
        </ListItemSecondaryAction>
      </>
      } 
    </ListItem>
  )
}

export default memo(TasklistItem);