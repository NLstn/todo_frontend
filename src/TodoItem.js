import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

function TodoItem({ todo, updateTodo, deleteTodo }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newDescription, setNewDescription] = useState(todo.description);

  const handleDescriptionClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if(newDescription && newDescription !== todo.description)
      updateTodo(todo.id, newDescription);
    setIsModalOpen(false);
  };

  return (
    <li>
      <span onClick={handleDescriptionClick}>{todo.description}</span>
      <button style={{ color: 'red', background: 'none', border: 'none' }} onClick={() => deleteTodo(todo.id)}>
        <FontAwesomeIcon icon={faTrash} style={{ cursor: 'pointer' }}/>
      </button>
      {isModalOpen && (
        <div className="modal">
          <form onSubmit={handleFormSubmit}>
            <input
              type="text"
              value={newDescription}
              onChange={(e) => setNewDescription(e.target.value)}
            />
            <button type="submit">Update</button>
          </form>
        </div>
      )}
    </li>
  );
}

export default TodoItem;