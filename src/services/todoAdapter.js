export const getAllTodos = async () => {
  return await [
    { id: 1, title: 'first', completed: false },
    { id: 2, title: 'second', completed: false },
    { id: 3, title: 'third', completed: true },
  ];
};
export const addNewTodo = async (newPartialTodo) => {
  const newTodo = { ...newPartialTodo, id: new Date() };
  return newTodo;
};
export const updateTodoById = async (id, newTodo) => {
  return newTodo;
};
export const deleteTodobyId = async (id) => {
  return id;
};
