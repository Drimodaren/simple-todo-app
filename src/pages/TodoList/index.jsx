import React, { useEffect, useState } from 'react';
import { getAllTodos } from '../../services/todoAdapter';
import TodoItem from './TodoItem';

export const LOADING_STATE = { NEVER: 'Never', LOADING: 'Loading', LOADED: 'Loaded' };
export default function TodoList() {
  const [loading, setLoading] = useState(LOADING_STATE.NEVER);
  const [error, setError] = useState('');
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const cb = async () => {
      setLoading(LOADING_STATE.LOADING);
      try {
        const todos = await getAllTodos();
        setTodos(todos);
      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(LOADING_STATE.LOADED);
      }
    };
    cb();
  }, []);

  return (
    <div>
      {todos.map((item) => (
        <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed} />
      ))}
    </div>
  );
}
