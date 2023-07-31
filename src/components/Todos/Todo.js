import { RiTodoFill } from 'react-icons/ri';
import styles from './Todo.module.css';

function Todo({ todo, index, deleteTodo }) {
  return (
    // добавление рамок в задачи
    // импорт и стилизация иконки
    <div className={styles.todo} onDoubleClick={() => deleteTodo(index)}>
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todo.text}>{todo}</div>
    </div>
  ); // отображаем текст каждой задачи в интерфейсе
}

export default Todo;
