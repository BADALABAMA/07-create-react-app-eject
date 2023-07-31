import { useState } from 'react';
import './App.css';

import TodoForm from './components/Todos/TodoForm';

import TodoList from './components/Todos/TodoList';

function App() {
  const [todos, setTodos] = useState([]); // создаем массив
  const addTodoHandler = (text) => {
    // добавление новых задач в массив задач
    setTodos([...todos, text]); // передаем новый массив задач, благодаря спреду добавляем задачу в конец
  };
  const deleteTodoHandler = (index) => {
    setTodos(todos.filter((_, idx) => idx != index));
  };
  return (
    <div className="App">
      <h1>Todo App</h1>
      <TodoForm addTodo={addTodoHandler} />
      <TodoList todos={todos} deleteTodo={deleteTodoHandler} />
    </div> //передаем массив задач в TodoList в качесте свойства todos={todos}
  );
}

export default App;
