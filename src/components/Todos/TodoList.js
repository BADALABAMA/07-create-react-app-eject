import Todo from './Todo';
import styles from './TodoList.module.css';

function TodoList({ todos, deleteTodo }) {
  return (
    <div className={styles.todoListContainer}>
      {!todos.length && <h2>Todo list is empty</h2>}
      {todos.map((todo, index) => (
        <Todo key={index} todo={todo} index={index} deleteTodo={deleteTodo} />
      ))}
    </div>
  ); // выполняем итерацию по массиву строк с помощью метода  МАР
} // в каждый компонент ТОДО передаем свойство ТОДО(строка)
export default TodoList;
