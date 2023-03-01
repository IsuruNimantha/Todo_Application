import React, { useState, useEffect } from 'react';
import Todo from './components/Todo';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import '../src/styles/todo.css';
import { postTask, getTasks, updateTask, deleteTask } from '../src/services/functions';
import firebaseInstance from './firebase/firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // Create task
  const createTodo = async (e) => {
    e.preventDefault(e);
    if (input === '') {
      alert('Please enter a valid todo');
      return;
    }
    let data = {
      text: input,
      completed: false
    }
    let status = postTask(data);
    console.log(status);
    if(status === '200'){
      console.log('doneeeeeeeeeee');
      let tempArr = todos.push(data);
      setTodos(tempArr);
    }

    //getTodos();
    setInput('');
  };

  // Get tasks from firebase || update dependancy array
  useEffect(() => {
      getTodos();
    }, []);

  const getTodos = async (e) => {

    getTasks().then((data) => {
      const fetchedResults = [];

      for (let key in data) {
        fetchedResults.push({
          ...data[key],
          id: key,
        });
      }
      setTodos(fetchedResults);
    });
  }

  // Update task in firebase
  const updateTodo = async (todo) => {
    todo.completed = !todo.completed;
    await updateTask(todo);
    getTodos();
  };

  // Delete task from firebase
  const deleteTodo = async (id) => {
    await deleteTask(id);
    getTodos();
  };

  return (
    <div className='bg' >
      <div className="container">
        <Header/><br></br>
          <AddTodo
            createTodo={createTodo}
            input={input}
            setInput={setInput}/>
            <br></br>
          {todos.map((todo, index) => (
            <Todo 
              key={index}
              todo={todo}
              toggleComplete={updateTodo}
              deleteTodo={deleteTodo}/>
          ))}
          {todos.length < 1 ? null : (
            <p className="count">{`You have ${todos.length} todos`}</p>
          )}
      </div>
    </div>
  );
}

export default App;
