import React, { useEffect, useState } from 'react';
import { TodoContext } from '../../context';
import {
  addNewTodo,
  deleteTodobyId,
  getAllTodos,
  updateTodoById,
} from '../../services/todoAdapter';
import AddNewTodo from './AddNewTodo';
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

  const newTodo = async (newPartialTodo) => {
    try {
      const newTodo = await addNewTodo(newPartialTodo);
      setTodos((prevTodos) => [newTodo, ...prevTodos]);
    } catch (e) {
      setError(e.message);
    }
  };

  const toggleCompleted = async (id) => {
    const todo = todos.find((el) => el.id === id);
    const newTodo = { ...todo, completed: !todo.completed };
    try {
      setLoading(LOADING_STATE.LOADING);
      const updateTodo = await updateTodoById(id, newTodo);
      setTodos((prevTodos) =>
        prevTodos.map((el) => {
          if (el.id !== id) {
            return id;
          }
          return updateTodo;
        })
      );
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(LOADING_STATE.LOADED);
    }
  };

  const deleteTodo = async (id) => {
    try {
      setLoading(LOADING_STATE.LOADING);
      const deletedId = await deleteTodobyId(id);
      setTodos((prevTodos) => prevTodos.filter((el) => el.id !== deletedId));
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(LOADING_STATE.LOADED);
    }
  };

  if (loading === LOADING_STATE.LOADING) {
    return loading;
  }
  if (error) {
    return <div>{error}</div>;
  }

  return (
    <TodoContext.Provider value={{ newTodo, toggleCompleted, deleteTodo }}>
      <div className="todoList">
        <AddNewTodo />
        {todos.map((item) => (
          <TodoItem key={item.id} id={item.id} title={item.title} completed={item.completed} />
        ))}
      </div>
    </TodoContext.Provider>
  );
}
