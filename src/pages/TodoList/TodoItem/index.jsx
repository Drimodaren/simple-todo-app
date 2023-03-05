import React, { useContext } from 'react';
import { TodoContext } from '../../../context';

export default function TodoItem({ id, title, completed }) {
  const { toggleCompleted, deleteTodo } = useContext(TodoContext);

  const handleToggle = () => {
    toggleCompleted(id);
  };
  const handleDelete = () => {
    deleteTodo(id);
  };
  return (
    <div>
      {title}

      <input type="checkbox" checked={completed} onChange={handleToggle} />
      <button onClick={handleDelete}>delete</button>
    </div>
  );
}
