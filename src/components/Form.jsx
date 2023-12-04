import styles from './Todo.module.css';
import { useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Form = ({ input, setInput, todos, setTodos, editTodo, setEditTodo }) => {
  const updateTodo = (title, id, completed) => {
    const newTodo = todos.map((todo) =>
      todo.id === id ? { title, id, completed } : todo
    )
    setTodos(newTodo);
    setEditTodo("");
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title)
    } else {
      setInput("")
    }
  }, [setInput, editTodo]);
  const onInputChange = (event) => {
    setInput(event.target.value);
  };

  const onFormSubmit = (event) => {
    event.preventDefault();
    // set id to uuidv4, and set input to whatever is provided by the user

    if (!editTodo) {
      setTodos([...todos, { id: uuidv4(), title: input, complete: false }]);

      setInput("");
    } else {
      updateTodo(input, editTodo.id, editTodo.completed)
    }
  }


  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="Enter a Todo.."
        className={`${styles.inputs} ${todos.completed ? "done" : ""}`}
        onChange={onInputChange}
        value={input}
        required
      />
      <button type="submit" className={styles.btn}>
        {editTodo ? "OK" : "Add"}
      </button>
    </form>
  );
};

export default Form;


