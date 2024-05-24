import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);

  const fetchTodos = () => {
    fetch('http://localhost:8080/v1/todos')
      .then(response => response.json())
      .then(data => setTodos(data))
      .catch(error => console.error('Error:', error));
  }

  useEffect(fetchTodos, []);

  const handleDeleteTodo = (id) => {
    fetch(`http://localhost:8080/v1/todos/${id}`, {
      method: 'DELETE'
    }).then(fetchTodos)
      .catch(error => console.error('Error:', error));
  };

  return (
    <div className="App">
      <AddTodo onAddTodo={fetchTodos} />
      <TodoList todos={todos} onDeleteTodo={handleDeleteTodo} />
    </div>
  );
}

export default App;