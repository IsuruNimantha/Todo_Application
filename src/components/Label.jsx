import React from 'react';

const label = ({ todo, toggleComplete }) => {
    return (
        <p onClick={() => toggleComplete(todo)} style={{ textDecoration : todo.completed ? 'line-through' : 'none' }} >
        {todo.text}
        </p>
    );
  };
  
  export default label;