import { useState } from 'react';
import formStyles from './TodoForm.module.css';
import { RxCheck } from 'react-icons/rx';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');
  const onSubmitHandler = (event) => {
    event.preventDefault(); // что бы браузер не обновлялся при сабмите
    addTodo(text); //вызов функции что бы в компоненте APP изменить состояние
    setText(''); // очищаем поле ввода передавая пустую строку
  };
  return (
    //вызывает при сабмите формы функцию хендлера
    // стили работают только в этом диве
    <div className={formStyles.todoFormContainer}>
      <form onSubmit={onSubmitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <button onClick="" type="submit">
          <RxCheck></RxCheck>
        </button>
      </form>
    </div>
  );
}
export default TodoForm;
