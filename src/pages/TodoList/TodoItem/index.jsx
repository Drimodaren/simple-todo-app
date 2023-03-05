import React, { useContext } from 'react';
import { TodoContext } from '../../../context';

export default function TodoItem({ id, title, completed }) {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const handleToggle = (id) => {
    toggleCompleted(id);
  };
  const handleDelete = (id) => {
    deleteTodo(id);
  };
  return (
    <div>
      {title}

      <input type="checkbox" completed={completed} onChange={handleToggle} />
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
