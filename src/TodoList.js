import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

function TodoList({ todos, onDeleteTodo }) {

  if(!todos) return (<div></div>);

  return (
    <ul>
      {todos.map((todo, index) => (
        <li key={index}>
          {todo.description}
          <button style={{ color: 'red', background: 'none', border: 'none' }} onClick={() => onDeleteTodo(todo.id)}>
            <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }}/>
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;