import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { Button } from '@mui/material';

const button = ({ todo, deleteTodo }) => {
    return (
        <Button
            variant="outlined"
            color='error'
            startIcon={<DeleteIcon/>}
            onClick={() => deleteTodo(todo.id)}>
            Delete
        </Button>
    );
  };
  
  export default button;