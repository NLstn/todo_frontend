import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ todos, onDeleteTodo, onUpdateTodo: updateTodo}) {

  if(!todos) return (<div></div>);

  return (
    <ul>
      {todos.map((todo, index) => (
        <TodoItem
        key={index} 
        todo={todo} 
        updateTodo={updateTodo} 
        deleteTodo={() => onDeleteTodo(todo.id)} // pass onDeleteTodo as a prop
      />
      ))}
    </ul>
  );
}

export default TodoList;