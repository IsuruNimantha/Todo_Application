import React from 'react';

const checkbox = ({ todo, toggleComplete }) => {
    return (
        <input onChange={() => toggleComplete(todo)} type='checkbox' checked={todo.completed ? 'checked' : ''} />
    );
  };
  
  export default checkbox;