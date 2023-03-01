import React from 'react';
import Checkbox from '../components/Checkbox';
import Label from '../components/Label';
import Button from '../components/Button';
import { List, ListItem, Paper, ListItemSecondaryAction, ListItemText } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Todo = ({ todo, toggleComplete, deleteTodo }) => {
  return (
        <Paper style={{ margin: 'auto', marginTop: 8 }} sx={{ width: '50%' }}>
          <List>
            <ListItem>
                <Checkbox
                  todo={todo} 
                  toggleComplete={toggleComplete}/>
              <ListItemText primary={<Label todo={todo}/>} style={{ paddingLeft: 25 }}/>
              <ListItemSecondaryAction>
              <Button
                    variant="outlined"
                    startIcon={<DeleteIcon/>}
                    todo={todo} 
                    deleteTodo={deleteTodo}/>
              </ListItemSecondaryAction>
          </ListItem>
          </List>
        </Paper>
  );
};

export default Todo;