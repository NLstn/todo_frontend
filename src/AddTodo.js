import React, { useState } from 'react';

function AddTodo({ onAddTodo }) {
  const [todoDescription, setTodoDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:8080/v1/todos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: todoDescription })
    }).then(() => {
      onAddTodo();
      setTodoDescription('');
    }).catch(error => console.error('Error:', error));
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={todoDescription} onChange={(e) => setTodoDescription(e.target.value)} />
      <button type="submit">Add</button>
    </form>
  );
}

export default AddTodo;